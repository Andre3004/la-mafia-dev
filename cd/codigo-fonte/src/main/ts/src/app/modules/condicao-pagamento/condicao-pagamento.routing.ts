import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CondicaoPagamentoListComponent } from './condicao-pagamento-list/condicao-pagamento-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const condicaoPagamentoRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CondicaoPagamentoListComponent,
                data: {
                    title: 'Condições de pagamentos',
                },
                canActivate: [AuthGuard]
            }
        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(condicaoPagamentoRoutes)],
    exports: [RouterModule]
})
export class CondicaoPagamentoRouting { }
