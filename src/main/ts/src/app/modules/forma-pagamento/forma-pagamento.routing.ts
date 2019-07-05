import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormaPagamentoListComponent } from './forma-pagamento-list/forma-pagamento-list.component';

const formaPagamentoRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: FormaPagamentoListComponent,
                data: {
                    title: 'Forma de pagamento',
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(formaPagamentoRoutes)],
    exports: [RouterModule]
})
export class FormaPagamentoRouting { }
