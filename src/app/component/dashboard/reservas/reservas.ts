import { Component } from '@angular/core';
import { ServiceProducto } from '../../../service/serviceProducto/service-producto';
import { Producto as ProductoModel } from '../../../models/producto/producto';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reservas',
  imports: [CommonModule],
  templateUrl: './reservas.html',
  styleUrl: './reservas.css',
})
export class Reservas {
  contador: number = 0;
  Productos!: Array<ProductoModel>;
  constructor(private  serviceProducto: ServiceProducto) {
    console.log(this.serviceProducto.getProductos());
    this.listadoProductos();
  }

  sumarContador() {
    this.contador++;
  }
  restarContador() {
    this.contador--;
  }
  listadoProductos(){
    this.Productos = this.serviceProducto.getProductos();
  }


}
