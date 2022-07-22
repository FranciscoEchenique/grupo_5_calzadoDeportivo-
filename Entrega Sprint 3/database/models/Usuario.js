// const sequelize = require('sequelize');
// const sequelize = require('../database'); 
// let alias = "Usuarios"
// let cols = {
// 	id_usuario:  {
//         type: dataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     nombre: {
//         type: dataTypes.VARCHAR(100),
//         allowNull: false
//     }, 
//     apellido: {
//         type: dataTypes.VARCHAR(100),
//         allowNull: false
//     },
//     email: {
//         type: dataTypes.VARCHAR(100),
//         allowNull: false
//     },
//     password: {
//         type: dataTypes.VARCHAR(100),
//         allowNull: false
//     },
//     imagen: {
//         type: dataTypes.VARCHAR(100),
//         allowNull: false
//     },
//     rol: {
//         type: dataTypes.VARCHAR(15),
//         allowNull: true    
//     }
// };
// let config = {
//     tableName: "Usuarios",
//     timestamps: false,
// }

// const Usuario = sequelize.define(alias,cols,config);

// module.exports = Usuario;

module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuarios';

    let cols = {
        	id_usuario:  {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: dataTypes.STRING(100),
                allowNull: false
            }, 
            apellido: {
                type: dataTypes.STRING(100),
                allowNull: false
            },
            email: {
                type: dataTypes.STRING(100),
                allowNull: false
            },
            password: {
                type: dataTypes.STRING(100),
                allowNull: false
            },
            imagen: {
                type: dataTypes.STRING(100),
                allowNull: false
            },
            rol: {
                type: dataTypes.STRING(15),
                allowNull: true    
            }
    }
        
    let config = {
        tableName: "usuarios",
        timestamps: false,
    }
        
    const Usuario = sequelize.define(alias,cols,config);

    return Usuario;
    
}