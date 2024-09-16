"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Navbar = _interopRequireDefault(require("./components/Navbar"));
var _Footer = _interopRequireDefault(require("./components/Footer"));
var _Services = _interopRequireDefault(require("./pages/Services"));
var _Experts = _interopRequireDefault(require("./pages/Experts"));
var _Projects = _interopRequireDefault(require("./pages/Projects"));
var _Blog = _interopRequireDefault(require("./pages/Blog"));
var _Contact = _interopRequireDefault(require("./pages/Contact"));
var _Login = _interopRequireDefault(require("./pages/Login"));
var _Signup = _interopRequireDefault(require("./pages/Signup"));
var _Dashboard = _interopRequireDefault(require("./pages/Dashboard"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_Navbar["default"], null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(Home, null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/services",
    element: /*#__PURE__*/_react["default"].createElement(_Services["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/experts",
    element: /*#__PURE__*/_react["default"].createElement(_Experts["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/projects",
    element: /*#__PURE__*/_react["default"].createElement(_Projects["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/blog",
    element: /*#__PURE__*/_react["default"].createElement(_Blog["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/contact",
    element: /*#__PURE__*/_react["default"].createElement(_Contact["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/login",
    element: /*#__PURE__*/_react["default"].createElement(_Login["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/signup",
    element: /*#__PURE__*/_react["default"].createElement(_Signup["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/dashboard",
    element: /*#__PURE__*/_react["default"].createElement(_Dashboard["default"], null)
  })), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null));
};
var _default = exports["default"] = App;