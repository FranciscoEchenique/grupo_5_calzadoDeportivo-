const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');

const usuarios_path = path.join(__dirname, '../data/usuarios.json');
const leerUsuarios = fs.readFileSync(usuarios_path, 'utf-8');
const usuarios = JSON.parse(leerUsuarios);

const register = (req, res) => {
    res.render('register');
}
const almacenarUsuario = (req, res) => {
    const id = usuarios.length + 1;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const contraseña = req.body.password;
    
    let errorImagen = '';
    if (req.file !== undefined){
        var imagenValidada = req.file.filename
    } else {
        errorImagen = 'Por favor envía una imagen'
    }
    
    const imagen = '/images/fotosUsuarios/' + imagenValidada; 

    usuarios.push({
        id,
        nombre,
        apellido,
        email,
        contraseña,
        imagen
    })
    
    const nuevoUsuarioString = JSON.stringify(usuarios, null, 2);
    fs.writeFileSync(usuarios_path, nuevoUsuarioString);
    
    const errors = validationResult(req)

    if (errors.errors.length > 0){
        res.render('register', {errors: errors.mapped(), old: req.body, errorImagen})
    }

    res.redirect('/login')
}

const registerController = {
    register,
    almacenarUsuario
}

module.exports = registerController;