import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompraListComponent } from './compra-list/compra-list.component';

const compraRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CompraListComponent,
                data: {
                    title: 'Compra',
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(compraRoutes)],
    exports: [RouterModule]
})
export class CompraRouting { }
