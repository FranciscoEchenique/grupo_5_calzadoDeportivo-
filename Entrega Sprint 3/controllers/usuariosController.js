const fs = require('fs');
const path = require('path');

const usuarios_path = path.join(__dirname, '../data/usuarios.json');
const leerUsuarios = fs.readFileSync(usuarios_path, 'utf-8');
const usuarios = JSON.parse(leerUsuarios);

const index = (req, res) => {
    res.render('usuarios', {usuarioFinal: req.session.userLogged})
};

const usuariosController = {
    index
};

module.exports = usuariosController;