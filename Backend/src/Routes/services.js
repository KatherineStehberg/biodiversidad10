const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM services');
    res.json({
      success: true,
      services: rows
    });
  } catch (err) {
    console.error('Error al obtener los servicios:', err.message);
    res.status(500).json({ success: false, message: 'Error al obtener los servicios' });
  }
});

router.post('/', async (req, res) => {
  const { title, description, price, image } = req.body;

  try {
    const { rows } = await db.query(
      'INSERT INTO services (title, description, price, image) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, price, image]
    );
    res.status(201).json({
      success: true,
      service: rows[0]
    });
  } catch (err) {
    console.error('Error al agregar el servicio:', err.message);
    res.status(500).json({ success: false, message: 'Error al agregar el servicio' });
  }
});

module.exports = router;
