const express = require("express");
const User = require("../controllers/jobController");
const { sendotp, signup, login } = require("../controllers/userController");
const router = express.Router();

router.post("/sendotp", sendotp);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
