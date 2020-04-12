import { NgModule } from '@angular/core';
import { CompraListComponent } from './compra-list/compra-list.component';
import { CompraRouting } from './compra.routing';
import { CompraFormComponent } from './compra-form/compra-form.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';


@NgModule({
  declarations: [
    CompraListComponent,
    CompraFormComponent,
  ],
  imports: [
    CompraRouting,
    SharedCommonModule
  ],
  exports: [
    CompraListComponent,
    CompraFormComponent,
    CompraRouting
  ],
  entryComponents: [
    CompraFormComponent
  ],
  providers: []
})
export class CompraModule { }
