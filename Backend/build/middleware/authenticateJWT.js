"use strict";

// backend/middleware/authenticateJWT.js
var jwt = require('jsonwebtoken');
var authenticateJWT = function authenticateJWT(req, res, next) {
  var _req$headers$authoriz;
  var token = (_req$headers$authoriz = req.headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      message: 'Acceso denegado. No token provided.'
    });
  }
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
module.exports = authenticateJWT;