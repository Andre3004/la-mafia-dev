import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GrupoProdutoListComponent } from './grupo-produto-list/grupo-produto-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const grupoProdutoRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: GrupoProdutoListComponent,
                data: {
                    title: 'Grupos de produtos',
                    onlyFranquiador: true
                },
                canActivate: [AuthGuard]
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(grupoProdutoRoutes)],
    exports: [RouterModule]
})
export class GrupoProdutoRouting { }
