import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks").then((res) => setTasks(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (editingTaskId) {
      await axios.put(`http://localhost:5000/api/tasks/${editingTaskId}`, form);
      setTasks(tasks.map((task) => (task._id === editingTaskId ? { ...task, ...form } : task)));
      setEditingTaskId(null);
    } else {
      const res = await axios.post("http://localhost:5000/api/tasks", form);
      setTasks([...tasks, res.data]);
    }
    setForm({ title: "", description: "" });
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const editTask = (task) => {
    setForm({ title: task.title, description: task.description });
    setEditingTaskId(task._id);
  };

  return (
    <div className="wrapper">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Task Manager
      </motion.h1>

      <div className="container">
        <form className="task-form" onSubmit={addTask}>
          <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
          <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
          <button type="submit">{editingTaskId ? "Update Task" : "Add Task"}</button>
        </form>
      </div>

      {/* New Scrollable Task Container */}
      <div className="task-container">
        {tasks.map((task) => (
          <motion.div key={task._id} className="task-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => editTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;
