"use strict";

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');  // Importar módulo 'path' para manejar rutas

// Cargar variables de entorno
dotenv.config();

// Importar rutas
const projectsRouter = require('./routes/projects');
const usersRouter = require('./routes/users');
const servicesRouter = require('./routes/services');
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de autenticación JWT
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      message: 'Acceso denegado. No token provided.'
    });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(403).json({
      message: 'Token inválido o expirado'
    });
  }
};

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor backend de Biodiversidad!');
});

// Rutas de la API con autenticación
app.use('/api/projects', authenticateJWT, projectsRouter);
app.use('/api/users', authenticateJWT, usersRouter);
app.use('/api/services', authenticateJWT, servicesRouter);
app.use('/api/products', authenticateJWT, productsRouter);
app.use('/api/auth', authRouter);

// Servir archivos estáticos del frontend desde la carpeta dist
app.use(express.static(path.join(__dirname, '../Frontend/dist')));

// Redirigir cualquier otra ruta al frontend (index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
