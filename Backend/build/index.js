"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
require("bootstrap/dist/css/bootstrap.min.css");
var _App = _interopRequireDefault(require("../Src/App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_reactDom["default"].render(/*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_App["default"], null)), document.getElementById('root'));
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('¡Hola, mundo!');
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Servidor escuchando en el puerto ".concat(PORT));
});