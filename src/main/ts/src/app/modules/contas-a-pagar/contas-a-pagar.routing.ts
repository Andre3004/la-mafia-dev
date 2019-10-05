import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContasAPagarListComponent } from './contas-a-pagar-list/contas-a-pagar-list.component';

const contasAPagarRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ContasAPagarListComponent,
                data: {
                    title: 'Constas á pagar',
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(contasAPagarRoutes)],
    exports: [RouterModule]
})
export class ContasAPagarRouting { }
