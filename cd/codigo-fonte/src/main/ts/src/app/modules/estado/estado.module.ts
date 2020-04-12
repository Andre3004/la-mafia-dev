import { EstadoFormComponent } from './estado-form/estado-form.component';
import { EstadoListComponent } from './estado-list/estado-list.component';
import { NgModule } from '@angular/core';
import { SharedCommonModule } from 'src/app/common/shared-common.module';
import { EstadoRouting } from './estado.routing';


@NgModule({
  declarations: [
    EstadoListComponent,
    EstadoFormComponent,
  ],
  imports: [
    SharedCommonModule,
    EstadoRouting
  ],
  exports: [
    EstadoListComponent,
    EstadoFormComponent,
    EstadoRouting
  ],
  entryComponents: [
    EstadoFormComponent
  ],
  providers: []
})
export class EstadoModule { }
