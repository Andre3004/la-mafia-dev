import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MesaListComponent } from './mesa-list/mesa-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const mesaRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: MesaListComponent,
                data: {
                    title: 'Mesas',
                },
                canActivate: [AuthGuard]
            }
        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(mesaRoutes)],
    exports: [RouterModule]
})
export class MesaRouting { }
