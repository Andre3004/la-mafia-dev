import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: {breadcrumb: 'Dashboard'} },
  { path: 'usuario', component: UsuarioListComponent, data: {breadcrumb: 'Usuários'} },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

/**
 *
 */
@NgModule({
  imports: [ routing ],
  exports: [ RouterModule ]
})
export class AppRoutingModule
{

}

export const appRoutingProviders: any[] = [];