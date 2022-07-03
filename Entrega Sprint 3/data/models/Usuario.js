const sequelize = require('sequelize');
const sequelize = require('../database'); 
let alias = "Usuarios"
let cols = {
	id_usuarioINT:  sequelize.DataTypes.NOT(null),
    nombre: sequelize.DataTypes.VARCHAR(100), 
    apellido: sequelize.DataTypes.VARCHAR(100),
    email: sequelize.DataTypes.VARCHAR(100),
    password:sequelize.DataTypes.VARCHAR(100),
    imagen:sequelize.DataTypes.VARCHAR(100),
    rol:sequelize.DataTypes.VARCHAR(15),
};
let config = {
    tableName: "Usuarios",
    timestamps: false,
}

const Usuario = sequelize.define(alias,cols,config);
Usuario.associate = function(models){
    Usuario.belongsToMany(models.Productos,{
       as: "compra",
       through: "zapatillas_usuarios",
        foreignKey: "id_usuario",
        otherKey: "id_zapatilla",
        timestamps: false
    })
    
}
module.exports = Usuario;