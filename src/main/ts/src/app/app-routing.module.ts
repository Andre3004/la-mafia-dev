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
  },
  {
    path: 'grupo-produto',
    loadChildren : () => import('../app/modules/grupo-produto/grupo-produto.module').then(m => m.GrupoProdutoModule)
  },
  {
    path: 'mesa',
    loadChildren : () => import('../app/modules/mesa/mesa.module').then(m => m.MesaModule)
  },
  {
    path: 'produto',
    loadChildren : () => import('../app/modules/produto/produto.module').then(m => m.ProdutoModule)
  },
  {
    path: 'ambiente',
    loadChildren : () => import('../app/modules/ambiente/ambiente.module').then(m => m.AmbienteModule)
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });


@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any[] = [];
