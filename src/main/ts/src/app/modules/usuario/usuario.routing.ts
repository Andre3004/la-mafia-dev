import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

const usuarioRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: UsuarioListComponent
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(usuarioRoutes)],
    exports: [RouterModule]
})
export class UsuarioRouting { }
