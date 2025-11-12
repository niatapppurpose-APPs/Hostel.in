const express = require("express");
const { registerStudent, getStudents, loginStudent } = require("../controllers/studentController");

const router = express.Router();

// Register: POST /StudentRegister
router.post("/StudentRegister", registerStudent);

// Login: POST /StudentLogin
router.post("/StudentLogin", loginStudent);

// Fallback: get list of students (for debugging) GET /Students
router.get("/Students", getStudents);

module.exports = router;
