const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const projectsRouter = require('./routes/projects');
const usersRouter = require('./routes/users'); 
const servicesRouter = require('./routes/services'); 
const productsRouter = require('./routes/products'); 
const authRouter = require('./routes/auth'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Acceso denegado. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Token inválido o expirado' });
    }
};

app.get('/', (req, res) => {
    res.send('¡Bienvenido al servidor backend de Biodiversidad!');
});

app.use('/api/projects', authenticateJWT, projectsRouter);
app.use('/api/users', authenticateJWT, usersRouter);
app.use('/api/services', authenticateJWT, servicesRouter);
app.use('/api/products', authenticateJWT, productsRouter);
app.use('/api/auth', authRouter); 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
