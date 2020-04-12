import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompraListComponent } from './compra-list/compra-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const compraRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CompraListComponent,
                data: {
                    title: 'Compra',
                },
                canActivate: [AuthGuard]
            }
        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(compraRoutes)],
    exports: [RouterModule]
})
export class CompraRouting { }
