const { jobsCollection } = require("../models/collections");
const { ObjectId } = require("mongodb");

exports.postJob = async (req, res) => {
  const body = req.body;
  const result = await jobsCollection.insertOne(body);
  res.send(result);
};

exports.getAllJobs = async (req, res) => {
  const jobs = await jobsCollection.find({}).toArray();
  res.send(jobs);
};

exports.getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await jobsCollection.findOne({
      _id: ObjectId.createFromHexString(id),
    });
    res.send(job);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch job" });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const filter = { _id: ObjectId.createFromHexString(id) };
    const updateDoc = {
      $set: {
        ...data,
      },
    };

    const result = await jobsCollection.updateOne(filter, updateDoc);
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Failed to update job" });
  }
};

exports.getJobsByEmail = async (req, res) => {
  const { email } = req.params;
  const jobs = await jobsCollection.find({ postedBy: email }).toArray();
  res.send(jobs);
};

exports.deleteJob = (req, res) => {
  const { id } = req.params;
  jobsCollection
    .deleteOne({ _id: ObjectId.createFromHexString(id) })
    .then((result) => res.send(result));
};
