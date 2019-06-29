import { NgModule } from '@angular/core';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoRouting } from './produto.routing';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';


@NgModule({
  declarations: [
    ProdutoListComponent,
    ProdutoFormComponent,
  ],
  imports: [
    ProdutoRouting,
    SharedCommonModule
  ],
  exports: [
    ProdutoListComponent,
    ProdutoFormComponent,
    ProdutoRouting
  ],
  entryComponents: [
    ProdutoFormComponent
  ],
  providers: []
})
export class ProdutoModule { }
