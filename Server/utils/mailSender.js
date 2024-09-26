const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      // host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER, // your Gmail account
        pass: process.env.MAIL_PASS, // your Gmail password (app password if 2FA is enabled)
      },
    });

    const mailOptions = {
      from: "Job-Portal -Monu Yadav",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    };

    // Send email
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Email sent: " + info.response);
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = mailSender;
