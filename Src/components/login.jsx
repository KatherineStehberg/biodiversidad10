import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../components/login.css'; // Asegúrate de tener los estilos CSS importados

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      setError('Hubo un problema con la solicitud');
    }
  };

  return (
    <div className="container">
      <nav>
        <div className="logo">
          <a href="/">Biodiversidad.cl</a>
        </div>
      </nav>
      <section>
        <div className="login-form">
          <h2>Iniciar Sesión</h2>
          <p className="subtext">¡Bienvenido de nuevo! Por favor, ingresa tus datos</p>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email"><span className="gray-text">Correo Electrónico</span></label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password"><span className="gray-text">Contraseña</span></label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="gray-text">Recordar por 30 días</label>
              <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
            </div>
            <button type="submit" className="purple-button">Iniciar Sesión</button>
          </form>
        </div>
      </section>
      <footer>
        <h2>Todos los derechos reservados</h2>
        <div className="socialmedia-icons">
          <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Login;
