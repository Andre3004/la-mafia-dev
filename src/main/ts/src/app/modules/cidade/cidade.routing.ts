import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CidadeListComponent } from './cidade-list/cidade-list.component';

const cidadeRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CidadeListComponent,
                data: {
                    title: 'Cidades',
                }
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(cidadeRoutes)],
    exports: [RouterModule]
})
export class CidadeRouting { }
