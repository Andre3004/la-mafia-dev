import { NgModule } from '@angular/core';
import { CondicaoPagamentoListComponent } from './condicao-pagamento-list/condicao-pagamento-list.component';
import { CondicaoPagamentoRouting } from './condicao-pagamento.routing';
import { CondicaoPagamentoFormComponent } from './condicao-pagamento-form/condicao-pagamento-form.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';


@NgModule({
  declarations: [
    CondicaoPagamentoListComponent,
    CondicaoPagamentoFormComponent,
  ],
  imports: [
    CondicaoPagamentoRouting,
    SharedCommonModule
  ],
  exports: [
    CondicaoPagamentoListComponent,
    CondicaoPagamentoFormComponent,
    CondicaoPagamentoRouting
  ],
  entryComponents: [
    CondicaoPagamentoFormComponent
  ],
  providers: []
})
export class CondicaoPagamentoModule { }
