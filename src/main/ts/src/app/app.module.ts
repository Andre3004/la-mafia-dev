import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedCommonModule } from './common/shared-common.module';
import { BrowserModule } from '@angular/platform-browser';
import { UsuarioModule } from './modules/usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedCommonModule,
    UsuarioModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
