const Student = require("../models/studentModel");

exports.registerStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ message: "Student registered successfully", student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};
    