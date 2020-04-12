import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AmbienteListComponent } from './ambiente-list/ambiente-list.component';
import { AuthGuard } from 'src/app/common/autenticacao/auth-guard.service';

const ambienteRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: AmbienteListComponent,
                data      : {
                    title : 'Ambientes',
                }, 
                canActivate: [AuthGuard]
            }
        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(ambienteRoutes)],
    exports: [RouterModule]
})
export class AmbienteRouting { }
