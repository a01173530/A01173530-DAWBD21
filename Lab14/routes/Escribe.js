const file_system=require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');

const personas = [
        {
           nombre: 'Mark Otto',
           correo: 'MarkOtto@hotmail.com',
           rol: 'Admin'
        },
        {
           nombre: 'Toro',
           correo: 'Toro@hotmail.com',
           rol: 'Colaborador'
        }
    ];

router.get('/Escribe', (request, response, next) => {

	response.render('registrar_personal');

});

router.post('/Escribe', (request, response, next) => {
   console.log(request.body);
   personas.push({
   	       nombre: request.body.write,
           correo: 'generico@hotmail.com',
           rol: 'Ninguno'

   });
   file_system.writeFileSync('Escribe.txt', request.body.write);
   response.redirect('/Escribe');

   
});

router.get('/', (request, response, next) => {
    //response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));

    response.render('index', {personas: personas});
});


module.exports = router;
