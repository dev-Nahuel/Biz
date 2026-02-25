import { Rol } from "../rol/rol";

export class Usuario {
  _idUsuario!: number;
  nombre!: string;
  apellido!: string;
  correo!: string;
  contrasenia!: string;
  edad!: number;
  horarioIngreso!: string;
  horarioSalida!: string;
  fechaDeContrato!: Date;
  fechaDeFinDeContrato!: Date;
  rol!: Rol;
  telefono!: string;
  img!: any;
  constructor() {}
}
