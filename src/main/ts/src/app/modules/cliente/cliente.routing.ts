import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const clienteRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ClienteListComponent,
                data: {
                    title: 'Clientes'
                },
                canActivate: [AuthGuard]
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(clienteRoutes)],
    exports: [RouterModule]
})
export class ClienteRouting { }
