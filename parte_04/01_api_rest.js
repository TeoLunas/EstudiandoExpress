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

//Creacion de servidor con express. se incluye e integra el paquete body-parser.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(3000, () => {
    console.log('App corriendo en puerto 3000');
});

//Arreglo con canales
let canales = [ { nombre: 'TNT'}, {nombre: 'ESP'} ];

//Ruta que devuelve el arreglo de objetos canales.
app.get('/canales', (req, res) => {
    res.send(canales);
});

//Ruta que ingresa el objeto recibido en el cuerpo de la consulta al arreglo canales, y devuelve como respuesta al cliente el arreglo con el nuevo canal agregado.
app.post('/canal', async(req, res) => {
    const nuevo_Canal = req.body;
    canales.push(nuevo_Canal);
    res.send(canales);
});

//Ruta que recibe como parametro el nombre del canal que se desea cambiar y un payload en formato json con el nuevo nombre. Se devuelve el arreglo modificado como respuesta de esta ruta al cliente.
app.put('/canal/:canal', async(req, res) => {
    const { canal } = req.params;
    const { nombre } = req.body;
    
    canales = canales.map( (c) => (c.nombre == canal ? { nombre } : c) );
    res.send(canales);
});


//Ruta que recibe como parametro el canal que se debera filtar del arreglo de objetos. Se devuelve el arreglo modificado como respuesta de esta ruta al cliente.
app.delete('/canal/:canal', async(req, res) => {
    const { canal } = req.params;
    canales = canales.filter( (c) => c.nombre !== canal );
    res.send(canales);
});