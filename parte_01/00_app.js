const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('el sevidor esta iniciado en el puerto 3000');
});

app.get('/Inicio', (req, res) => {
    res.send('Hola mundo! servidor con espress js &#128526;');
});


/*
request: Para obtener las propiedades enviadas en una consulta desde el cliente.
response: Define las propiedades para la respuesta de la petincion enviada en  el request
*/

/*
La definicion de ruta en Express toma la siguiente estructura.

app.METHOD(PATH, CALLBACK)

app: Instancia de Express.
METHOD: es un metodo de solicitud HTTP en minuscula (get, pout, listen, etc)
PATH: el el complementos de una ruta en el servidor.
CALLBACK: tambien conocido como "handler", es la funcion que se ejecuta cuando la ruta es consultada
*/