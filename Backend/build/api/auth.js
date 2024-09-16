"use strict";

var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');
router.post('/Frontend//Src/pages/Login.html', authController.login);
module.exports = router;