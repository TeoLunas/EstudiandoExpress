const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('App corriendo en puerto 3000');
})
/*
Con express atraves de un middleware podemos especificar un directorio y hacer publico o "liberar su contenido"

app.use(express.static("<Nombre o direccion de la carpeta o archivo>"))

En la instacion de Express se esta ocupando el metodo llamado static, el cual permite definir a traves de un String, la direccion de un directorio de archivs estaticos, sin embargo, tambien puede ser usado para devolver un unico archivo. por ejemplo un index.html
*/

//middleware y el método “static” de Express para declarar la carpeta “assets” como directorio público del servidor.
app.use(express.static('assets'));

//Ruta get raiz que devuelve el documento index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index05js.html')
});


