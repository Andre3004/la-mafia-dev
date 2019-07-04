import { PaisFormComponent } from './pais-form/pais-form.component';
import { PaisListComponent } from './pais-list/pais-list.component';
import { NgModule } from '@angular/core';
import { SharedCommonModule } from 'src/app/common/shared-common.module';
import { PaisRouting } from './pais.routing';


@NgModule({
  declarations: [
    PaisListComponent,
    PaisFormComponent,
  ],
  imports: [
    SharedCommonModule,
    PaisRouting
  ],
  exports: [
    PaisListComponent,
    PaisFormComponent,
    PaisRouting
  ],
  entryComponents: [
    PaisFormComponent
  ],
  providers: []
})
export class PaisModule { }
