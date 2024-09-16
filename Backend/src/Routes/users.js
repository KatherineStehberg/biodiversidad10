const express = require('express');
const router = express.Router();
const db = require('./../database/db'); 

router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM users');
    res.json({
      success: true,
      users: rows
    });
  } catch (err) {
    console.error('Error al obtener los usuarios:', err.message);
    res.status(500).json({ success: false, message: 'Error al obtener los usuarios' });
  }
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'El nombre y el correo electrónico son obligatorios' });
  }

  try {
    const { rows } = await db.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json({
      success: true,
      message: 'Usuario agregado exitosamente',
      user: rows[0]
    });
  } catch (err) {
    console.error('Error al agregar el usuario:', err.message);
    res.status(500).json({ success: false, message: 'Error al agregar el usuario' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'El nombre y el correo electrónico son obligatorios' });
  }

  try {
    const { rows } = await db.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }
    res.json({
      success: true,
      message: 'Usuario actualizado exitosamente',
      user: rows[0]
    });
  } catch (err) {
    console.error('Error al actualizar el usuario:', err.message);
    res.status(500).json({ success: false, message: 'Error al actualizar el usuario' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }
    res.json({
      success: true,
      message: 'Usuario eliminado exitosamente'
    });
  } catch (err) {
    console.error('Error al eliminar el usuario:', err.message);
    res.status(500).json({ success: false, message: 'Error al eliminar el usuario' });
  }
});

module.exports = router;
