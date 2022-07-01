const sequelize = require('sequelize');
const sequelize = require('../database'); 
let alias = "Productos"
let cols = {
    nombre: {type : DataTypes.STRING(20)},
    foto:{type : DataTypes.DATA} ,
    precio: {type : DataTypes.DECIMAL},
    categoria:{type : DataTypes.STRING(20)}, 
    id:{type : DataTypes.INCREMENT},
    descuento: {type : DataTypes.DECIMAL},
    descripcion:{type : DataTypes.STRING(200)},
};
let config = {
    tableName: "Productos",
    timestamps: false,

}

const Producto = sequelize.define(alias,cols,config);
module.exports = Producto;
