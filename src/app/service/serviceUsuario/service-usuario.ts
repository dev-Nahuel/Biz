import { Injectable, numberAttribute } from '@angular/core';
import { Usuario } from '../../models/usuario/usuario';
import { Rol } from '../../models/rol/rol';

@Injectable({
  providedIn: 'root',
})
export class ServiceUsuario {
  usuarios : Array<Usuario>;
  
  constructor(){
    this.usuarios = [
     {
      _idUsuario: 1,
      nombre: "gonzalo",
      apellido: "gaspar",
      correo: "gonzalo@gmail.com",
      contrasenia: "asdad",
      edad: 12,
      horarioIngreso: "12:00",
      horarioSalida: "12:00",
      fechaDeContrato: new Date(),
      fechaDeFinDeContrato: new Date(),
      rol: { _id: 1, nombre: "Admin", permisos: "all" },
      telefono: "3424",
      img: null,
     },
     {
      _idUsuario: 2,
      nombre: "joaquin",
      apellido: "gaspar",
      correo: "jota@gmail.com",
      contrasenia: "234234",
      edad: 12,
      horarioIngreso: "12:00",
      horarioSalida: "12:00",
      fechaDeContrato: new Date(),
      fechaDeFinDeContrato: new Date(),
      rol: { _id: 2, nombre: "Empleado", permisos: "limited" },
      telefono: "3424",
      img: null,
     }
    ] 

  }
  getUsuarios(){
    return this.usuarios;
  }
  getUsuarioById(id: number){
       
  }
  UsuarioAdd(usuario: Usuario){
    this.usuarios.push(usuario);
  }
  UsuarioDelete(id: number){
    let i;
    for(i=0;this.usuarios.length;i++){
      if(id= this.usuarios[i]._idUsuario){
        this.usuarios.splice(i,1);
        break;
      }
    }
    /*  this.usuarios.forEach(() => {
        if(){

        }
    }); */

  }
  UsuarioUpdate(usuario: Usuario){
    
  }

  




  
}
