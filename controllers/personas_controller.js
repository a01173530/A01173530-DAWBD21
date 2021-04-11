
const Persona = require('../models/persona');

exports.getNuevaPersona=(request, response, next) => {

	response.render('registrar_personal');

}

exports.postNuevaPersona=(request, response, next) => {
   console.log(request.body);
   const persona = new Persona(request.body.nombre,request.body.correo,request.body.rol);
   persona.save();
   //file_system.writeFileSync('Escribe.txt', request.body.write);
   response.redirect('/Escribe');
   
}

exports.get=(request, response, next) => {
	response.setHeader('Set-Cookie', 'persona_cookie=Esto es para segiuir al personal; HttpOnly');
	console.log(request.cookies.persona_cookie);

	const personas=Persona.fetchAll();
    //response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));

    response.render('index', {personas: personas});
}