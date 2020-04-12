import { FormaPagamentoFormComponent } from './forma-pagamento-form/forma-pagamento-form.component';
import { FormaPagamentoListComponent } from './forma-pagamento-list/forma-pagamento-list.component';
import { NgModule } from '@angular/core';
import { SharedCommonModule } from 'src/app/common/shared-common.module';
import { FormaPagamentoRouting } from './forma-pagamento.routing';


@NgModule({
  declarations: [
    FormaPagamentoListComponent,
    FormaPagamentoFormComponent,
  ],
  imports: [
    SharedCommonModule,
    FormaPagamentoRouting
  ],
  exports: [
    FormaPagamentoListComponent,
    FormaPagamentoFormComponent,
    FormaPagamentoRouting
  ],
  entryComponents: [
    FormaPagamentoFormComponent
  ],
  providers: []
})
export class FormaPagamentoModule { }
