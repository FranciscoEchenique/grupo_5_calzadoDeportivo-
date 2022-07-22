// const sequelize = require('sequelize');
// const sequelize = require('../database'); 
// let alias = "Marca"
// let cols = {
	
//     id_marca: {
//         type: dataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     nombre: {
//         type: dataTypes.VARCHAR(100),
//         allowNull: false
//     }
// }
// let config = {
//     tableName: "Marca",
//     timestamps: false,
// }

// const Marca = sequelize.define(alias,cols,config);
// Marca.associate = function(models){
//     Marca.hasMany (models.Zapatilla,{
//        as: "zapatillas",
//         foreignKey:"id_marca",
//         timestamps: false
//     })
// }
// module.exports = Marca;

module.exports = (sequelize, dataTypes) => {
    let alias = 'Marcas';
    
    let cols = {
    id_marca: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: dataTypes.STRING(100),
        allowNull: false
    }
}

    let config = {
        tableName: "marcas",
        timestamps: false,
    }

    const Marca = sequelize.define(alias, cols, config);
    
    Marca.associate = function(models){
            Marca.hasMany (models.Zapatillas,{
                as: "zapatillas",
                foreignKey:"id_marca",
                timestamps: false
            });
        }

    return Marca;

}


