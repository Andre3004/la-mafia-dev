import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormaPagamentoListComponent } from './forma-pagamento-list/forma-pagamento-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const formaPagamentoRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: FormaPagamentoListComponent,
                data: {
                    title: 'Forma de pagamento',
                },
                canActivate: [AuthGuard]
            }
        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(formaPagamentoRoutes)],
    exports: [RouterModule]
})
export class FormaPagamentoRouting { }
