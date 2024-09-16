import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/style/Blog.css'; // Asegúrate de que esta ruta sea correcta

const Blog = () => {
  const [posts, setPosts] = useState([
    { title: 'Título del Blog Post 1', description: 'Descripción breve del blog post 1.' },
    { title: 'Título del Blog Post 2', description: 'Descripción breve del blog post 2.' },
    { title: 'Título del Blog Post 3', description: 'Descripción breve del blog post 3.' }
  ]);
  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: formData.title,
      description: formData.content
    };
    setPosts([...posts, newPost]);
    setFormData({ title: '', content: '' });
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">Biodiversidad.cl</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="../pages/Productos.html">Productos</Link></li>
            <li><Link to="../pages/Services.html">Servicios</Link></li>
            <li><Link to="../pages/Quienessomos.html">Acerca de</Link></li>
            <li><Link to="../pages/Contact.html">Contacto</Link></li>
            <li><Link to="../pages/Signup.html">Registrarse</Link></li>
            <li><Link to="../pages/Signup.html" className="register-link">Iniciar Sesión</Link></li>
          </ul>
        </nav>
      </header>

      <div className="container main-content">
        <div className="blog-posts" id="blog-posts">
          {posts.map((post, index) => (
            <article className="blog-post" key={index}>
              <h2>{post.title}</h2>
              <p>{post.description} <Link to="#">Leer más...</Link></p>
            </article>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="submission-form">
          <h2>Envía tu Publicación</h2>
          <form id="post-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="post-title">Título</label>
              <input
                type="text"
                id="post-title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="post-content">Contenido</label>
              <textarea
                id="post-content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">Enviar Publicación</button>
          </form>
        </div>
      </div>

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

export default Blog;
