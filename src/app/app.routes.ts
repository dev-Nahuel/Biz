import { Routes } from '@angular/router';
import { Reservas } from './component/dashboard/reservas/reservas';

import { Home } from './component/home/home';
import { FormularioProducto } from './component/dashboard/form/formulario-producto/formulario-producto';
import { TablaProducto } from './component/dashboard/table/tabla-producto/tabla-producto';
import { TablaUsuario } from './component/dashboard/table/tabla-usuario/tabla-usuario';

export const routes: Routes = [
    {path: 'Home', component: Home},
    {path: 'reserva',component: Reservas},
    {path: 'producto-table', component: TablaProducto},
    {path:'tabla-usuario', component: TablaUsuario},
    {path: 'form-producto/:id', component: FormularioProducto},
    {path: '**', pathMatch: 'full', redirectTo: 'Home'}  
];
