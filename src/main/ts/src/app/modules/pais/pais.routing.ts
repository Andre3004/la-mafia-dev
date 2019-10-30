import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaisListComponent } from './pais-list/pais-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const paisRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: PaisListComponent,
                data: {
                    title: 'Paises',
                    onlyFranquiador: true
                },
                canActivate: [AuthGuard]
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(paisRoutes)],
    exports: [RouterModule]
})
export class PaisRouting { }
