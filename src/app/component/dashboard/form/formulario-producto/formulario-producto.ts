import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProducto } from '../../../../service/serviceProducto/service-producto';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../../models/producto/producto';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule,CommonModule],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css',
})
export class FormularioProducto {
  accion!: string;
  producto!: Producto;


  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceProducto: ServiceProducto,
    private router: Router,
  ) {
    this.producto = new Producto();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = Number(params['id']); //esto se pone si el id es de tipo number sino se lo quita 
      if (params['id'] == '0') {
        this.accion = 'new';
      } else {
        this.accion = 'update';
        this.cargarProducto(id);//this.cargarProducto(['id']); <- esto se pone si el id es de tipo string (se lo remplaza1)
      }
    });
  }

  agregarProducto() {
    this.serviceProducto.addProducto(this.producto);
    this.router.navigate(['tabla-producto']);
  }
  Volver() {
     this.router.navigate(['tabla-producto']);
  }
  cargarProducto(id:number){
    this.producto = this.serviceProducto.getProductoById(id)!;
    console.log(this.producto);
  }
  actualizarProducto(){
      this.serviceProducto.updateProducto(this.producto);
      this.router.navigate(['tabla-producto']);
  }
}
