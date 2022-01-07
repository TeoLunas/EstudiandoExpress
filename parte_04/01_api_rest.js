/*
API REST

Arquitectura basa en en el protocolo HTTP.

Se dearrollan del lado del servidor, a traves de lo metodos o verbos HTTP que disponibilizan diferentes funciones.
*/

/*
ENDPOINT

Son rutas creadas para el consumo de recursos, para la activacion de una funcion o middleware definida en la configuracion de nuestro servidor.

Tambien es conocido como la suma de la ULS basa, el path declarado en la ruta y el metodo HTTP.

Estructura de un endpoint.

<url base>/<path>
*/

/*
Parametros de los endpoints.

Al definir un path en una ruta, podemos estableces un espacio para el libre tipeo del usuario o la definicion esperada por el servidor.
*/

/*
Sistema CRUD (Create Read Update Delete)

via los metodos HTTP POST, READ, UPDATE Y DELETE

*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('App corriendo en puerto 3000');
});