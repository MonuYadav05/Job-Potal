const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/Database");
const jobRoutes = require("./routes/jobRoutes");
const AuthRoutes = require("./routes/AuthRoutes");
const { auth } = require("./middlewares/auth");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/jobs", jobRoutes);
app.use("/auth", AuthRoutes);

app.get("/", auth, (req, res) => {
  res.send("Hello, world!");
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
