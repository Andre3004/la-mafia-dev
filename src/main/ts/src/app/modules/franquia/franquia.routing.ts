import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FranquiaListComponent } from './franquia-list/franquia-list.component';

const franquiaRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: FranquiaListComponent,
                data: {
                    title: 'Franquias',
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(franquiaRoutes)],
    exports: [RouterModule]
})
export class FranquiaRouting { }
