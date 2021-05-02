const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const misRutas = require('./routes/Escribe');
const rutasUsuarios = require('./routes/usuarios');
const multer = require('multer');


//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().getMilliseconds() + '_' + file.originalname);
    },
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());



//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('FotoEsp')); 

app.use(session({
    secret: 'a2jwejnirfkmci0j23fewrrmcowssr', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
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