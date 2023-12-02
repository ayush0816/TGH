const express = require("express");
const router = express.Router(); 
const { assignTask, viewTasks, updateTaskStatus } = require("../services/taskServ")
const fetchUser = require("../middlewares/fetchUser")


router.post("/admin/assignTask", fetchUser , assignTask );
router.get("/student/viewTasks", fetchUser , viewTasks );
router.put("/student/updateTaskStatus"  , updateTaskStatus);

module.exports = router