const express = require("express")
const router = express.Router();
const { adminLogin, studentLogin } = require("../services/authServ");

router.post("/admin/login", adminLogin);
router.post("/student/login", studentLogin);

module.exports = router