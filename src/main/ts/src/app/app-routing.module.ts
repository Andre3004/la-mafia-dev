import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuario',
    loadChildren : () => import('../app/modules/usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path: 'franquia',
    loadChildren : () => import('../app/modules/franquia/franquia.module').then(m => m.FranquiaModule)
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });


@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any[] = [];
