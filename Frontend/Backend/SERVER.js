const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { registerStudent, loginStudent } = require("./controllers/studentController");

dotenv.config();

const path = require("path");
const app = express();

// ✅ Always put these first
app.use(express.json());

// ✅ Enable CORS for your specific frontend domain
app.use(cors());

if (process.env.MONGODB_URL) {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log("❌ MongoDB Error:", err.message));
} else {
  console.warn(
    "⚠️  MONGODB_URL is not defined. Skipping MongoDB connection. Create a .env with MONGODB_URL or set the environment variable to enable DB functionality."
  );
}

// ✅ Routes
// Serve frontend static files so you can load the UI from the same origin
// (open the backend preview on port 3000 and the login page will be served
// from the same origin, avoiding CORS during development).
app.use(express.static(path.join(__dirname, "..")));

app.post("/StudentRegister", registerStudent);
app.post("/StudentLogin", loginStudent);

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
