import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const usuarioRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: UsuarioListComponent,
                data: {
                    title: 'Usuários',
                    onlyFranquiador: true
                },
                canActivate: [AuthGuard]
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(usuarioRoutes)],
    exports: [RouterModule]
})
export class UsuarioRouting { }
