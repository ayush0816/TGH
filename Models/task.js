const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  studentEmail: {
    type: String,
    required: true, 
  },
  taskDescription: {
    type: String,
    required: true,
  },
  dueTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'overdue', 'completed'],
    default: 'pending',
  },
  assignedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
