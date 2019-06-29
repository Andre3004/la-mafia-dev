import { NgModule } from '@angular/core';
import { AmbienteListComponent } from './ambiente-list/ambiente-list.component';
import { AmbienteRouting } from './ambiente.routing';
import { AmbienteFormComponent } from './ambiente-form/ambiente-form.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';

@NgModule({
  declarations: [
    AmbienteListComponent,
    AmbienteFormComponent,
  ],
  imports: [
    AmbienteRouting,
    SharedCommonModule
  ],
  exports: [
    AmbienteListComponent,
    AmbienteFormComponent,
    AmbienteRouting
  ],
  entryComponents: [
    AmbienteFormComponent
  ],
  providers: []
})
export class AmbienteModule { }
