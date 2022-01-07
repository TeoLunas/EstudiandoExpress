const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000!');
});

app.get('/TocToc', (req, res) => {
    res.send('Quien es?')
});

/*
Ruta por defecto

al recibir una ruta que no existe, devuelve por defecto un mensaje o pagina.

*/

app.get('*', (req, res) => {
    res.send('<center> <h1>Sorry, aqui no hay nada :/ </h1> </center>')
});