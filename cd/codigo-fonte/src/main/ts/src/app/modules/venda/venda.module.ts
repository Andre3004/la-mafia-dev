import { NgModule } from '@angular/core';
import { VendaListComponent } from './venda-list/venda-list.component';
import { VendaRouting } from './venda.routing';
import { VendaFormComponent } from './venda-form/venda-form.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';


@NgModule({
  declarations: [
    VendaListComponent,
    VendaFormComponent,
  ],
  imports: [
    VendaRouting,
    SharedCommonModule
  ],
  exports: [
    VendaListComponent,
    VendaFormComponent,
    VendaRouting
  ],
  entryComponents: [
    VendaFormComponent
  ],
  providers: []
})
export class VendaModule { }
