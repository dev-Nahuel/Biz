import { Injectable } from '@angular/core';
import { Producto } from '../../models/producto/producto';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ServiceProducto {
  productos: Array<Producto>;
  constructor() {
    this.productos = [
      {
        _idProducto: 1,
        nombre: 'Cerveza',
        descripcion: 'Descripción del producto 1',
        precio: 2100,
        estado: true,
        cantidadStock: 100,
        imagen: './cerveza.JPG',
        fechaVencimiento: new Date('2024-12-31'),
      },
      {
        _idProducto: 2,
        nombre: 'Vino Tinto',
        descripcion: 'Descripción del producto 1',
        precio: 3000,
        cantidadStock: 10,
        estado: true,
        imagen: 'VinoTinto.JPG',
        fechaVencimiento: new Date('2024-12-31'),
      },
      {
        _idProducto: 3,
        nombre: 'Cocal Cola',
        descripcion: 'Descripción del producto 1',
        precio: 2500,
        estado: true,
        cantidadStock: 100,
        imagen: '',
        fechaVencimiento: new Date('2024-12-31'),
      },
      {
        _idProducto: 4,
        nombre: 'Pepsi',
        descripcion: 'Descripción del producto 1',
        precio: 2500,
        estado: true,
        cantidadStock: 90,
        imagen: '',
        fechaVencimiento: new Date('2024-12-31'),
      },
      {
        _idProducto: 5,
        nombre: 'Agua Mineral',
        descripcion: 'Descripción del producto 1',
        precio: 2500,
        estado: false,
        cantidadStock: 450,
        imagen: '',
        fechaVencimiento: new Date('2024-12-31'),
      },
    ]}
    getProductos() {
      return this.productos;
    }
    getProductoById(id: number) {
      let idE = this.productos.find((producto) => producto._idProducto === id);
        return idE;
    }
    addProducto(pruducto: Producto) {
      this.productos.push(pruducto);
    }
    deleteProducto(id: number) {
      
    }
    
    updateProducto(producto: Producto) {
      
    }
}
