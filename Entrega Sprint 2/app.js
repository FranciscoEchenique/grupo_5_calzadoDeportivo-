const express = require('express');
const path = require('path');
const mainRoute = require('./routes/mainRoute.js');
const detalleRoute = require('./routes/detalleRoute')
const carritoRoute = require('./routes/carritoRoute');
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(3500, () => {
    console.log('servidor corriendo en el puerto 3500');
})

app.get('/', mainRoute);

app.get('/detalle-de-producto', detalleRoute);

app.get('/carrito', carritoRoute);

app.get('/register', registerRoute);

app.get('/login', loginRoute);

