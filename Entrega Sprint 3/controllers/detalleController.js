const fs = require('fs');
const path = require('path');

const productos_path = path.join(__dirname, '../data/productsDataBase.json');
const leerProductos = fs.readFileSync(productos_path, 'utf-8');
const productos = JSON.parse(leerProductos);

const mejoresProductos = productos.filter(function(elemento){ return elemento.categoria === "mejores-productos"});

const masComprado = productos.filter(function(elemento){ return elemento.categoria === "mas-comprado"});

const mejoresOfertas = productos.filter(function(elemento){ return elemento.categoria === "mejores-ofertas"});

const mejoresOfertasRuta = (req, res) => {
    const id = req.params.iDproducto;

    const productoMejoresOferas =  mejoresOfertas.find((element) =>{
        return element.id == id
    });
    
    res.render('detalle-de-producto', {producto: productoMejoresOferas});
};

const masCompradoRuta = (req, res) => {
    const id = req.params.iDproducto;

    const productoMasComprado = masComprado.find((element) =>{
        return element.id == id
    });
    
    res.render('detalle-de-producto', {producto: productoMasComprado});
};

const mejoresProductosRuta = (req, res) => {
    const id = req.params.iDproducto;

    const mejorProducto = mejoresProductos.find((element) =>{
        return element.id == id
    });
    res.render('detalle-de-producto', {producto: mejorProducto});
};

const detalleController = {
    mejoresOfertasRuta,
    masCompradoRuta,
    mejoresProductosRuta,
};

module.exports = detalleController;
