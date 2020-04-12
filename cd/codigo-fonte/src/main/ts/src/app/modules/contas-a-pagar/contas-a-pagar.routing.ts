import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContasAPagarListComponent } from './contas-a-pagar-list/contas-a-pagar-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const contasAPagarRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ContasAPagarListComponent,
                data: {
                    title: 'Constas á pagar',
                },
                canActivate: [AuthGuard]
            }
        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(contasAPagarRoutes)],
    exports: [RouterModule]
})
export class ContasAPagarRouting { }
