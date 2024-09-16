import React from 'react';

const Menu = () => {
  return (
    <nav className="menu">
      <a href="/Frontend/Src/pages/Productos.html">Productos</a>
      <a href="/Frontend/Src/pages/Services.html">Servicios</a>
      <a href="/Frontend/Src/pages/Quienessomos.html">Acerca de</a>
      <a href="/Frontend/Src/pages/Blog.html">Blog</a>
      <a href="/Frontend/Src/pages/Contact.html">Contacto</a>
      <a href="/Frontend/Src/pages/Signup.html">Registrarse</a>
      <a href="/Frontend/Src/pages/Login.html" className="register-link">Iniciar Sesión</a>
    </nav>
  );
};

export default Menu;
