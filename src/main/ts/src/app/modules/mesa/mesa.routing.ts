import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MesaListComponent } from './mesa-list/mesa-list.component';

const mesaRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: MesaListComponent,
                data: {
                    title: 'Mesas',
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(mesaRoutes)],
    exports: [RouterModule]
})
export class MesaRouting { }
