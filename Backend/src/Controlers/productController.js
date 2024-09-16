const db = require('../database/db'); 

async function getAllProducts(req, res) {
  try {
    const query = 'SELECT * FROM products';
    const { rows } = await db.query(query);
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
}

async function getProductById(req, res) {
  const { id } = req.params;
  try {
    const query = 'SELECT * FROM products WHERE id = $1';
    const { rows } = await db.query(query, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error al obtener producto:', error);
    res.status(500).json({ error: 'Error al obtener producto' });
  }
}

async function createProduct(req, res) {
  const { name, price, description } = req.body;
  try {
    const query = 'INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *';
    const { rows } = await db.query(query, [name, price, description]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: 'Error al crear producto' });
  }
}

async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, price, description } = req.body;
  try {
    const query = 'UPDATE products SET name = $1, price = $2, description = $3 WHERE id = $4 RETURNING *';
    const { rows } = await db.query(query, [name, price, description, id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const query = 'DELETE FROM products WHERE id = $1 RETURNING *';
    const { rows } = await db.query(query, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
