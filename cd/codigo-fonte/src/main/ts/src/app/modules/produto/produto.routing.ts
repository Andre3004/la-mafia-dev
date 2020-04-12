import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoListComponent } from './produto-list/produto-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const produtoRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ProdutoListComponent,
                data: {
                    title: 'Produtos',
                    ambos: true
                },
                canActivate: [AuthGuard]
            }
        ],        
        
    },

];

@NgModule({
    imports: [RouterModule.forChild(produtoRoutes)],
    exports: [RouterModule]
})
export class ProdutoRouting { }
