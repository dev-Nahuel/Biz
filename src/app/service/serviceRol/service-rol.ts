import { Injectable } from '@angular/core';
import { Rol } from '../../models/rol/rol';

@Injectable({
  providedIn: 'root',
})
export class ServiceRol {
  rols: Array<Rol>;
  constructor(){
    this.rols = [
      { _id: 1, nombre: "Admin" },
      {_id: 2, nombre: "Gerente"},
      { _id: 3, nombre: "Empleado"},
      { _id: 4, nombre: "Delivery"}
    ]
  }
  getRols(){
    return this.rols;
  }
  getRolById(id: number){
    
  }
  RolAdd(rol: Rol){
    rol._id = this.rols.length + 1;
    this.rols.push(rol);
  }


}
