/*
Eliminando archivos

Para poder eliminar archivos podemos usar el metodo unlink de Fyle System.
*/

const express = require('express');
const app = express();
const fs = require('fs');

app.liste(3000, () => {
    console.log('APP corriendo en puerto 3000');
});

app.use( express.static('public'));

qpp.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.delete("/imagen/:nombre", (req, res) => {
    const { nombre } = req.params;
    fs.unlink(`${__dirname}/public/imagenes/${nombre}.jpg`, (err) => {
        res.send(`Imagen ${nombre} fue eliminada con exito`);
    });
});
