const fs = require('fs');
const path = require('path');

const usuarios_path = path.join(__dirname, '../data/usuarios.json');
const leerUsuarios = fs.readFileSync(usuarios_path, 'utf-8');
const usuarios = JSON.parse(leerUsuarios);

const index = (req, res) => {
    const id = req.params.iDusuario;

     const usuarioFinal = usuarios.find((element) => {
        return element.id == id
     })

    res.render('usuarios', {usuarioFinal})
};

const usuariosController = {
    index
};

module.exports = usuariosController;