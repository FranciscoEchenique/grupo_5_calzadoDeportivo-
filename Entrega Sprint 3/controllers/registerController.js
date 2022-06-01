const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const bcrypts = require('bcryptjs');

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
    const password = bcrypts.hashSync(req.body.password, 10);
    
    if (req.file == undefined){
        return res.render('register', {
            errors: {
                imagenUsuario: {
                    msg: 'Por favor, ingrese una imagen'
                }
        }, old: req.body});
    } else {
        var imagen = '/images/fotosUsuarios/' + req.file.filename; 
    }
    

    const usuarioEmail = usuarios.find((element) => 
        element.email == email
    );

    const errors = validationResult(req);

    if (errors.errors.length > 0){
       return res.render('register', {errors: errors.mapped(), old: req.body})
    }; 

    if (usuarioEmail != undefined){
        return res.render('register', {
         errors: {
            email: {
            msg: 'Este mail ya está registrado, utilice otro'
                }
         }, old: req.body});
     };
    
    usuarios.push({
        id,
        nombre,
        apellido,
        email,
        password,
        imagen
    });
    
    const nuevoUsuarioString = JSON.stringify(usuarios, null, 2);
    fs.writeFileSync(usuarios_path, nuevoUsuarioString);
    res.redirect('/login');
}

const registerController = {
    register,
    almacenarUsuario
}

module.exports = registerController;