const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const productoController = require('../controllers/productoController.js');
const adminMiddleware = require('../middlewares/adminMiddleware.js');
const sesionMiddleware = require('../middlewares/sesionMiddleware.js');

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

router.get('/crear', sesionMiddleware, adminMiddleware, productoController.crear);
router.post('/crear', fileUpload.single('imagenProducto'), productoController.almacenar);

router.get('/editar/:iDproducto', sesionMiddleware,  adminMiddleware, productoController.editar);
router.put('/editar/:iDproducto', productoController.actualizar);

router.get('/eliminar/:iDproducto', sesionMiddleware, adminMiddleware, productoController.mostrarEliminar);
router.delete('/eliminar/:iDproducto', productoController.eliminar);

module.exports = router;