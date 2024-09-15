const { client } = require("../config/Database");

const db = client.db("job-portal");
const jobsCollection = db.collection("demoJobs");
const userCollection = db.collection("users");

module.exports = { jobsCollection, userCollection };
