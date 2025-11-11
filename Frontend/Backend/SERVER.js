const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/students", studentRoutes);

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
