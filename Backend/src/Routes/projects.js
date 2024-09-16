const express = require('express');
const router = express.Router();

const authenticateJWT = require('../middleware/authenticateJWT'); 


router.get('/', authenticateJWT, async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM projects');
    res.json({
      success: true,
      projects: rows
    });
  } catch (err) {
    console.error('Error al obtener los proyectos:', err.message);
    res.status(500).json({ success: false, message: 'Error al obtener los proyectos' });
  }
});


router.post('/', authenticateJWT, async (req, res) => {
  const { title, description } = req.body;


  if (!title || !description) {
    return res.status(400).json({ success: false, message: 'El título y la descripción son obligatorios' });
  }

  try {
    const { rows } = await db.query(
      'INSERT INTO projects (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    res.status(201).json({
      success: true,
      message: 'Proyecto agregado exitosamente',
      project: rows[0]
    });
  } catch (err) {
    console.error('Error al agregar el proyecto:', err.message);
    res.status(500).json({ success: false, message: 'Error al agregar el proyecto' });
  }
});


router.put('/:id', authenticateJWT, async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;


  if (!title || !description) {
    return res.status(400).json({ success: false, message: 'El título y la descripción son obligatorios' });
  }

  try {
    const { rows } = await db.query(
      'UPDATE projects SET title = $1, description = $2 WHERE id = $3 RETURNING *',
      [title, description, id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Proyecto no encontrado' });
    }
    res.json({
      success: true,
      message: 'Proyecto actualizado exitosamente',
      project: rows[0]
    });
  } catch (err) {
    console.error('Error al actualizar el proyecto:', err.message);
    res.status(500).json({ success: false, message: 'Error al actualizar el proyecto' });
  }
});


router.delete('/:id', authenticateJWT, async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await db.query('DELETE FROM projects WHERE id = $1 RETURNING *', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Proyecto no encontrado' });
    }
    res.json({
      success: true,
      message: 'Proyecto eliminado exitosamente'
    });
  } catch (err) {
    console.error('Error al eliminar el proyecto:', err.message);
    res.status(500).json({ success: false, message: 'Error al eliminar el proyecto' });
  }
});

module.exports = router;
