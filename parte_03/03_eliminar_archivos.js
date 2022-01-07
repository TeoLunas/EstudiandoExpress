/*
Eliminando archivos

Para poder eliminar archivos podemos usar el metodo unlink de Fyle System.
*/

//Se crea un servidor con Express e importar el modlo File System.
const express = require('express');
const app = express();
const fs = require('fs');

app.liste(3000, () => {
    console.log('APP corriendo en puerto 3000');
});

//Se publica la carpeta public usando los metodos static y use.
app.use( express.static('public'));

//Ruta que devuelve el documento index.html.
qpp.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Ruta que recibe el nombre de una imagen como parametro y la elimina usando el metodo unlink de FS
app.delete("/imagen/:nombre", (req, res) => {
    const { nombre } = req.params;
    fs.unlink(`${__dirname}/public/imagenes/${nombre}.jpg`, (err) => {
        res.send(`Imagen ${nombre} fue eliminada con exito`);
    });
});

