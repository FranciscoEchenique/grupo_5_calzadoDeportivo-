const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");


const productos_path = path.join(__dirname, '../data/productsDataBase.json');
const leerProductos = fs.readFileSync(productos_path, 'utf-8');
const productos = JSON.parse(leerProductos);

const crear = (req, res) => {
    res.render('formulario-creacion');
};
const almacenar = (req, res) => {
    const id = productos.length + 1;
    const nombre = req.body.nombre;
    const foto = '/images/' + req.file.filename;
    const precio = req.body.precio;
    const descuento = req.body.descuento;
    const categoria = req.body.categoria;
    const descripcion = req.body.descripcion;

    productos.push({
        id,
        foto,
        nombre,
        precio,
        descuento,
        categoria,
        descripcion
    })
    const nuevoProductoString = JSON.stringify(productos, null, 2);
    fs.writeFileSync(productos_path, nuevoProductoString);
    res.redirect('/detalle-de-producto/' + req.body.categoria + '/' + id);
}
const editar = (req, res) => {
    const id = req.params.iDproducto;

    const productoPorEditar = productos.find((element) =>{
        return element.id == id
    });
    
    res.render('formulario-edicion', {productoPorEditar});
}

const actualizar = (req, res) => {
    const id = req.params.iDproducto;

    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const descuento = req.body.descuento;
    const categoria = req.body.categoria;
    const descripcion = req.body.descripcion;

    productos.forEach(element => {
        if (element.id == id){
            element.nombre = nombre;
            element.precio = precio;
            element.descuento = descuento;
            element.categoria = categoria;
            element.descripcion = descripcion;
        }
    });

    const productoEditadoString = JSON.stringify(productos, null, 2);
    fs.writeFileSync(productos_path, productoEditadoString);
    
    res.redirect('/')
}

const mostrarEliminar = (req, res) => {
    const id = req.params.iDproducto;

    const productoAEliminar = productos.find((element) =>{
        return element.id == id
    });
    
    res.render('formulario-eliminar', {productoAEliminar});
}

const eliminar = (req, res) => {
    const id = parseInt(req.params.iDproducto);
    const productosFinales = productos.filter((elemento) => 
        elemento.id !== id
    )
    const productosFinalesString = JSON.stringify(productosFinales, null, 2);
    fs.writeFileSync(productos_path, productosFinalesString);
    
    res.redirect('/')
}

const productoController = {
    crear,
    almacenar,
    editar,
    actualizar,
    eliminar,
    mostrarEliminar
}

module.exports = productoController;