import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Biodiversidad.cl</a>
      </div>
      <div className="search-bar">
        
        <input type="text" placeholder="¿Qué estás buscando?" />
      </div>
     
    </nav>
  );
};

export default Navbar;
