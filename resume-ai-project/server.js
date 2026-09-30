const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("AI Resume ATS Server Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});