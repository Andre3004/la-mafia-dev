import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FranquiaListComponent } from './franquia-list/franquia-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const franquiaRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: FranquiaListComponent,
                data: {
                    title: 'Franquias',
                    onlyFranquiador: true
                },
                canActivate: [AuthGuard]
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(franquiaRoutes)],
    exports: [RouterModule]
})
export class FranquiaRouting { }
