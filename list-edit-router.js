const express = require('express');
const listEditRouter = express.Router();

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
  
  listEditRouter.delete('/delete/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      res.send(`Tarea con ID ${taskId} eliminada`);
    } else {
      res.status(404).send('Tarea no encontrada');
    }
  });

  listEditRouter.put('/update/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    const { description, completed } = req.body;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks[taskIndex] = { id: taskId, description, completed };
      res.json(tasks[taskIndex]);
    } else {
      res.status(404).send('Tarea no encontrada');
    }
  });
  
  module.exports = listEditRouter;