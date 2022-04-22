const home = (req, res) => {
    res.render('home', {productos: productos});
};

const productos = [
    {
        nombre: "Nike Air Max 720",
        foto: "/images/nike-air-max-720.jpg",
        precio: "$20.000",
    },
    {
        nombre: "Nike Air Max 97",
        foto: "images/nike-air-max-97.jpg",
        precio: "$17.000",
    },
    {
        nombre: "Adidas Coreracer",
        foto: "images/adidas-running.jpg",
        precio: "$9.000",
    },
    {
        nombre: "Adidas Ozweego",
        foto: "images/adidas-ozweego.jpg",
        precio: "$11.000",
    },
]

const mainController = {
    home,
}

module.exports = mainController;