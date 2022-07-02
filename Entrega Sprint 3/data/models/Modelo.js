const sequelize = require('sequelize');
const sequelize = require('../database'); 
let alias = "Modelos"
let cols = {
	
    id_modelo: sequelize.DataTypes.INTEGER,
    nombre: sequelize.DataTypes.VARCHAR(100),
 
}
let config = {
    tableName: "Modelos",
    timestamps: false,

}

const Modelo = sequelize.define(alias,cols,config);
Modelo.associate = function(models){
    Producto.belongsToMany(models.Usuario,{
       as: "modelo_zapatilla",
       through: "zapatillas_usuarios",
        foreignKey:"id_zapatilla" ,
        otherKey:"id_modelos" ,
        timestamps: false
    })
    
}
module.exports = Modelo;
