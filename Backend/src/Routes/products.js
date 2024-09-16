// backend/routes/products.js

const express = require('express');
const router = express.Router();
const db = require('../database/db'); 


router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM products');
    res.json({
      success: true,
      products: rows
    });
  } catch (err) {
    console.error('Error al obtener los productos:', err.message);
    res.status(500).json({ success: false, message: 'Error al obtener los productos' });
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query('SELECT * FROM products WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Producto no encontrado' });
    }
    res.json({
      success: true,
      product: rows[0]
    });
  } catch (err) {
    console.error('Error al obtener el producto:', err.message);
    res.status(500).json({ success: false, message: 'Error al obtener el producto' });
  }
});

router.post('/', async (req, res) => {
  const { name, description, price, image, category_id } = req.body;

  try {
    const { rows } = await db.query(
      'INSERT INTO products (name, description, price, image, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, description, price, image, category_id]
    );
    res.status(201).json({
      success: true,
      message: 'Producto agregado exitosamente',
      product: rows[0]
    });
  } catch (err) {
    console.error('Error al agregar el producto:', err.message);
    res.status(500).json({ success: false, message: 'Error al agregar el producto' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, image, category_id } = req.body;

  try {
    const { rows } = await db.query(
      'UPDATE products SET name = $1, description = $2, price = $3, image = $4, category_id = $5 WHERE id = $6 RETURNING *',
      [name, description, price, image, category_id, id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Producto no encontrado' });
    }
    res.json({
      success: true,
      message: 'Producto actualizado exitosamente',
      product: rows[0]
    });
  } catch (err) {
    console.error('Error al actualizar el producto:', err.message);
    res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await db.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Producto no encontrado' });
    }
    res.json({
      success: true,
      message: 'Producto eliminado exitosamente'
    });
  } catch (err) {
    console.error('Error al eliminar el producto:', err.message);
    res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
  }
});

module.exports = router;
