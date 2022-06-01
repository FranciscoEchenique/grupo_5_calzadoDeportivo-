const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController.js');
const usuarioMiddleware = require('../middlewares/usuarioMiddleware.js')

router.get('/', usuarioMiddleware, loginController.login);
router.post('/', loginController.procesoLogin);

module.exports = router;