const Task = require("../model/taskmodel");

const createTask = async(req,res) =>{
    try{
        const {title,description,completed} =req.body;
        const newTask = new Task({title,description,completed});

        await newTask.save();
        res.status(201).json(newTask);
    }catch(err) {
        res.status(500).json({error: "Server error"});
    }
};


const getTasks = async(req,res) =>{
    try{
        const tasks =await Task.find();
        res.status(200).json(tasks);
    }catch(err) {
        res.status(500).json({error: "Server error"});
    }
};

const getTaskById = async (req,res) =>{
    try{
        const task = await Task.findById(req.params.id);
        if(!task) return res.status(404).json({error: "Task not found"});
        res.status(200).json(task);
    }catch(err) {
        res.status(500).json({error: "Server error"});
    }
}

const updateTask = async (req,res) =>{
    try{
      const {title, description,completed} = req.body;
      const task = await Task.findByIdAndUpdate(req.params.id
        ,{title,description,completed},{new:true, runValidators: true});
        if(!task) return res.status(404).json({error: "Task not found"});
        res.status(200).json(task);
        }catch(err) {
        res.status(500).json({error: "Server error"});
    }
}


const deleteTask =async(req,res) =>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) return res.status(404).json({error: "Task not found"});
        res.status(200).json({message: "Task deleted successfully"});
        }catch(err) {
        res.status(500).json({error: "Server error"});
    }
}

module.exports = {createTask,getTasks,getTaskById,getTaskById,updateTask,deleteTask};