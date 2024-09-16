"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("../assets/style/Services.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ServicesPage = function ServicesPage() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    cart = _useState2[0],
    setCart = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    cartVisible = _useState4[0],
    setCartVisible = _useState4[1];
  var addToCart = function addToCart(name, price) {
    setCart(function (prevCart) {
      var itemIndex = prevCart.findIndex(function (item) {
        return item.name === name;
      });
      if (itemIndex > -1) {
        var newCart = _toConsumableArray(prevCart);
        newCart[itemIndex].quantity += 1;
        return newCart;
      } else {
        return [].concat(_toConsumableArray(prevCart), [{
          name: name,
          price: price,
          quantity: 1
        }]);
      }
    });
  };
  var clearCart = function clearCart() {
    setCart([]);
  };
  var handleCheckout = function handleCheckout() {
    alert('Proceso de pago');
  };
  var toggleCart = function toggleCart() {
    setCartVisible(!cartVisible);
  };
  var cartTotal = cart.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0).toFixed(2);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/"
  }, "Biodiversidad.cl")), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "nav-links"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "./Projects.html"
  }, "Productos")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "./Experts.html"
  }, "Acerca de")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "./blog.html"
  }, "Blog")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "./Contact.html"
  }, "Contacto")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "./Register.js"
  }, "Registrarse")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "./Login.js",
    className: "register-link"
  }, "Iniciar Sesi\xF3n")), /*#__PURE__*/_react["default"].createElement("li", {
    className: "cart",
    onClick: toggleCart
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "cart-icon"
  }, "\uD83D\uDED2"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "cart-count"
  }, cart.length), cartVisible && /*#__PURE__*/_react["default"].createElement("div", {
    className: "cart-popup"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Carrito"), /*#__PURE__*/_react["default"].createElement("div", {
    id: "cart-items"
  }, cart.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "cart-item",
      key: item.name
    }, /*#__PURE__*/_react["default"].createElement("p", null, item.name, " x ", item.quantity), /*#__PURE__*/_react["default"].createElement("p", null, "$", (item.price * item.quantity).toFixed(2)));
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "cart-total"
  }, "Total: $", cartTotal), /*#__PURE__*/_react["default"].createElement("div", {
    className: "cart-buttons"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn",
    onClick: handleCheckout
  }, "Pagar"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn",
    onClick: clearCart
  }, "Borrar")))))), /*#__PURE__*/_react["default"].createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "main-title"
  }, "Nuestros Servicios"))), /*#__PURE__*/_react["default"].createElement("section", {
    id: "projects",
    className: "section"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "section-title"
  }, "Productos"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "section-description"
  }, "Encuentra el producto que necesitas..."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "projects-grid"
  }, Array.from({
    length: 8
  }, function (_, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "project-card",
      key: index
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: "https://via.placeholder.com/150?text=Producto+".concat(index + 1),
      alt: "Producto ".concat(index + 1),
      className: "project-image"
    }), /*#__PURE__*/_react["default"].createElement("h3", null, "Producto ", index + 1), /*#__PURE__*/_react["default"].createElement("p", null, "$", (index + 1) * 10, ".00"), /*#__PURE__*/_react["default"].createElement("button", {
      className: "add-to-cart-btn",
      onClick: function onClick() {
        return addToCart("Producto ".concat(index + 1), (index + 1) * 10);
      }
    }, "A\xF1adir al Carrito"));
  })))), /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Direcci\xF3n: Avenida Ega\xF1a 1638, B. Pe\xF1alol\xE9n, Santiago, Chile"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "contact-social-container"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "contact-info"
  }, "Contacto: ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "mailto:info@biodiversidad.cl"
  }, "info@biodiversidad.cl")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "social-icons"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.instagram.com",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "social-icon instagram"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "bi bi-instagram"
  })), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.facebook.com",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "social-icon facebook"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "bi bi-facebook"
  })))), /*#__PURE__*/_react["default"].createElement("p", null, "\xA9 2024 Biodiversidad.cl. Todos los derechos reservados."))));
};
var _default = exports["default"] = ServicesPage;