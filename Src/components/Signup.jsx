import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/style/SIgnup.css'; 

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Registro exitoso. ¡Bienvenido!');
        navigate('/login'); // Redirige al login tras un registro exitoso
      } else {
        setErrorMessage(data.message || 'Error en el registro');
      }
    } catch (err) {
      setErrorMessage('Error en el registro. Inténtalo nuevamente.');
    }
  };

  return (
    <div>
      <header>
        <div className="logo">
          <Link to="/">
            <img src="../assets/logo.png" alt=" Biodiversidad.cl" /> {/* Etiquetas de auto-cierre */}
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/index.html">Inicio</Link></li>
            <li><Link to="../pages/Experts.html">Sobre Nosotros</Link></li>
            <li><Link to="../pages/Contact.html">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="signup-container">
          <h1>Crear una Cuenta</h1>
          <p>Únete a nuestra comunidad y colabora con los mejores expertos en medio ambiente.</p>

          <form id="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="confirm-password">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit">Registrarse</button>
          </form>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

          <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link></p>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Biodiversidad.cl - Todos los derechos reservados</p>
        <ul>
          <li><Link to="/privacy">Política de Privacidad</Link></li>
          <li><Link to="/terms">Términos y Condiciones</Link></li>
        </ul>
      </footer>
    </div>
  );
};

export default Signup;
