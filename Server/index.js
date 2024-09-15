const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/Database");
const jobRoutes = require("./routes/jobRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
