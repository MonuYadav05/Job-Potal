require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    const db = client.db("job-portal");
    const OTP = db.collection("otp");
    await OTP.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
}

module.exports = { client, connectDB };
