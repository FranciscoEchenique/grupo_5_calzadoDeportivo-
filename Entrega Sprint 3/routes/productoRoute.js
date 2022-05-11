const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController.js');

router.get('/crear', productoController.crear);
router.post('/crear', productoController.almacenar);

router.get('/editar/:iDproducto', productoController.editar);
router.put('/editar/:iDproducto', productoController.actualizar);

module.exports = router;