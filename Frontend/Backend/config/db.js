const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URL) {
      console.warn("⚠️ MONGODB_URL not set. Skipping MongoDB connection. Set MONGODB_URL in .env to enable DB.");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
