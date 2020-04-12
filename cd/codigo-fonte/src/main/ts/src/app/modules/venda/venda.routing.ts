import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendaListComponent } from './venda-list/venda-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const vendaRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: VendaListComponent,
                data: {
                    title: 'Venda',
                },
                canActivate: [AuthGuard]
            }
        ],    
    },

];

@NgModule({
    imports: [RouterModule.forChild(vendaRoutes)],
    exports: [RouterModule]
})
export class VendaRouting { }
