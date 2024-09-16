const db = require('../database/db'); 

async function getAllUsers(req, res) {
  try {
    const query = 'SELECT * FROM users';
    const { rows } = await db.query(query);
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
}

async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const query = 'SELECT * FROM users WHERE id = $1';
    const { rows } = await db.query(query, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
}

async function createUser(req, res) {
  const { username, password, email } = req.body;
  try {

    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *';
    const { rows } = await db.query(query, [username, hashedPassword, email]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
}

async function updateUser(req, res) {
  const { id } = req.params;
  const { username, password, email } = req.body;
  try {
    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
    const query = `
      UPDATE users 
      SET username = COALESCE($1, username), 
          password = COALESCE($2, password), 
          email = COALESCE($3, email) 
      WHERE id = $4 
      RETURNING *`;
    const { rows } = await db.query(query, [username, hashedPassword, email, id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const { rows } = await db.query(query, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
