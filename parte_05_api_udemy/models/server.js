const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        //Carpeta public visible para todos.
        this.app.use( expres.static('public'));
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.send('Hola mundo')
        });
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor inidicado en puerto ', port);
        });
    }

}

module.exports = Server;