const {body} = require('express-validator');

const validateRegister = [
    body('nombre').notEmpty().withMessage('Debes colocar un nombre'),
    body('apellido').notEmpty().withMessage('Debes colocar un apellido'),
    body('email').notEmpty().withMessage('Debes colocar un email').bail().isEmail().withMessage('Debes colocar un email válido'),
    body('password').notEmpty().withMessage('Debes colocar una contraseña').bail().isLength({min: 5}).withMessage('La contraseña debe contener mínimo 5 caracteres'),
    body('passwordConfirm').notEmpty().withMessage('Debes colocar dos veces la contraseña'),
];

module.exports = validateRegister;