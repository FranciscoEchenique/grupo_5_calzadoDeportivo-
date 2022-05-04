const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController.js');

router.get('/crear', productoController.crear);

module.exports = router;