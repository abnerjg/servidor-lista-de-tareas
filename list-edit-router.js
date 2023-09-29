const express = require('express');
const listEditRouter = express.Router();

// Ruta para crear una tarea (POST)
listEditRouter.post('/create', (req, res) => {
  // Aquí debes implementar la lógica para crear una nueva tarea
  res.send('Nueva tarea creada');
});

// Ruta para eliminar una tarea (DELETE)
listEditRouter.delete('/delete/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  
  res.send(`Tarea con ID ${taskId} eliminada`);
});

listEditRouter.put('/update/:taskId', (req, res) => {
  const taskId = req.params.taskId;
 
  res.send(`Tarea con ID ${taskId} actualizada`);
});

module.exports = listEditRouter;