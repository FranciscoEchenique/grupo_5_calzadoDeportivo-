const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController.js');

router.get('/:iDusuario', usuariosController.index);

module.exports = router;