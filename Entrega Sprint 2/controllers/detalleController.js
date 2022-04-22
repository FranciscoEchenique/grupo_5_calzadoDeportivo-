const detalleProducto = (req, res) => {
    res.render('detalle-de-producto');
};

const detalleController = {
    detalleProducto,
};

module.exports = detalleController;