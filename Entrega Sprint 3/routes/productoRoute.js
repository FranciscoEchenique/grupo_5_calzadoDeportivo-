const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const productoController = require('../controllers/productoController.js');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        const carpetaDestino = path.join(__dirname, '../public/images');
        cb(null, carpetaDestino);
    },
    filename: function(req, file, cb){
        const nombreImagen = Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen);
    }
});

const fileUpload = multer({storage})

router.get('/crear', productoController.crear);
router.post('/crear', fileUpload.single('imagenProducto'), productoController.almacenar);

router.get('/editar/:iDproducto', productoController.editar);
router.put('/editar/:iDproducto', productoController.actualizar);

router.get('/eliminar/:iDproducto', productoController.mostrarEliminar);
router.delete('/eliminar/:iDproducto', productoController.eliminar);

module.exports = router;