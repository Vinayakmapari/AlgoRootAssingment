const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
const taskroutes = require("./routes/taskroutes");


dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // Middleware to parse JSON
const cors = require("cors");
app.use(cors());
app.use("/api/tasks",taskroutes); // Use routes
// app.use("/api/tasks", require("./routes/taskroutes")); 

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
