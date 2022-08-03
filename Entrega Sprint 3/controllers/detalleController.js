const fs = require('fs');
const path = require('path');

const db = require('../database/models');

const Zapatillas = db.Zapatillas;
const Marcas = db.Marcas;
const Usuarios = db.Usuarios;

const mejoresOfertasRuta = (req, res) => {
    const id = req.params.iDproducto;

    const userLogged = req.session.userLogged;

    Zapatillas.findAll({
        where: {
            categoria: 'mejores-ofertas'
        }
    })
    .then(zapatillas => {
        let mejoresOfertas = zapatillas.find(producto => {return producto.id_zapatilla == id});
        res.render('detalle-de-producto', {producto: mejoresOfertas, userLogged});
    })
};

const masCompradoRuta = (req, res) => {
    const id = req.params.iDproducto;

    const userLogged = req.session.userLogged;
    
    Zapatillas.findAll({
        where: {
            categoria: 'mas-comprado'
        }
    })
    .then(zapatillas => {
        let masComprado = zapatillas.find(producto => {return producto.id_zapatilla == id});
        res.render('detalle-de-producto', {producto: masComprado, userLogged});
    })

};

const mejoresProductosRuta = (req, res) => {
    const id = req.params.iDproducto;

    const userLogged = req.session.userLogged;

    Zapatillas.findAll({
        where: {
            categoria: 'mejores-productos'
        }
    })
    .then(zapatillas => {
        let mejorProducto = zapatillas.find(producto => {return producto.id_zapatilla == id});
        res.render('detalle-de-producto', {producto: mejorProducto, userLogged});
    })

};

const detalleController = {
    mejoresOfertasRuta,
    masCompradoRuta,
    mejoresProductosRuta,
};

module.exports = detalleController;
