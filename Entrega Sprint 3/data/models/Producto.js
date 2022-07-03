const sequelize = require('sequelize');
const sequelize = require('../database'); 
let alias = "Zapatillas"
let cols = {
	id_zapatilla: sequelize.DataTypes.INTEGER,
    id_modelo: sequelize.DataTypes.INTEGER,
    precio: sequelize.DataTypes.FLOAT,
    descripcion: sequelize.DataTypes.VARCHAR(500),
    categoria: sequelize.DataTypes.VARCHAR(100),
    foto: sequelize.DataTypes.VARCHAR(100),
    descuento: sequelize.DataTypes.FLOAT,
}
let config = {
    tableName: "Zapatillas",
    timestamps: false,

}

const Producto = sequelize.define(alias,cols,config);
Producto.associate = function(models){
    Producto.belongsToMany(models.Usuario,{
       as: "compras",
       through: "zapatillas_usuarios",
        foreignKey:"id_zapatilla" ,
        otherKey:"id_usuario" ,
        timestamps: false
    })
    
}
module.exports = Producto;
