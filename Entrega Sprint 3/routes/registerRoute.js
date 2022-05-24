const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController.js');
const path = require('path');
const multer = require('multer');
const validateRegister = require('../middlewares/validaciones.js');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        const carpetaDestino = path.join(__dirname, '../public/images/fotosUsuarios');
        cb(null, carpetaDestino);
    },
    filename: function(req, file, cb){
        const nombreImagen = Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen);
    }
});

const fileUpload = multer({storage})

router.get('/', registerController.register);
router.post('/', fileUpload.single('imagenUsuario'), validateRegister, registerController.almacenarUsuario);

module.exports = router;