import { Injectable, numberAttribute } from '@angular/core';
import { Usuario } from '../../models/usuario/usuario';
import { Rol } from '../../models/rol/rol';

@Injectable({
  providedIn: 'root',
})
export class ServiceUsuario {
  usuarios: Array<Usuario>;

  constructor() {
    this.usuarios = [
      {
        _idUsuario: 1,
        nombre: 'gonzalo',
        apellido: 'gaspar',
        correo: 'gonzalo@gmail.com',
        contrasenia: 'asdad',
        usuario: 'gonzalo',
        edad: 12,
        horarioIngreso: '12:00',
        horarioSalida: '12:00',
        fechaDeContrato: new Date(),
        fechaDeFinDeContrato: new Date(),
        rol: { _id: 1, nombre: 'Admin' },
        telefono: '3424',
        img: null,
      },
      {
        _idUsuario: 2,
        nombre: 'joaquin',
        apellido: 'gaspar',
        correo: 'jota@gmail.com',
        usuario: 'jota',
        contrasenia: '234234',
        edad: 12,
        horarioIngreso: '12:00',
        horarioSalida: '12:00',
        fechaDeContrato: new Date(),
        fechaDeFinDeContrato: new Date(),
        rol: { _id: 2, nombre: 'Empleado' },
        telefono: '3424',
        img: null,
      },
    ];
  }
  getUsuarios() {
    return this.usuarios;
  }
  getUsuarioById(id: number) {
    let usuario=this.usuarios.find((usuario)=> usuario._idUsuario===id);
    return usuario;
   /*  let idE = this.productos.find((producto) => producto._idProducto === id);
 */
  }
  UsuarioAdd(usuario: Usuario) {
    usuario._idUsuario = this.usuarios.length + 1;
    this.usuarios.push(usuario);
  }
  UsuarioDelete(id: number) {
    /*  let i;
    for(i=0;this.usuarios.length;i++){
      if(id= this.usuarios[i]._idUsuario){
        this.usuarios.splice(i,1);
        break;
      }
    } */
  }
  UsuarioUpdate(usuario: Usuario) {}
  DeleteUsuario(id: number) {
    let i;
    for (i = 0; i <= this.usuarios.length; i++) {
      if (this.usuarios[i]._idUsuario == id) {
        this.usuarios.splice(i, 1);
        break;
      }
    }
  }
  UpdateUsuario(usuario: Usuario) {
    let i;
    for (i = 0; i <= this.usuarios.length; i++) {
      if (this.usuarios[i]._idUsuario === usuario._idUsuario) {
        this.usuarios[i] = usuario;
        break;
      }
    }
  }
}
