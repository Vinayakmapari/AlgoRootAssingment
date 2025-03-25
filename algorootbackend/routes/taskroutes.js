const express = require('express');

const {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require("../controller/taskcontroller");


const router = express.Router();

router.post("/",createTask);
router.get("/",getTasks);
router.get("/:id",getTaskById);
router.put("/:id",updateTask);
router.delete("/:id",deleteTask);

module.exports = router; // Export router
// Compare this snippet from algorootbackend/routes/taskroutes.js:1 with the one you generated: