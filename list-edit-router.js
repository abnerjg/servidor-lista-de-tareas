const express = require('express');
const router = express.Router();

// Middleware para manejar errores en las solicitudes POST y PUT
router.use((req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    if (req.headers['content-type'] !== 'application/json') {
      return res.status(400).json({ error: 'La solicitud debe ser en formato JSON.' });
    }

    const requestBody = req.body;

    if (!requestBody || Object.keys(requestBody).length === 0) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud no puede estar vacío.' });
    }
    // Agrega validaciones adicionales para atributos no válidos o faltantes aquí
    // Por ejemplo:
    // if (!requestBody.nombre || !requestBody.descripcion) {
    //   return res.status(400).json({ error: 'Faltan atributos necesarios.' });
    // }
}

  // Si no se cumple ninguna de las condiciones anteriores, pasa al siguiente middleware
  next();
});

// Define tus rutas y controladores aquí
module.exports = router;