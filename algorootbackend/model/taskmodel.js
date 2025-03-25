const mongoose = require("mongoose");

// Define Schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false, // Default to false
    },
    
}, {
    timestamps: true});

// Create Model
const Task = mongoose.model("Task", taskSchema);

// Export Model
module.exports = Task;
