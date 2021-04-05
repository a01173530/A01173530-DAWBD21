const file_system=require('fs');
const express = require('express');
const router = express.Router();

router.get('/Escribe', (request, response, next) => {
    response.send('<form action="Escribe" method="POST"><input type="text" name="write"><br><input type="submit" name="enviar" value="Escribir"></form>'); 
});

router.post('/Escribe', (request, response, next) => {
   console.log(request.body);
   file_system.writeFileSync('Escribe.txt', request.body.write);
   response.send('Se escribio ' + request.body.write + ' en el archivo: Escribe.txt'); 
});

module.exports = router;
