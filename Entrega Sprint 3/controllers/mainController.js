const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const Zapatillas = db.Zapatillas;
const Marcas = db.Marcas;
const Usuarios = db.Usuarios;

const productos_path = path.join(__dirname, '../data/productsDataBase.json');
const leerProductos = fs.readFileSync(productos_path, 'utf-8');
const productos = JSON.parse(leerProductos);

const home = (req, res) => {
 

const promesaZapatillas = Zapatillas.findAll({
    include: 'marca',
    where: {
        categoria: 'mejores-productos'
    },
    raw: true,
    nest: true 
})

const promesaZapatillasDos = Zapatillas.findAll({
    include: 'marca',
    where: {
        categoria: 'mas-comprado'
    },
    raw: true,
    nest: true
})

const promesaZapatillasTres = Zapatillas.findAll({
    include: 'marca',
    where: {
        categoria: 'mejores-ofertas'
    },
    raw: true,
    nest: true
})

Promise.all([promesaZapatillas, promesaZapatillasDos, promesaZapatillasTres])
    .then(([mejoresProductos, masComprado, mejoresOfertas]) => {
        res.render('home', {mejoresProductos: mejoresProductos, masComprado: masComprado, mejoresOfertas: mejoresOfertas});
    })
};

const mainController = {
    home,
}

module.exports = mainController;