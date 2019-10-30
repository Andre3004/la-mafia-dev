import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContasAReceberListComponent } from './contas-a-receber-list/contas-a-receber-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const contasAReceberRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ContasAReceberListComponent,
                data: {
                    title: 'Constas á receber',
                },
                canActivate: [AuthGuard]
            }
        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(contasAReceberRoutes)],
    exports: [RouterModule]
})
export class ContasAReceberRouting { }
