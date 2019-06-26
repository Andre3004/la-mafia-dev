import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { SharedCommonModule } from './common/shared-common.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { FranquiaModule } from './modules/franquia/franquia.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedCommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    UsuarioModule
  ],
  providers: [   
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
