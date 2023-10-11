const express = require('express');
const app = express();
const port = 3000;

const tasks = [
  { id: 1, description: 'Hacer las compras', completado: false },
  { id: 2, description: 'Vender el coche', pendiente: true },
  { id: 3, description: 'Estudiar node', completado: false },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

// Middleware para gestionar métodos HTTP válidos
app.use((req, res, next) => {
  if (req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
    next();
  } else {
    res.status(405).send('Método HTTP no permitido');
  }
});