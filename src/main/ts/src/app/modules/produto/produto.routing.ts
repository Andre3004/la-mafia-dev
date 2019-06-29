import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoListComponent } from './produto-list/produto-list.component';

const produtoRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ProdutoListComponent,
                data: {
                    title: 'Produtos',
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(produtoRoutes)],
    exports: [RouterModule]
})
export class ProdutoRouting { }
