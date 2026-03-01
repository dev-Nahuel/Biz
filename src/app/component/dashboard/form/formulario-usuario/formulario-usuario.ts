import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../../models/usuario/usuario';
import { ServiceUsuario } from '../../../../service/serviceUsuario/service-usuario';
import { ServiceRol } from '../../../../service/serviceRol/service-rol';
import { Rol } from '../../../../models/rol/rol';

@Component({
  selector: 'app-formulario-usuario',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-usuario.html',
  styleUrl: './formulario-usuario.css',
})
export class FormularioUsuario {
  accion!: string;
  usuario!: Usuario;
  rols!: Array<Rol>;

  constructor(
    private router: Router,
    private serviceUsuario: ServiceUsuario,
    private activatedRoute: ActivatedRoute,
    private serviceRol: ServiceRol,
  ) {
    this.usuario = new Usuario();
    this.listarRols();
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = Number(params['id']); //esto se pone si el id es de tipo number sino se lo quita
      if (params['id'] == '0') {
        this.accion = 'new';
      } else {
        this.accion = 'update';
        this.cargarUsuario(id);//this.cargarProducto(['id']); <- esto se pone si el id es de tipo string (se lo remplaza1)
      }
    });
  }
  agregarUsuario() {
    this.serviceUsuario.UsuarioAdd(this.usuario);
    this.router.navigate(['tabla-usuario']);
  }
  actualizarUsuario() {}
  Volver() {
    this.router.navigate(['tabla-usuario']);
  }
  listarRols() {
    this.rols=this.serviceRol.getRols();
    console.log(this.rols);
  }
  cargarUsuario(id: number) {
     this.usuario = this.serviceUsuario.getUsuarioById(id)!; 
  }


}
