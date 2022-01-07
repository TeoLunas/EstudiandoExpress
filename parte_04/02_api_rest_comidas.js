const express = require('express')
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded( {extended: false } ));
app.use(bodyParser.json());

//Servido iniciado
app.listen(3000, () => {
    console.log('APP corriendo en servidor 3000');
});

//Arreglo comidas
let comidas = [
    { 
        nombre: 'Pizza',
    },
    {
        nombre: 'Hamburgesa'
    }
];

//Ruta que devuelve las comidas.
app.get('/comidas', (req, res) => {
    res.send(comidas);
});

//Ruta para crear un nueva comida.
app.post('/comida', async(req, res) => {
    const nueva_Comida = req.body;
    comidas.push(nueva_Comida);
    res.send(comidas);
});

//Ruta para actualizar un comida.
app.put('/comida/:comida', async(req, res) => {
    const { comida } = req.params;
    const { nombre } = req.body;

    comidas = comidas.map( (c) => (c.nombre == comida ? { nombre } : c));
    res.send(comidas);
});

//Ruta para eliinar una comida.
app.delete('/comida/:comida', async(req, res) => {
    const { comida } = req.params;
    comidas = comidas.filter( (c) => c.nombre !== comida);
    res.send(comidas)
});


