const { client } = require("../config/Database");

const db = client.db("job-portal");
const jobsCollection = db.collection("demoJobs");
const User = db.collection("users");
const OTP = db.collection("otp");
const Profile = db.collection("profile");
module.exports = { jobsCollection, User, OTP, Profile };
