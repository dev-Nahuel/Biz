import { Component } from '@angular/core';
import { ServiceUsuario } from '../../../../service/serviceUsuario/service-usuario';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../../models/usuario/usuario';

@Component({
  selector: 'app-tabla-usuario',
  imports: [CommonModule],
  templateUrl: './tabla-usuario.html',
  styleUrl: './tabla-usuario.css',
})
export class TablaUsuario {
  usuarios!: Array<Usuario>

  constructor(private serviceUsuario: ServiceUsuario){
    this.listarUsuarios();
  } 

  listarUsuarios(){
   this.usuarios = this.serviceUsuario.getUsuarios();
   console.log(this.usuarios);
   console.log("asdad")
  }



}
