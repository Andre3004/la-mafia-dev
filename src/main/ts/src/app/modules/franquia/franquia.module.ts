import { NgModule } from '@angular/core';
import { FranquiaListComponent } from './franquia-list/franquia-list.component';
import { FranquiaRouting } from './franquia.routing';
import { FranquiaFormComponent } from './franquia-form/franquia-form.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';


@NgModule({
  declarations: [
    FranquiaListComponent,
    FranquiaFormComponent,
  ],
  imports: [
    FranquiaRouting,
    SharedCommonModule
  ],
  exports: [
    FranquiaListComponent,
    FranquiaFormComponent,
    FranquiaRouting
  ],
  entryComponents: [
    FranquiaFormComponent
  ],
  providers: []
})
export class FranquiaModule { }
