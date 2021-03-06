
const Persona = require('../models/persona');

exports.getNuevaPersona=(request, response, next) => {

	response.render('registrar_personal');

}

exports.postNuevaPersona=(request, response, next) => {
   console.log(request.body);
   const persona = new Persona(request.body.NombreEsp);
   persona.save()
      .then(() => {
        request.session.ultima_persona = request.body.NombreEsp;
        response.redirect('/Escribe');
      }).catch( err => {
           console.log(err);
           response.redirect('/Escribe/Escribe');    
      });
}

exports.get=(request, response, next) => {
	response.setHeader('Set-Cookie', 'persona_cookie=Esto es para segiuir al personal; HttpOnly');
	console.log(request.cookies.persona_cookie);

	Persona.fetchAll()
          .then(([rows, fieldData]) => {
             console.log(rows);

             response.render('index', {
              personas: rows,
              ultima_persona: request.session.ultima_persona === undefined ? "No se ha registrado a nadie" : request.session.ultima_persona
            });
          })
          .catch(err => {
                 console.log(err);
          });


    
}

exports.getespecie=(request, response, next) => {
  const EspID = request.params.EspID;

  Persona.fetchOne()
          .then(([rows, fieldData]) => {
             console.log(rows);

             response.render('index', {
              personas: rows,
              ultima_persona: request.session.ultima_persona === undefined ? "No se ha registrado a nadie" : request.session.ultima_persona
            });
          })
          .catch(err => {
                 console.log(err);
          });


    
}