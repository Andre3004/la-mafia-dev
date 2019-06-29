import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AmbienteListComponent } from './ambiente-list/ambiente-list.component';

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
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(ambienteRoutes)],
    exports: [RouterModule]
})
export class AmbienteRouting { }
