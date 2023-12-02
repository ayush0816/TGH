const express = require("express");
const router = express.Router();
const { addStudent } = require("../services/userServ"); 

router.post("/admin/addStudent" , addStudent);

module.exports = router;
