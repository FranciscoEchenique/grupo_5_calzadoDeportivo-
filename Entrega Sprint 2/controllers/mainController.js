const home = (req, res) => {
    res.render('home', {mejoresProductos: mejoresProductos, masComprado: masComprado, mejoresOfertas: mejoresOfertas});
};

const mejoresProductos = [
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
const masComprado = [
    {
        nombre: "Nike Air Max Se",
        foto: "images/zapatillas-nike-air-max-se.jpg",
        precio: "$18.500",
    },
    {
        nombre: "Nike Air Dunk Low",
        foto: "images/nike-dunk-low.jpg",
        precio: "$14.800"
    },
    {
        nombre: "Puma Mirage Tech",
        foto: "images/puma-mirage-tech.jpg",
        precio: "$10.000"
    },
    {
        nombre: "Adidas Super Star",
        foto: "images/adidas-superstar-bold.jpg",
        precio: "$12.000",
    },
]
const mejoresOfertas = [
    {
        nombre: "Nike Air Vapormax 360",
        foto: "images/nike-air-vapormax-360.jpg",
        precio: "$22.000",
        precioTachado: "$35.000",
        descuento: "30% OFF",
    },
    {
        nombre: "Nike Air Force 1 Shadow",
        foto: "images/nike-air-force-1-shadow.jpg",
        precio: "$14.300",
        precioTachado: "$18.300",
        descuento: "20% OFF",
    },
    {
        nombre: "Nike Air Max 97 Negras",
        foto: "images/nike-air-max-97-negras.jpg",
        precio: "$13.000",
        precioTachado: "$17.000",
        descuento: "15% OFF",
    },
    {
        nombre: "Puma Wild Rider Rollin",
        foto: "images/puma-wild-rider-rollin.jpg",
        precio: "$11.000",
        precioTachado: "$13.500",
        descuento: "18% OFF",
    },
]

const mainController = {
    home,
}

module.exports = mainController;