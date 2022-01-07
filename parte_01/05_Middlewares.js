
const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('App corriendo en el puerto 3000');
});

/*
Middlewares

Son funciones que se ejecutan entre la consulta de una aplicacion cliente y la respuesta de esta peticion devuelta por el servidor.

Se activan antes de nuestras rutas.

Sirven coomo filtro, en donde podemos definir diferentes validaciones

Es parecida a la creacion de una ruta, pero el metodo usado es diferente.

app.use(<PATH>, (req, res, next) => {
    //validaciones;
    next();
});

El metodo para la instacion app se llama use.

El parametro next, sera la funcion que al ejecutarse permitira la continuacion de la consulta, sea a otro middlewara o la ruta que se esta consultando.
*/

//Middlewra para la ruta tiempo
app.use('/Tiempo', (req, res, next) => {
    
    //Parametro request y su metodo header para almacenar en una constante el valor de la propiedad "Authorization"
    const Auth = req.header('Authorization');

    Auth ? next() : res.send('¿Quien es?');

});

//Ruta para el Tiepo
app.get('/Tiempo', (req, res) => {
    
    //Se crea y devuelve un objeto que incluya la fecha y hora actual
    const tiempo = {time: Date.now() };
    res.send(tiempo);
});

app.use('/colores', (req, res, next) => {
    const color = req.header('Azul');

    color === 'Azul' 
        ? next() 
        : res.send('No es azul');
});

app.get('/colores', (req, res) => {
    res.send('Ingreso correcto con el color Azul')
})