"use strict";

var express = require('express');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');
dotenv.config();
var projectsRouter = require('./routes/projects');
var usersRouter = require('./routes/users');
var servicesRouter = require('./routes/services');
var productsRouter = require('./routes/products');
var authRouter = require('./routes/auth');
var app = express();
var PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
var authenticateJWT = function authenticateJWT(req, res, next) {
  var authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      message: 'Acceso denegado. No token provided.'
    });
  }
  var token = authHeader.split(' ')[1];
  try {
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(403).json({
      message: 'Token inválido o expirado'
    });
  }
};
app.get('/', function (req, res) {
  res.send('¡Bienvenido al servidor backend de Biodiversidad!');
});
app.use('/api/projects', authenticateJWT, projectsRouter);
app.use('/api/users', authenticateJWT, usersRouter);
app.use('/api/services', authenticateJWT, servicesRouter);
app.use('/api/products', authenticateJWT, productsRouter);
app.use('/api/auth', authRouter);
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});
app.listen(PORT, function () {
  console.log("Servidor backend corriendo en http://localhost:".concat(PORT));
});