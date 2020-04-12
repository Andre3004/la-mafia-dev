import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstadoListComponent } from './estado-list/estado-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const estadoRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: EstadoListComponent,
                data: {
                    title: 'Estados',
                    onlyFranquiador: true
                },
                canActivate: [AuthGuard],
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(estadoRoutes)],
    exports: [RouterModule]
})
export class EstadoRouting { }
