import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const UserContext = createContext();

// Proveedor de contexto
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado del usuario autenticado
  const [loading, setLoading] = useState(true); // Estado para el proceso de carga
  const [token, setToken] = useState(localStorage.getItem('token') || null); // Token almacenado en localStorage

  // Cargar el perfil del usuario si existe un token
  useEffect(() => {
    if (token) {
      fetchUserProfile(token);
    } else {
      setLoading(false);
    }
  }, [token]);

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user); // Guardar los datos del usuario en el estado
      } else {
        console.error('Error al obtener el perfil del usuario');
        localStorage.removeItem('token');
        setToken(null);
      }
    } catch (error) {
      console.error('Error al cargar el perfil del usuario:', error);
      setToken(null);
    }
    setLoading(false);
  };

  // Función para manejar el inicio de sesión
  const login = async (email, password) => {
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
        setToken(data.token); // Guardar el token
        localStorage.setItem('token', data.token); // Guardar en localStorage
        setUser(data.user); // Guardar el usuario en el contexto
      } else {
        throw new Error(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  };

  // Función para manejar el registro
  const signup = async (email, password, name) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token); // Guardar el token
        localStorage.setItem('token', data.token); // Guardar en localStorage
        setUser(data.user); // Guardar el usuario en el contexto
      } else {
        throw new Error(data.message || 'Error al registrarse');
      }
    } catch (error) {
      console.error('Error al registrarse:', error);
      throw error;
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null); // Limpiar el estado del usuario
    setToken(null); // Limpiar el token
    localStorage.removeItem('token'); // Remover el token de localStorage
  };

  return (
    <UserContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};
