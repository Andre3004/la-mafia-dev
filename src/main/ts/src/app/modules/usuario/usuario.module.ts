import { NgModule } from '@angular/core';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioRouting } from './usuario.routing';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';


@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioFormComponent,
  ],
  imports: [
    UsuarioRouting,
    SharedCommonModule
  ],
  exports: [
    UsuarioListComponent,
    UsuarioFormComponent,
    UsuarioRouting
  ],
  entryComponents: [
    UsuarioFormComponent
  ],
  providers: []
})
export class UsuarioModule { }
