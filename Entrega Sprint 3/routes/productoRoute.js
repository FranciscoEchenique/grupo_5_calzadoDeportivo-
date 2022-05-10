const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController.js');

router.get('/crear', productoController.crear);
router.post('/', productoController.almacenar);

module.exports = router;