const fs = require('fs');
const path = require('path');
const bcrypts = require('bcryptjs');


const usuarios_path = path.join(__dirname, '../data/usuarios.json');
const leerUsuarios = fs.readFileSync(usuarios_path, 'utf-8');
const usuarios = JSON.parse(leerUsuarios);


const login = (req, res) => {
    res.render('login');
};
const procesoLogin = (req, res) => {
    let usuarioLogueado = usuarios.find((element) => {
        return element.email == req.body.email;
    });
    if (usuarioLogueado == undefined) {
        return res.render('login', {errors: {
            email: {
                msg: 'Este email no está registrado'
            }
        }});
    } else {    
    let usuarioLogueadoContraseña = bcrypts.compareSync(req.body.password, usuarioLogueado.password);
        if(usuarioLogueadoContraseña){
            req.session.userLogged = {email: usuarioLogueado.email, nombre: usuarioLogueado.nombre, imagen: usuarioLogueado.imagen, rol: usuarioLogueado.rol};
            return res.redirect('/usuarios');
        }
        return res.render('login', {errors: {
            logueado: {
                msg: 'Las credenciales son inválidas'
            }
        }, old: {
            email: req.body.email
        }});
    };
};

const loginController = {
    login,
    procesoLogin
}

module.exports = loginController;