const sequelize = require('sequelize');
const sequelize = require('../database'); 
let alias = "productos"
let cols = {
    nombre: {type : DataTypes.STRING(20)},
    foto:{type : DataTypes.DATA} ,
    precio: {type : DataTypes.DECIMAL},
    categoria:{type : DataTypes.STRING(20)}, 
    id:{type : DataTypes.INTEGER},
    descuento: {type : DataTypes.DECIMAL},
    descripcion:{type : DataTypes.STRING(200)},
};

const Producto = sequelize.define(alias,cols);
module.exports = Producto;
