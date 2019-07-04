import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';

const fornecedorRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: FornecedorListComponent,
                data: {
                    title: 'Fornecedores',
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(fornecedorRoutes)],
    exports: [RouterModule]
})
export class FornecedorRouting { }
