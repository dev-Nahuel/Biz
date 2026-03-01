import { Routes } from '@angular/router';
import { Reservas } from './component/dashboard/reservas/reservas';

import { Home } from './component/home/home';
import { FormularioProducto } from './component/dashboard/form/formulario-producto/formulario-producto';
import { TablaProducto } from './component/dashboard/table/tabla-producto/tabla-producto';
import { TablaUsuario } from './component/dashboard/table/tabla-usuario/tabla-usuario';
import { FormularioUsuario } from './component/dashboard/form/formulario-usuario/formulario-usuario';

export const routes: Routes = [
    {path: 'Home', component: Home},
    {path: 'reserva',component: Reservas},
    {path: 'tabla-producto', component: TablaProducto},
    {path: 'tabla-usuario', component: TablaUsuario},
    {path: 'form-producto/:id', component: FormularioProducto},
    {path: 'form-usuario/:id', component: FormularioUsuario},
    {path: '**', pathMatch: 'full', redirectTo: 'Home'}  
];
