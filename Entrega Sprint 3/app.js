
/*------------------------------- Requires -------------------------------*/
const express = require('express');
const path = require('path');
const mainRoute = require('./routes/mainRoute.js');
const methodOverride = require('method-override');
const detalleRoute = require('./routes/detalleRoute')
const carritoRoute = require('./routes/carritoRoute');
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const productoRoute = require('./routes/productoRoute');
/*------------------------------- Requires -------------------------------*/

/*------------------------------- Express-------------------------------*/
const app = express();
/*------------------------------- Express-------------------------------*/

/*------------------------------- Middlewares -------------------------------*/
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
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
/*------------------------------- Sistema de ruteo -------------------------------*/

app.use((req, res, next) =>{
    res.status(404).send("Error")
});

app.listen(3500, () => {
    console.log('servidor corriendo en el puerto 3500');
});

//Fin//