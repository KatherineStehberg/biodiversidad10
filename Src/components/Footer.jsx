import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>Dirección: Avenida Egaña 1638, B. Peñalolén, Santiago, Chile</p>
        <div className="contact-social-container">
          <p className="contact-info">Contacto: <a href="mailto:info@biodiversidad.cl">info@biodiversidad.cl</a></p>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" className="social-icon instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" className="social-icon facebook">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
        <p>&copy; 2024 Biodiversidad.cl. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
