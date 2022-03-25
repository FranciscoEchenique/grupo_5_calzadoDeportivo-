const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public')

app.use( express.static(publicPath) );

app.listen(3500, () => {
    console.log('servidor corriendo en el puerto 3500');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})