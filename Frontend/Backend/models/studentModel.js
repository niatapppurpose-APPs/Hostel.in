const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  roomNumber: Number,
  password: String,
  rollNumber: { type: String, unique: true, sparse: true } // added
});

module.exports = mongoose.model("Student", studentSchema);
