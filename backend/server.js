require("dotenv").config();

const express = require("express");
const connectDB = require("./db");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/contact", require("./routes/contact"));

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});