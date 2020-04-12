import { CidadeFormComponent } from './cidade-form/cidade-form.component';
import { CidadeListComponent } from './cidade-list/cidade-list.component';
import { NgModule } from '@angular/core';
import { SharedCommonModule } from 'src/app/common/shared-common.module';
import { CidadeRouting } from './cidade.routing';


@NgModule({
  declarations: [
    CidadeListComponent,
    CidadeFormComponent,
  ],
  imports: [
    SharedCommonModule,
    CidadeRouting
  ],
  exports: [
    CidadeListComponent,
    CidadeFormComponent,
    CidadeRouting
  ],
  entryComponents: [
    CidadeFormComponent
  ],
  providers: []
})
export class CidadeModule { }
