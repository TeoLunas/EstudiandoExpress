const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('App corriendo en puerto 3000');
});

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

