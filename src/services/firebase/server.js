// Importar Express.js
const express = require('express');

// Crear una instancia de Express
const app = express();

// Configurar el puerto en el que escuchará el servidor
const PORT = 3000;

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, este es un servidor con Node.js y Express.js!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
