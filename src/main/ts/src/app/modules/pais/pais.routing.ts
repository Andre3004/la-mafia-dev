import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaisListComponent } from './pais-list/pais-list.component';

const paisRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: PaisListComponent,
                data: {
                    title: 'Paises',
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(paisRoutes)],
    exports: [RouterModule]
})
export class PaisRouting { }
