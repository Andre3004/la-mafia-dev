import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const fornecedorRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: FornecedorListComponent,
                data: {
                    title: 'Fornecedores',
                    onlyFranquiador: true
                },
                canActivate: [AuthGuard]
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(fornecedorRoutes)],
    exports: [RouterModule]
})
export class FornecedorRouting { }
