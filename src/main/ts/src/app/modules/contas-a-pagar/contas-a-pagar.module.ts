import { NgModule } from '@angular/core';
import { ContasAPagarListComponent } from './contas-a-pagar-list/contas-a-pagar-list.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';
import { ContasAPagarRouting } from './contas-a-pagar.routing';


@NgModule({
  declarations: [
    ContasAPagarListComponent,
  ],
  imports: [
    ContasAPagarRouting,
    SharedCommonModule
  ],
  exports: [
    ContasAPagarListComponent,
    ContasAPagarRouting
  ],
  entryComponents: [
  ],
  providers: []
})
export class ContasAPagarModule { }
