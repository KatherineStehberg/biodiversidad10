const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/Frontend//Src/pages/Login.html', authController.login);

module.exports = router;
