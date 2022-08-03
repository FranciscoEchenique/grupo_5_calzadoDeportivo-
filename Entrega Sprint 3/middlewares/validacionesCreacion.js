const {body} = require('express-validator');

const validacionesCreacion = [
    body('nombre').notEmpty().withMessage('Debes colocar un nombre para el producto'),
    body('precio').notEmpty().withMessage('Debes colocar un precio'),
    body('descuento').notEmpty().withMessage('Debes colocar un precio'),
    body('categoria').notEmpty().withMessage('Debes elegir una categoria'),
    body('marca').notEmpty().withMessage('Debes elegir una marca'),
    body('descripcion').notEmpty().withMessage('Debes colocar una descripcion'),
];   

module.exports = validacionesCreacion;