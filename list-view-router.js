const express = require('express');
const listViewRouter = express.Router();

listEditRouter.post('/create', (req, res) => {
    const { description, completed } = req.body;
    const newTask = {
      id: tasks.length + 1,
      description,
      completed,
    };
    tasks.push(newTask);
    res.json(newTask);
  });