const { Store } = require('express-session');
const fs = require('fs');
const path = require('path');

const usuarios_path = path.join(__dirname, '../data/usuarios.json');
const leerUsuarios = fs.readFileSync(usuarios_path, 'utf-8');
const usuarios = JSON.parse(leerUsuarios);

const index = (req, res) => {
    res.render('usuarios', {usuarioFinal: req.session.userLogged})
};

const eliminar = (req, res) => {
    if (req.session.userLogged){
        req.session.userLogged = undefined
        res.redirect('/login')
    }
};

const usuariosController = {
    index,
    eliminar
};

module.exports = usuariosController;