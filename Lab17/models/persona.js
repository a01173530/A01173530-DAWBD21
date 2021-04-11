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

module.exports = class Persona {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre,correo,rol) {
        this.nombre = nombre;
        this.correo = correo;
        this.rol = rol;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        personas.push(this);
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return personas;
        
    }

}