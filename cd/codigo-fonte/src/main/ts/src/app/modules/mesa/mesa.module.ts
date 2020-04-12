import { NgModule } from '@angular/core';
import { MesaListComponent } from './mesa-list/mesa-list.component';
import { MesaRouting } from './mesa.routing';
import { MesaFormComponent } from './mesa-form/mesa-form.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';


@NgModule({
  declarations: [
    MesaListComponent,
    MesaFormComponent,
  ],
  imports: [
    MesaRouting,
    SharedCommonModule
  ],
  exports: [
    MesaListComponent,
    MesaFormComponent,
    MesaRouting
  ],
  entryComponents: [
    MesaFormComponent
  ],
  providers: []
})
export class MesaModule { }
