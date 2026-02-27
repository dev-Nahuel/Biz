import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProducto } from '../../../../service/serviceProducto/service-producto';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../../models/producto/producto';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css',
})
export class FormularioProducto {
  accion: string = 'new';
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
      if (params['id'] == '0') {
        this.accion = 'new';
      } else {
        this.accion = 'update';
        this.cargarProducto(params['id']);
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
  }
}
