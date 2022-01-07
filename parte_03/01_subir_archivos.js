/*
expressFileUpload se configura como un middleware

app.use(expressFileUpload(<objeto de configuracion>));

Dentro del metodo use ejecutamos la instancia de nuestro paquete express.fileupload. La importacion de este paquete no nos devuelve un objeto sino una funcionm la cual al ser llamada, recibe como parametro un objeto de configuracion con varias propiedades con las que podremos personalizar el uso de este plugin.

El archivo de configuración se declara como argumento en la ejecución de la instancia de
express-fileupload.

limits : Es un objeto en el que podemos definir a traves de atributo "fileSize" la cantidad maxima de Bytes que permitira el paquete paa la carga de archivos.

abortOnLimit : Es una propiedad que recibe un valor booleano y prohibe la carga de archivos cuando se sobrepasa el limite definido en el atributo limits.

responseOnLimit : Su valor sera un string que sera devuelto al cliente cuando se sobrepasa el peso del archiv que se esta intentando cargar.

*/

const express = require('express');
const expressFileUpload = require('express-fileupload');
const app = express();

app.listen(3000, () => {
    console.log('APP corriendo en puerto 3000');
});

//Middleware de configuracion de express File Upload.
app.use( expressFileUpload({
        limits: {fileSize: 5000000},
        abortOnLimit: true,
        responseOnLimit: 'El peso del archivo que intentas subir supera el limite permitido',
    })
);

//Ruta para enviar el formulario al cliente
app.get('/', (req, res) => {
    //Se define el metodo post para poder enviar el archivo.
    //El input debe file debe tener el atributo name para poder ser identificado por el servidor.
    //En la etiqueta form debe ser declarado el atributo 'enctype', cuyo valor debe ser multipart/form-data". ESto permite que nuestro formulario pueda enviar archivos y que estos sean reconocidos por el servidor.
    res.send(`
        <form method="POST" enctype="multipart/form-data">
            <input type="file" name="foto" required>
            <button> Upload </button>
        </form>
    `)
});


app.post('/', (req, res) => {
    //A traves del destructuring extrae la propiedad foto de los files ubicada dentro del objeto request.
    const { foto } = req.files;

    //Destructuring que extrae la propiedad name de la constante anteriro. En esta constante se almacena el nombre y formato.
    const { name } = foto;

    //Utilizando el metodo mv de la constante foto. En el primer parametro se declara la ruta donde se guardara el archivo, el segundo parametro es un callback que recibe como parametro un posible error.
    foto.mv(`${__dirname}/archivos/${name}`, (err) => {
        res.send('Archivo cargado con exito.');
    });
});