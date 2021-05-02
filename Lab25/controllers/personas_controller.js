
const Persona = require('../models/persona');

exports.getNuevaPersona=(request, response, next) => {

	response.render('registrar_personal');

}

exports.postNuevaPersona=(request, response, next) => {
   console.log(request.body);
   console.log(request.file);
   const file_path = request.file.path;
   
   const persona = new Persona(request.body.NombreEsp, file_path);
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


exports.postEspecie = (request, response, next) => {

    console.log("Petición asíncrona reciba");
    console.log(request.body);
    console.log(request.body.EspID);
    

    Persona.delete(request.body.EspID)
        .then(() => {
             Persona.fetchAll()
                .then(([rows, fieldData]) => {
                    return response.status(200).json({personas: rows});
                })
                .catch(err => {
                    console.log(err)
                });
            //return response.status(200).json({message: "Especie eliminada"});
        }).catch((err) => {
            console.log(err);
            return response.status(500).json({message: "Internal Server Error"});
        });
    //response.status(200).json({message: "Respuesta asíncrona"});
}