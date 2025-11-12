const Student = require("../models/studentModel");

exports.registerStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ message: "Student registered successfully", student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.loginStudent = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
      return res.status(400).json({ error: "identifier and password are required" });
    }
    const student = await Student.findOne({
      $or: [{ email: identifier }, { rollNumber: identifier }]
    });
    if (!student) return res.status(401).json({ error: "Invalid credentials" });

  
    if (student.password !== password) return res.status(401).json({ error: "Invalid credentials" });

    const { password: pw, ...studentSafe } = student.toObject ? student.toObject() : student;
    res.json({ message: "Login successful", student: studentSafe });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};
    