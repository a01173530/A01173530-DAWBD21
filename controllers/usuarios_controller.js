const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

exports.logout = (request, response, next) => {
   request.session.destroy(() => {
        response.redirect('login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.getNewUser = (request, response, next) => {
    response.render('nuevo_usuario', {
        error: request.session.error === undefined ? false : request.session.error, 
        titulo: "Nuevo usuario",
    });
};

exports.postNewUser = (request, response, next) => {
    const usuario = new Usuario(request.body.nombre, request.body.correo, request.body.contrasena);
    request.session.error = undefined;

    usuario.save()
        .then(() => {
            request.session.ultima_persona = request.body.nombre;
            response.redirect('/Escribe');
        }).catch( err => {
            console.log(err)
            request.session.error = "Ingresa otro nombre de usuario";
            response.redirect('new');    
        });
    
 };


exports.getLogin = (request, response, next) => {
    response.render('login', {  
        error: request.session.error === undefined ? false : request.session.error, 
        titulo: "UMA",
    });
};

exports.postLogin = (request, response, next) => {
    request.session.error = undefined;

    Usuario.fetchOne(request.body.correo)
        .then(([rows, fieldData]) => {
            console.log(rows[0].contrasena);
            
            bcrypt.compare(request.body.contrasena, rows[0].contrasena)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = rows[0].correo;
                        return request.session.save(err => {
                            response.redirect('/Escribe');
                        });
                    }
                    request.session.error ='Usuario y/o contraseña incorrectos';
                    response.redirect('login');
                }).catch(err => {
                    request.session.error ='Usuario y/o contraseña incorrectos';
                    response.redirect('login');
                });

        }).catch(err => {
            console.log(err);
            request.session.error ='Usuario y/o contraseña incorrectos';
            response.redirect('login');
        });


    
    
 };