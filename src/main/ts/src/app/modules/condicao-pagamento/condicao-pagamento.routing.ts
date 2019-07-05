import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CondicaoPagamentoListComponent } from './condicao-pagamento-list/condicao-pagamento-list.component';

const condicaoPagamentoRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CondicaoPagamentoListComponent,
                data: {
                    title: 'Condições de pagamentos',
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(condicaoPagamentoRoutes)],
    exports: [RouterModule]
})
export class CondicaoPagamentoRouting { }
