// Importa las dependencias necesarias, incluyendo Express
const express = require('express');
const router = express.Router();

// Middleware para gestionar parámetros correctos
router.use((req, res, next) => {
  const parametro = req.params.parametro; // Asegúrate de reemplazar 'parametro' con el nombre de tu parámetro
  if (parametro && parametro.length > 0) {
    // Si el parámetro es válido, pasa al siguiente middleware
    next();
  } else {
    // Si el parámetro no es válido, responde con un código 400 (Solicitud incorrecta)
    res.status(400).send('Parámetro incorrecto');
  }
});

// Define tus rutas y controladores aquí
module.exports = router;