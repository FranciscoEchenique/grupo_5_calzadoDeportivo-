const crear = (req, res) => {
    res.render('formulario-creacion');
};
const almacenar = (req, res) => {
    res.redirect('/productos');
}

const productoController = {
    crear,
    almacenar,
}

module.exports = productoController;