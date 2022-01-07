/*
Paquete body-parse

Nos permite recibir y manipular el payload enviado desde una aplicacion cliente.

Su funcion es formatear automaticamente el JSON que recibimos en la consulta a un objeto manipulable y disponibilixar un propiedad body dentro del objeto request.

Se integra como un middleware.

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

*/

//Se crea servidor con express y se impotan los paquetes de express-fileupload y body parser
const express = require('express');
const app = express();
const expressFileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

app.liste(3000, () => {
    console.log('APP corriendo en puerto 3000');
});

// Se integra el paquete body parser usando el metodo use de la constante app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Se define el tamaño maximo de la cancio, en caso de exceder el peso limite se muestra un mensaje
app.use(
    expressFileUpload({
        limits: { fileSize: 10000000 },
        abortOnLimit: true,
        responseOnLimit:
            "El peso de la cancion que intentas subir supera el limite permitido",
    })
);

//Ruta get que devuelve un formulario, para poder enviar la cancion.
app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="" enctype="multipart/form-data">
            <input type="text" name="nombre" required placeholder="Nombre">
            <input type="text" name="artista" required placeholder="Artista">
            <input type="text" name="album" required placeholder="Album">
            <input type="file" name="cancion" required>
            <button> Upload! </button>
        </form>
    `);
});

// Se crea una ruta para recibir la cancion y guardarla en la carpeta canciones, ademas de interpolar el nombre de la cancion.
app.post("/", (req, res) => {
    const { cancion } = req.files;
    const { nombre, artista, album } = req.body;
    const name = `${nombre} - ${artista} (${album})`;

    cancion.mv(`${__dirname}/canciones/${nombre}.mp3`, (err) => {
        res.send('Archivo cargado con exito!');
    })
});