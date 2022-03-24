var express = require('express'); //Aqui importamos la dependencia
var app = express(); 

var port = process.env.PORT || 3000; //con esto conectamos al puerto con el servidor 
// Ruta raiz 
app.get('/', function (red,res) {
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
 
});
//segunda ruta /api y esta nos regresa un json
app.get('/api', function (req,res){
    res.json({ firstname: 'John', lastname: 'Doe'});
});
//Tercera ruta a esta le ingresamos un Dato y al imprimirlo concatenamos 3 cosas asi muy padre. 
app.get('/person/:id', function (req,res){
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

// levantamos el servidor y lo pnemos listo
app.listen(port);

