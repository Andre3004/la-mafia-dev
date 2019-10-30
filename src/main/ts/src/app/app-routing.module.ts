import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/autenticacao/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/produto/produto.module').then(m => m.ProdutoModule)
  },
  {
    path: 'compra',
    loadChildren: () => import('../app/modules/compra/compra.module').then(m => m.CompraModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('../app/modules/usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path: 'franquia',
    loadChildren: () => import('../app/modules/franquia/franquia.module').then(m => m.FranquiaModule)
  },
  {
    path: 'grupo-produto',
    loadChildren: () => import('../app/modules/grupo-produto/grupo-produto.module').then(m => m.GrupoProdutoModule)
  },
  {
    path: 'mesa',
    loadChildren: () => import('../app/modules/mesa/mesa.module').then(m => m.MesaModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('../app/modules/produto/produto.module').then(m => m.ProdutoModule)
  },
  {
    path: 'ambiente',
    loadChildren: () => import('../app/modules/ambiente/ambiente.module').then(m => m.AmbienteModule),
  },
  {
    path: 'cliente',
    loadChildren: () => import('../app/modules/cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'fornecedor',
    loadChildren: () => import('../app/modules/fornecedor/fornecedor.module').then(m => m.FornecedorModule)
  },
  {
    path: 'cidade',
    loadChildren: () => import('../app/modules/cidade/cidade.module').then(m => m.CidadeModule)
  },
  {
    path: 'estado',
    loadChildren: () => import('../app/modules/estado/estado.module').then(m => m.EstadoModule)
  },
  {
    path: 'pais',
    loadChildren: () => import('../app/modules/pais/pais.module').then(m => m.PaisModule)
  },
  {
    path: 'condicao-pagamento',
    loadChildren: () => import('../app/modules/condicao-pagamento/condicao-pagamento.module').then(m => m.CondicaoPagamentoModule)
  },
  {
    path: 'forma-pagamento',
    loadChildren: () => import('../app/modules/forma-pagamento/forma-pagamento.module').then(m => m.FormaPagamentoModule)
  },
  {
    path: 'contas-a-pagar',
    loadChildren: () => import('../app/modules/contas-a-pagar/contas-a-pagar.module').then(m => m.ContasAPagarModule)
  },
  {
    path: 'contas-a-receber',
    loadChildren: () => import('../app/modules/contas-a-receber/contas-a-receber.module').then(m => m.ContasAReceberModule)
  },
  {
    path: 'venda',
    loadChildren: () => import('../app/modules/venda/venda.module').then(m => m.VendaModule)
  }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });


@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any[] = [];
