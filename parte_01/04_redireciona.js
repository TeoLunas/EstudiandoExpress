const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('App corriendo en puerto 3000');
});

/*
Objeto response (res)

Representa la respuesta HTTP que enviamos desde el servidor cuando recibimos una solicitud HTTP. 

Metodos mas comunes.

res.download() : Permite la descarga de un archivo dentro del servidor.

res.redirect() : Asi como su nombre lo indica, se utiliza para redireccionar la consulta recibiendo como argumento la direccion en formato string

res.sendStatus() : Recibe como argumento el codigo de estado que deseemos devolver como respesta de la solicitud.

*/

app.get('/estudiar', (req, res) => {
    res.redirect("https://desafiolatam.com/");
});

app.get('/musica', (req, res) => {
    res.redirect('https://spotify.com/');
});