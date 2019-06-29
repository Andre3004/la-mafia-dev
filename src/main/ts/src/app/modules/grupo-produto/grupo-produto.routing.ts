import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GrupoProdutoListComponent } from './grupo-produto-list/grupo-produto-list.component';

const grupoProdutoRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: GrupoProdutoListComponent,
                data: {
                    title: 'Grupos de produtos',
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(grupoProdutoRoutes)],
    exports: [RouterModule]
})
export class GrupoProdutoRouting { }
