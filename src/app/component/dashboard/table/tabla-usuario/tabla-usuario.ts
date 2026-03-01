import { Component } from '@angular/core';
import { ServiceUsuario } from '../../../../service/serviceUsuario/service-usuario';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../../models/usuario/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-usuario',
  imports: [CommonModule],
  templateUrl: './tabla-usuario.html',
  styleUrl: './tabla-usuario.css',
})
export class TablaUsuario {
  usuarios!: Array<Usuario>;

  constructor(private serviceUsuario: ServiceUsuario, private router: Router,) {
    this.listarUsuarios();
    /*   this.productos = new Array<Producto>(); */
  }

  listarUsuarios() {
    this.usuarios = this.serviceUsuario.getUsuarios();
    console.log(this.usuarios);
  }
  nuevoUsuario() {
    this.router.navigate(['form-usuario', '0']);
  }
  editarUsuario(id: number){
    console.log('entre al boton');
    this.router.navigate(['form-usuario', id]);
  }
  eliminarUsuario(id: number){
      this.serviceUsuario.DeleteUsuario(id);
  }
}
