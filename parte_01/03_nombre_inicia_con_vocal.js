const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('App corriendo en el puerto 3000');
});

app.get('/usuario/:nombre', (req, res) => {
    //Obtener el nombre enviado en la url
    const nombreComprobar = req.params.nombre;

    //Sacar la primera letra del nombre recibido, primero  separamos el nombre, luego con slice obtenemos la primera letra del array.
    let primeraLetraNombre = nombreComprobar.split("").slice(0,1);

    //Creamos un array de vocales
    const listaDeVocales = ['a', 'e', 'i', 'o', 'u'];

    //Comprobamos si la primera letra de nombre, esta dentro del array de vocales
    //Forma uno con if
    /*if(listaDeVocales.includes(primeraLetraNombre[0])){
        res.send('Bienvenido ' + nombreComprobar);
    }else{
        res.send('El nombre no comienza con vocal')
    }*/

    //Forma 2 con operador ternario.
    listaDeVocales.includes(primeraLetraNombre[0])
        ? res.send('Bienvenido ' + nombreComprobar)
        : res.send('El nombre no comienza con vocal')

});
''



