const express = require("express");
const jobController = require("../controllers/jobController");
const router = express.Router();

router.post("/post-job", jobController.postJob);
router.get("/all-jobs", jobController.getAllJobs);
router.get("/edit-job/:id", jobController.getJobById);
router.patch("/update-job/:id", jobController.updateJob);
router.get("/myJobs/:email", jobController.getJobsByEmail);
router.delete("/delete/:id", jobController.deleteJob);

module.exports = router;
