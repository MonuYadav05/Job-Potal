const express = require("express");
const User = require("../controllers/jobController");
const {
  sendotp,
  signup,
  login,
  forgatPassword,
  resetPassword,
} = require("../controllers/userController");
const router = express.Router();

router.post("/sendotp", sendotp);
router.post("/signup", signup);
router.post("/login", login);
router.post("/forget-password", forgatPassword);
router.post("/reset-password", resetPassword);
module.exports = router;
