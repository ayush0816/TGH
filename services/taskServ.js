const Task = require("../Models/task");

const assignTask = async (req, res) => {
  const { studentEmail, taskDescription, dueTime } = req.body;
  try {
    const adminId = req.user._id;

    const task = new Task({
      studentEmail: studentEmail,
      taskDescription: taskDescription,
      dueTime: dueTime,
      assignedBy: adminId,
    });

    await task.save();

    res.status(200).json({ message: "Task Created Successfully" });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const viewTasks = async (req, res) => {
  const userEmail = req.user.email;
  try {
    const tasks = await Task.find({ studentEmail: userEmail });
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateTaskStatus = async (req, res) => {
  const taskId = req.query.taskId;

  try {
    const task = await Task.findByIdAndUpdate(
      taskId,
      { status: "completed" },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res
      .status(200)
      .json({ message: "Task status updated successfully", updatedTask: task });
  } catch (error) {
    console.error("Error updating task status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { assignTask, viewTasks, updateTaskStatus };
