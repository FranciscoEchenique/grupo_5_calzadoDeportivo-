const fs = require('fs');
const path = require('path');

const productos_path = path.join(__dirname, '../data/productsDataBase.json');
const leerProductos = fs.readFileSync(productos_path, 'utf-8');
const productos = JSON.parse(leerProductos);

const home = (req, res) => {
    res.render('home', {mejoresProductos: mejoresProductos, masComprado: masComprado, mejoresOfertas: mejoresOfertas});
};

const mejoresProductos = productos.filter(function(elemento){ return elemento.categoria === "mejores-productos"});

const masComprado = productos.filter(function(elemento){ return elemento.categoria === "mas-comprado"});

const mejoresOfertas = productos.filter(function(elemento){ return elemento.categoria === "mejores-ofertas"});


const mainController = {
    home,
}

module.exports = mainController;