import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceProducto } from '../../../../service/serviceProducto/service-producto';
import { Router } from '@angular/router';
import { Producto as ProductoModel } from '../../../../models/producto/producto';

@Component({
  selector: 'app-tabla-producto',
  imports: [CommonModule],
  templateUrl: './tabla-producto.html',
  styleUrl: './tabla-producto.css',
})
export class TablaProducto {
  productos!: Array<ProductoModel>;
  constructor(
    private serviceProducto: ServiceProducto,
    private router: Router,
  ) {
    this.listadoProductos();
    /*   this.productos = new Array<Producto>(); */
  }

  listadoProductos() {
    this.productos = this.serviceProducto.getProductos();
    console.log(this.productos);
  }
  nuevoProducto() {
    this.router.navigate(['form-producto', '0']);
  }
  editarProducto(id: number) {
    this.router.navigate(['form-producto', id]);
  }
  eliminarProducto(id: number){
      this.serviceProducto.deleteProducto(id);
      this.listadoProductos();
  }



}
