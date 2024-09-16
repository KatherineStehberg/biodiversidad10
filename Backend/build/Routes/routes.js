"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRouterDom = require("react-router-dom");
var _Home = _interopRequireDefault(require("./pages/Home"));
var _Login = _interopRequireDefault(require("./pages/Login"));
var _Register = _interopRequireDefault(require("./pages/Register"));
var _Projects = _interopRequireDefault(require("./pages/Projects"));
var _Navbar = _interopRequireDefault(require("./components/Navbar"));
var _Footer = _interopRequireDefault(require("./components/Footer"));
var _products = _interopRequireDefault(require("./Pages/products"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/Routes.js

function AppRoutes() {
  return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Navbar["default"], null), /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_Home["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/login",
    element: /*#__PURE__*/React.createElement(_Login["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/register",
    element: /*#__PURE__*/React.createElement(_Register["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/projects",
    element: /*#__PURE__*/React.createElement(_Projects["default"], null)
  })), /*#__PURE__*/React.createElement(_Footer["default"], null)));
}
var _default = exports["default"] = AppRoutes;