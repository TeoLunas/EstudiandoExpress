const express = require('express');

const app = express();

//Agregar una ruta GET /azar/:numero

app.listen(3000, () => {
    console.log('Aplicacion corriendo en puerto 3000');
})

/*
Objeto Request (req)

Corresponde a la instancia, qe contiene las propiedades definidad en una consulta emitida por una aplicacion cliente.

Es un objeto, desde el cual se puede acceder a los paramentros, cuerpo o encabezado.

Es la primera funcion que se ejecuta.
*/

/*
Metodos y propiedades mas utilizados.

req.params: Manejo de los parametros recibidos por URL.

req.header(): Recibe como argumentos el nombre de una propiedad y devuelve el valor de esta.

req.secure: Confirma si el sitio de la consulta tiene el sello de seguridad https.

req.method: Devuelve el metodo HTTP con el que se esta haciendo la consulta.

app.get('/home/:id', function (req, res){
    res.send(req.params.id)
});

*/

app.get('/azar/:numero', (req, res) => {
    
    //Ocupar el objeto Math para generar un numero enetero aleatorio entre 1 y 3,
    const numeroAleatorio = Math.floor(Math.random() * (4 - 1)) + 1;

    //Utilizar la propiedad "params" del objeto request para guardar en una constante el parametro "numero".
    const numero = req.params.numero;

    //Utilizar el operador ternario para evaluar que el numero generado de forma aleartoria, sea igual al recibido en la ruta como parametro.
    numero == numeroAleatorio
        ? res.send('Hoy estas de suerte!')
        : res.send('Buena suerte para la proxima...');

});