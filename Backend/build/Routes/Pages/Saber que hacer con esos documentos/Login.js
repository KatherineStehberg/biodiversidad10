"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("../assets/style/Logis.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var LoginPage = function LoginPage() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/"
  }, "Biodiversidad.cl"))), /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "login-form"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Iniciar Sesi\xF3n"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "subtext"
  }, "\xA1Bienvenido de nuevo! Por favor, ingresa tus datos"), /*#__PURE__*/_react["default"].createElement("form", {
    id: "loginForm"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "email"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "gray-text"
  }, "Correo Electr\xF3nico")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    required: true,
    placeholder: "Ingresa tu correo electr\xF3nico"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "password"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "gray-text"
  }, "Contrase\xF1a")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "password",
    id: "password",
    name: "password",
    required: true,
    placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "remember-me"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    id: "remember"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "remember",
    className: "gray-text"
  }, "Recordar por 30 d\xEDas"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "forgot-password"
  }, "\xBFOlvidaste tu contrase\xF1a?")), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "purple-button"
  }, "Iniciar Sesi\xF3n")))), /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Todos los derechos reservados"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "socialmedia-icons"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.facebook.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Facebook"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fab fa-facebook"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.instagram.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Instagram"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fab fa-instagram"
  })))));
};
var _default = exports["default"] = LoginPage;