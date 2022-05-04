const mejoresProductos = [
    {
        nombre: "Nike Air Max 720",
        foto: "/images/nike-air-max-720.jpg",
        precio: "$20.000",
        id: "1",
    },
    {
        nombre: "Nike Air Max 97",
        foto: "/images/nike-air-max-97.jpg",
        precio: "$17.000",
        id: "2",
    },
    {
        nombre: "Adidas Coreracer",
        foto: "/images/adidas-running.jpg",
        precio: "$9.000",
        id: "3",
    },
    {
        nombre: "Adidas Ozweego",
        foto: "/images/adidas-ozweego.jpg",
        precio: "$11.000",
        id: "4",
    },
]

const mejoresOfertasRuta = (req, res) => {
    res.render('detalle-de-producto');
};

const masCompradoRuta = (req, res) => {
    res.render('detalle-de-producto');
};

const mejoresProductosRuta = (req, res) => {
    const idProducto = parseInt(req.params.iDproducto);

    let producto = []

    mejoresProductos.forEach(function (elemento){
        if (elemento.id === idProducto) {
            producto.push(elemento)
        }
    })

    res.render('detalle-de-producto', {producto: producto});
};

const detalleController = {
    mejoresOfertasRuta,
    masCompradoRuta,
    mejoresProductosRuta,
};

module.exports = detalleController;