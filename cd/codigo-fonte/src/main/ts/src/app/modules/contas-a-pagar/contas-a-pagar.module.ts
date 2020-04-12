import { NgModule } from '@angular/core';
import { ContasAPagarListComponent } from './contas-a-pagar-list/contas-a-pagar-list.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';
import { ContasAPagarRouting } from './contas-a-pagar.routing';
import { ContasAPagarFormComponent } from './contas-a-pagar-form/contas-a-pagar-form.component';
import { DialogRealizarPagamentoComponent } from './contas-a-pagar-form/dialog-realizar-pagamento/dialog-realizar-pagamento.component';


@NgModule({
  declarations: [
    ContasAPagarListComponent,
    ContasAPagarFormComponent,
    DialogRealizarPagamentoComponent
  ],
  imports: [
    ContasAPagarRouting,
    SharedCommonModule
  ],
  exports: [
    ContasAPagarListComponent,
    ContasAPagarFormComponent,
    ContasAPagarRouting
  ],
  entryComponents: [
    ContasAPagarFormComponent,
    DialogRealizarPagamentoComponent
  ],
  providers: []
})
export class ContasAPagarModule { }
