const sequelize = require('sequelize');
const sequelize = require('../database'); 
let alias = "Usuarios"
let cols = {
    id_usuario: {type : DataTypes.INCREMENT},
    nombre:{type : DataTypes.STRING(100)} ,
    apellido: {type : DataTypes.STRING(100)},
    email:{type : DataTypes.STRING(100)}, 
    password:{type : DataTypes.STRING(100)},
    imagen: {type : DataTypes.STRING(100)},
    rol:{type : DataTypes.STRING(20)},
};
let config = {
    tableName: "Usuarios",
    timestamps: false,
}

const Producto = sequelize.define(alias,cols,config);
module.exports = Producto;