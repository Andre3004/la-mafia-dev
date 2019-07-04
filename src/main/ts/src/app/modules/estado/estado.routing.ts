import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstadoListComponent } from './estado-list/estado-list.component';

const estadoRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: EstadoListComponent,
                data: {
                    title: 'Estados',
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(estadoRoutes)],
    exports: [RouterModule]
})
export class EstadoRouting { }
