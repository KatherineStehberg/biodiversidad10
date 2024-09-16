const db = require('../database/db'); 

async function getAllServices(req, res) {
  try {
    const query = 'SELECT * FROM services';
    const { rows } = await db.query(query);
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener servicios:', error);
    res.status(500).json({ error: 'Error al obtener servicios' });
  }
}

async function getServiceById(req, res) {
  const { id } = req.params;
  try {
    const query = 'SELECT * FROM services WHERE id = $1';
    const { rows } = await db.query(query, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error al obtener servicio:', error);
    res.status(500).json({ error: 'Error al obtener servicio' });
  }
}

async function createService(req, res) {
  const { name, description, price } = req.body;
  try {
    const query = 'INSERT INTO services (name, description, price) VALUES ($1, $2, $3) RETURNING *';
    const { rows } = await db.query(query, [name, description, price]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error al crear servicio:', error);
    res.status(500).json({ error: 'Error al crear servicio' });
  }
}

async function updateService(req, res) {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    const query = 'UPDATE services SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *';
    const { rows } = await db.query(query, [name, description, price, id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error al actualizar servicio:', error);
    res.status(500).json({ error: 'Error al actualizar servicio' });
  }
}

async function deleteService(req, res) {
  const { id } = req.params;
  try {
    const query = 'DELETE FROM services WHERE id = $1 RETURNING *';
    const { rows } = await db.query(query, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Servicio no encontrado' });
    }
    res.json({ message: 'Servicio eliminado' });
  } catch (error) {
    console.error('Error al eliminar servicio:', error);
    res.status(500).json({ error: 'Error al eliminar servicio' });
  }
}

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
