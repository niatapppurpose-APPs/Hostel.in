const Student = require("../models/studentModel");

exports.registerStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ message: "Student registered successfully", student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Simple login handler. Expects { identifier, password } where identifier is the student's email.
exports.loginStudent = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
      return res.status(400).json({ error: "identifier and password are required" });
    }

    // Find by email (identifier)
    const student = await Student.findOne({ email: identifier });
    if (!student) return res.status(401).json({ error: "Invalid credentials" });

    // NOTE: passwords are stored in plain text in this project. Compare directly.
    if (student.password !== password) return res.status(401).json({ error: "Invalid credentials" });

    // Successful login: return basic student info (omit password)
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
    