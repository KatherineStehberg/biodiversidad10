"use strict";

var express = require('express');
var router = express.Router();
var serviceController = require('../controllers/serviceController');
router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getServiceById);
router.post('/', serviceController.createService);
router.put('/:id', serviceController.updateService);
router["delete"]('/:id', serviceController.deleteService);
module.exports = router;