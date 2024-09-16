import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/style/Contact.css'; // Asegúrate de que esta ruta sea correcta

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario (ej. llamada a API)
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">Biodiversidad.cl</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/experts">Acerca de</Link></li>
            <li><Link to="/contact" className="active">Contacto</Link></li>
            <li><Link to="/signup">Registrarse</Link></li>
            <li><Link to="/login" className="register-link">Iniciar Sesión</Link></li>
          </ul>
        </nav>
      </header>

      <section className="image-section">
        <h1>Contáctate con nosotros</h1>
      </section>

      <main>
        <section className="contact-form-section">
          <h1>Contacto</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <p>Dirección: Avenida Egaña 1638, B. Peñalolén, Santiago, Chile</p>
          <div className="contact-social-container">
            <p className="contact-info">
              Contacto:
              <a href="mailto:info@biodiversidad.cl">info@biodiversidad.cl</a>
            </p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
          <p>&copy; 2024 Biodiversidad.cl. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
