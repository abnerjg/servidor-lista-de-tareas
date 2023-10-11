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

  // Middleware para gestionar la validez de los parámetros
router.use('/:parametro', (req, res, next) => {
  const parametro = req.params.parametro;
  if (parametro && parametro.length > 0) {
    next();
  } else {
    res.status(400).send('Parámetro incorrecto');
  }
});