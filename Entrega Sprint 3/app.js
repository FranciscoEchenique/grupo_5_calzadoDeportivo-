
/*------------------------------- Requires -------------------------------*/
const express = require('express');
const path = require('path');
const mainRoute = require('./routes/mainRoute.js');
const methodOverride = require('method-override');
const session = require('express-session');
const detalleRoute = require('./routes/detalleRoute');
const carritoRoute = require('./routes/carritoRoute');
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const productoRoute = require('./routes/productoRoute');
const usuariosRoute = require('./routes/usuariosRoute');
/*------------------------------- Requires -------------------------------*/

/*------------------------------- Express-------------------------------*/
const app = express();
/*------------------------------- Express-------------------------------*/

/*------------------------------- Middlewares -------------------------------*/
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret: "Mensaje secreto",
    resave: false,
    saveUninitialized: false
}));
/*------------------------------- Middlewares -------------------------------*/

/*------------------------------- Motor de vistas -------------------------------*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
/*------------------------------- Motor de vistas -------------------------------*/


/*------------------------------- Sistema de ruteo -------------------------------*/
app.use('/', mainRoute);

app.use('/detalle-de-producto', detalleRoute);

app.use('/carrito', carritoRoute);

app.use('/register', registerRoute);

app.use('/login', loginRoute);

app.use('/productos', productoRoute);

app.use('/usuarios', usuariosRoute);
/*------------------------------- Sistema de ruteo -------------------------------*/

app.use((req, res, next) =>{
    res.status(404).send("ERROR 404")
});

app.listen(3500, () => {
    console.log('servidor corriendo en el puerto 3500');
});

//Fin//