
const db = require('../util/database');

module.exports = class Persona {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(NombreEsp, FotoEsp) {
        this.NombreEsp = NombreEsp;
        this.FotoEsp=FotoEsp;

    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {

      return db.execute('INSERT INTO Especie (NombreEsp,FotoEsp) VALUES (?,?)',
        [this.NombreEsp,this.FotoEsp]
        );
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM Especie')
          
        //return personas;
        
    }

    static fetchOne(EspID) {
        return db.execute('SELECT * FROM Especie WHERE EspID = ?', [EspID]);
    }

    static delete(EspID) {
        return db.execute('DELETE FROM Especie WHERE EspID = ?', [EspID]);
    }

}