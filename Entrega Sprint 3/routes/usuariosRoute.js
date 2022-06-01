const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController.js');
const noLogueadoMiddleware = require('../middlewares/noLogueadoMiddleware.js');

router.get('/', noLogueadoMiddleware, usuariosController.index);

module.exports = router;