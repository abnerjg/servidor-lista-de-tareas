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