const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");

const Zapatillas = db.Zapatillas;
const Marcas = db.Marcas;
const Usuarios = db.Usuarios;

const crear = (req, res) => {
    res.render('formulario-creacion');
};
const almacenar = (req, res) => {
    const id_marca = parseInt(req.body.marca, 10);
    const nombre = req.body.nombre;
    const foto = '/images/' + req.file.filename;
    const precio = req.body.precio;
    const descuento = req.body.descuento;
    const categoria = req.body.categoria;
    const descripcion = req.body.descripcion;

    Zapatillas.create({
        id_marca: id_marca,
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        categoria: categoria,
        foto: foto,
        descuento: descuento,
    }).then(() => {
        return res.redirect('/');
    }).catch((error) => {
        res.send(error);
    });
}
const editar = (req, res) => {
    const id = req.params.iDproducto;

    Zapatillas.findByPk(id)
        .then(zapatilla => { 
            res.render('formulario-edicion', {productoPorEditar: zapatilla}) 
        })
        .catch(error => { res.send(error) })
}

const actualizar = (req, res) => {
    const idProducto = req.params.iDproducto;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const descuento = req.body.descuento;
    const categoria = req.body.categoria;
    const descripcion = req.body.descripcion;

    Zapatillas.update({
        nombre: nombre,
        precio: precio,
        descuento: descuento,
        categoria: categoria,
        descripcion: descripcion
    },
    {
        where: {id_zapatilla: idProducto}
    }
    )
    .then(() => {
        return res.redirect('/')
    })
    .catch(error => res.send(error))
}

const mostrarEliminar = (req, res) => {
    const id = req.params.iDproducto;

    Zapatillas.findByPk(id, {
        include: ['marca']
    })
    .then(zapatilla => {
        return res.render('formulario-eliminar', {productoAEliminar: zapatilla})
    })
    .catch(error => res.send(error))
}

const eliminar = (req, res) => {
    const id = req.params.iDproducto;

    Zapatillas.destroy({
        where: {id_zapatilla: id}, force: true
    })
    .then(() => {
        return  res.redirect('/');
    })
    .catch(error => {res.send(error)})
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