import { Producto } from "../producto/producto";
import { Usuario } from "../usuario/usuario";

export class Reserva {
    _idReserva!: number;
    usuario!: Usuario;
    fechaReserva!: Date;
    horaReserva!: string;
    producto!: Array<Producto>;
    estado!: boolean;
    total!: number;
    constructor() {}
}
