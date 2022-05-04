const express = require('express');
const path = require('path');
const mainRoute = require('./routes/mainRoute.js');
const detalleRoute = require('./routes/detalleRoute')
const carritoRoute = require('./routes/carritoRoute');
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const app = express();
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.use('/', mainRoute);

app.use('/detalle-de-producto', detalleRoute);

app.use('/carrito', carritoRoute);

app.use('/register', registerRoute);

app.use('/login', loginRoute);

app.use((req, res, next) =>{
    res.status(404).send("Error")
});

app.listen(3500, () => {
    console.log('servidor corriendo en el puerto 3500');
});
