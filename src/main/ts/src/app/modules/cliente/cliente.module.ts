import { NgModule } from '@angular/core';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';
import { ClienteRouting } from './cliente.routing';


@NgModule({
  declarations: [
    ClienteListComponent,
    ClienteFormComponent,
  ],
  imports: [
    ClienteRouting,
    SharedCommonModule
  ],
  exports: [
    ClienteListComponent,
    ClienteFormComponent,
    ClienteRouting
  ],
  entryComponents: [
    ClienteFormComponent
  ],
  providers: []
})
export class ClienteModule { }
