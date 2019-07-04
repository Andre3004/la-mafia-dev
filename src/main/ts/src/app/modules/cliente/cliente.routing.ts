import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteListComponent } from './cliente-list/cliente-list.component';

const clienteRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ClienteListComponent,
                data: {
                    title: 'Clientes',
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(clienteRoutes)],
    exports: [RouterModule]
})
export class ClienteRouting { }
