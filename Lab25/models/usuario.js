
const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, correo, contrasena  ) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;

    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        //Dentro del método del modelo que crea el usuario
        //El segundo argumento es el número de veces que se aplica el algoritmo, actualmente 12 se considera un valor seguro
        //El código es asíncrono, por lo que hay que regresar la promesa
        return bcrypt.hash(this.contrasena, 12)
               .then( (contrasena) => {
                     return db.execute('INSERT INTO cuentas (nombre, correo, contrasena) values (?, ?, ?);',
                            [this.nombre, this.correo, contrasena]
                        );
                }).catch( err => {
                    console.log(err);
                    throw Error("Nombre de usuario duplicado");   
                });
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM cuentas')
          
        //return personas;
        
    }

    static fetchOne(correo) {
        return db.execute('SELECT * FROM cuentas WHERE correo = ?', [correo]);
    }

}