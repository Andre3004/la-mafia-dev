import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import
{
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
//===============================COVALENT MODULES================================
import
{
  CovalentChipsModule,
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentFileModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMessageModule,
  CovalentPagingModule,
  CovalentStepsModule,
  TdDialogService,
  TdLayoutComponent,
} from '@covalent/core';
//==============================OTHER COMPONENTS===================================

//==============================APP COMPONENTS===================================
import { GeneratedModule } from '../generated/generated.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BROKER_CONFIGURATION } from 'src/generated/services-wrapper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    GeneratedModule,
    HttpClientModule,

    CommonModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentChipsModule,
    CovalentFileModule,
    CovalentExpansionPanelModule,
    CovalentPagingModule,
    CovalentLoadingModule,
    CovalentMediaModule,
    CovalentMessageModule,
    CovalentCommonModule,
    CovalentDataTableModule,
    CovalentDialogsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatTabsModule,
    FormsModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatAutocompleteModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    appRoutingProviders,
    TdLayoutComponent,
    TdDialogService,
    {
      provide: BROKER_CONFIGURATION,
      useValue: {
        path: '/broker',
        useMoment: true
      }
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
