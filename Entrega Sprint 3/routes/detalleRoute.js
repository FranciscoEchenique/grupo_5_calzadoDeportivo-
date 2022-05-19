const express = require('express');
const router = express.Router();
const detalleController = require('../controllers/detalleController.js');

router.get('/mejores-ofertas/:iDproducto', detalleController.mejoresOfertasRuta);
router.get('/mas-comprado/:iDproducto', detalleController.masCompradoRuta);
router.get('/mejores-productos/:iDproducto', detalleController.mejoresProductosRuta);

module.exports = router;