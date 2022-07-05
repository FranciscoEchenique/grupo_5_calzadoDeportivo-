const sequelize = require('sequelize');
const sequelize = require('../database'); 
let alias = "Zapatilla"
let cols = {
	id_zapatilla: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_modelo: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    precio: {
        type: dataTypes.FLOAT,
        allowNull: false
    },
    descripcion: {
        type: dataTypes.VARCHAR(500),
        allowNull: false
    },
    categoria: {
        type: dataTypes.VARCHAR(100),
        allowNull: false
    },
    foto: {
        type: dataTypes.VARCHAR(100),
        allowNull: false
    },
    descuento: {
        type: dataTypes.FLOAT,
        allowNull: true
    }
}
let config = {
    tableName: "Zapatilla",
    timestamps: false,

}

const Zapatilla = sequelize.define(alias,cols,config);
Zapatilla.associate = function(models){
    Zapatilla.belongsTo(models.Marca,{
        as: "marca",
        foreignKey:"id_marca" ,
        timestamps: false
    })
}
module.exports = Zapatilla;
