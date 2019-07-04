import { NgModule } from '@angular/core';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';
import { FornecedorRouting } from './fornecedor.routing';


@NgModule({
  declarations: [
    FornecedorListComponent,
    FornecedorFormComponent,
  ],
  imports: [
    FornecedorRouting,
    SharedCommonModule
  ],
  exports: [
    FornecedorListComponent,
    FornecedorFormComponent,
    FornecedorRouting
  ],
  entryComponents: [
    FornecedorFormComponent
  ],
  providers: []
})
export class FornecedorModule { }
