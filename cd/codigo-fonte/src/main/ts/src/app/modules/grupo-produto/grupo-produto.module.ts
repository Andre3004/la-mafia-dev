import { NgModule } from '@angular/core';
import { GrupoProdutoListComponent } from './grupo-produto-list/grupo-produto-list.component';
import { GrupoProdutoRouting } from './grupo-produto.routing';
import { GrupoProdutoFormComponent } from './grupo-produto-form/grupo-produto-form.component';
import { SharedCommonModule } from 'src/app/common/shared-common.module';


@NgModule({
  declarations: [
    GrupoProdutoListComponent,
    GrupoProdutoFormComponent,
  ],
  imports: [
    GrupoProdutoRouting,
    SharedCommonModule
  ],
  exports: [
    GrupoProdutoListComponent,
    GrupoProdutoFormComponent,
    GrupoProdutoRouting
  ],
  entryComponents: [
    GrupoProdutoFormComponent
  ],
  providers: []
})
export class GrupoProdutoModule { }
