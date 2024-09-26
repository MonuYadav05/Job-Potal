const jwt = require("jsonwebtoken");

//...............Auth...............//
exports.auth = (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.body.token || req.header("Authorisation");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unotherized access",
      });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
      req.user = decode;
    } catch (err) {
      console.log(err);
      return res.status(401).json({
        success: false,
        message: "Token Verification issue",
      });
    }

    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Somthing went wrong while Validatin token",
    });
  }
};

//.................isStudent...............//
exports.isStudent = (req, res, next) => {
  try {
    const accountType = req.user.accountType;
    if (accountType !== "Student") {
      return res.status(401).json({
        success: false,
        message: "this is protected route for student only",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "user role cannot be verified ,try again",
    });
  }
};

//.................isInstructor...............//
exports.isInstructor = (req, res, next) => {
  try {
    const accountType = req.user.accountType;
    if (accountType !== "Instructor") {
      return res.status(401).json({
        success: false,
        message: "this is protected route for Instructor only",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "user role cannot be verified ,try again",
    });
  }
};

//.................isAdmin...............//
exports.isAdmin = (req, res, next) => {
  try {
    const accountType = req.user.accountType;
    if (accountType !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "this is protected route for Admin only",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "user role cannot be verified ,try again",
    });
  }
};
