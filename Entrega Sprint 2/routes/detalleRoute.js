const express = require('express');
const router = express.Router();
const detalleController = require('../controllers/detalleController.js');

router.get('/detalle-de-producto', detalleController.detalleProducto);

module.exports = router;