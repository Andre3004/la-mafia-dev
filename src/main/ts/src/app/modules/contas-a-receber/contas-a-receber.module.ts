import { NgModule } from '@angular/core';
import { ContasAReceberListComponent } from './contas-a-receber-list/contas-a-receber-list.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';
import { ContasAReceberRouting } from './contas-a-receber.routing';
import { ContasAReceberFormComponent } from './contas-a-receber-form/contas-a-receber-form.component';
import { DialogRealizarRecebimentoComponent } from './contas-a-receber-form/dialog-realizar-recebimento/dialog-realizar-recebimento.component';


@NgModule({
  declarations: [
    ContasAReceberListComponent,
    ContasAReceberFormComponent,
    DialogRealizarRecebimentoComponent
  ],
  imports: [
    ContasAReceberRouting,
    SharedCommonModule
  ],
  exports: [
    ContasAReceberListComponent,
    ContasAReceberFormComponent,
    ContasAReceberRouting
  ],
  entryComponents: [
    ContasAReceberFormComponent,
    DialogRealizarRecebimentoComponent
  ],
  providers: []
})
export class ContasAReceberModule { }
