import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CidadeListComponent } from './cidade-list/cidade-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const cidadeRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CidadeListComponent,
                data: {
                    title: 'Cidades',
                    onlyFranquiador: true
                },
                canActivate: [AuthGuard]
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(cidadeRoutes)],
    exports: [RouterModule]
})
export class CidadeRouting { }
