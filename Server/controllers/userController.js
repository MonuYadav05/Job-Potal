const { User, OTP, Profile } = require("../models/collections");
const otpGenerator = require("otp-generator");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//   ...............otp................    //
exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body;
    const userPresent = await User.findOne({ email });
    if (userPresent) {
      //check if already registered
      return res.status(401).json({
        success: false,
        message: "User is already Registered",
      });
    }

    //generate otp
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });
    console.log("OTP generated:", otp);

    const result = await OTP.findOne({ otp: otp });

    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      result = await OTP.findOne({ otp: otp });
    }

    //sendmail
    const mailResponse = await mailSender(email, "Otp for SignUp", otp);
    console.log(mailResponse);

    const otpPayload = {
      email,
      otp,
      createdAt: Date.now(),
      expiresAt: Date.now() + 5 * 60 * 1000,
    };
    const otpBody = await OTP.insertOne(otpPayload);
    console.log(otpBody);

    res.status(200).json({
      success: true,
      message: "Otp sent successfully",
      otp,
    });
  } catch (err) {
    console.log("error in generating Otp", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// sign up
exports.signup = async (req, res) => {
  try {
    //fetch data
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      otp,
    } = req.body;
    //validate
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(403).json({
        success: false,
        message: "All feilds are required",
      });
    }

    //match password
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "password and confirmPassword does not match",
      });
    }

    //use exists or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User is already Registered",
      });
    }

    const recentOtpArray = await OTP.find({ email }).toArray();
    //find most recent otp
    // Check if any OTPs exist
    if (recentOtpArray.length === 0) {
      return res.status(400).json({
        success: false,
        message: "OTP not found",
      });
    }

    // Sort the array based on the createdAt field in descending order
    const recentOtp = recentOtpArray.sort(
      (a, b) => b.createdAt - a.createdAt
    )[0];

    console.log(recentOtp);

    //validateOtp
    if (!recentOtp) {
      return res.status(400).json({
        success: false,
        message: "OTP not found",
      });
    } else if (otp !== recentOtp.otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (Date.now() > recentOtp.expiresAt) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create entry in db
    const profileDetails = await Profile.insertOne({
      gender: null,
      adteOfBearth: null,
      about: null,
      contactNumber: null,
    });

    const user = await User.insertOne({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType,
      approved: true,
      additionalDetails: profileDetails.insertedId,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    res.status(200).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "User cannot be registered, please try again",
    });
  }
};

//login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validate data
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All feilds are required",
      });
    }

    //user exists or not
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User is not Registered! please signup first",
      });
    }

    //match password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "password is Incorrect",
      });
    }
    //generate token
    const payload = {
      email: email,
      id: user._id,
      accountType: user.accountType,
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    user.token = token;
    user.password = undefined;

    //create cookie and send response
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.cookie("token", token, options).status(200).json({
      success: true,
      token,
      user,
      message: "Logged In Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Login Faliur, Please try again",
    });
  }
};

//change password
exports.changePassword = async (req, res) => {
  try {
    //fetch data
    const { oldPassword, newPassword, confirmNewPassword } = req.body;

    if (newPassword !== confirmNewPassword) {
      return res.status(401).json({
        success: false,
        message: "confirm Password is not matching",
      });
    }

    //validation
    const token = req.cookie.token || req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unotherized access",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decode;
    const user = await User.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Old Password is Incorrect",
      });
    }

    //update pass in db
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUserDetails = await User.findByIdAndUpdate(
      req.user.id,
      { password: hashedPassword },
      { new: true }
    );
    //send mail
    try {
      const mailresponse = mailSender(
        email,
        "Email from StudyNotion",
        passwordUpdated(
          updatedUserDetails.email,
          `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
        )
      );
      console.log("Email Sent successfully", mailresponse);
    } catch (err) {
      console.log("error while sending mail", err);
      throw err;
    }

    //return res
    res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
