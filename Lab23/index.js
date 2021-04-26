const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const misRutas = require('./routes/Escribe');
const rutasUsuarios = require('./routes/usuarios');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());

app.use(session({
    secret: 'a2jwejnirfkmci0j23fewrrmcowssr', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/Escribe', misRutas);
app.use('/usuarios', rutasUsuarios);

app.use('/Holamundo', (request, response, next) => {
    response.send('Respuesta de la ruta "/Holamundo"'); 
});

app.use('/Cisco', (request, response, next) => {
    response.send('Respuesta de la ruta "/Cisco"'); 
});

app.use('/admin', (request, response, next) => {
	console.log('403');
	response.status(403);
    response.send('<h1>Recurso prohibido</h1>'); 
});

app.get('/', (request, response, next) => {
    //response.send('Respuesta de la ruta "/Cisco"');
	response.send('<html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Lab12</title></head><body><h1>Lab 12</h1><ul><li><a href="/Escribe/">Personal</a></li><li><a href="/Holamundo">Hola mundo</a></li><li><a href="/Cisco">Cisco</a></li></ul></body></html>');

});

app.use((request, response, next) => {
	console.log('Error 404');
	response.status(404);
    response.send('<h1>Página no disponible</h1>'); //Manda la respuesta
});

app.listen(2022);