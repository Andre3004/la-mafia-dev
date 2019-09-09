import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { GeneratedModule } from 'src/generated/generated.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DecimalPipe, registerLocaleData } from '@angular/common';
import { CovalentLayoutModule, CovalentStepsModule, CovalentChipsModule, CovalentFileModule, CovalentExpansionPanelModule, CovalentPagingModule, CovalentLoadingModule, CovalentMediaModule, CovalentMessageModule, CovalentCommonModule, CovalentDataTableModule, CovalentDialogsModule, CovalentSearchModule, TdLayoutComponent, TdDialogService } from '@covalent/core';
import { MatAutocompleteModule, MatIconModule, MatSelectModule, MatDatepickerModule, MatSlideToggleModule, MatMenuModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatSidenavModule, MatSnackBarModule, MatDialogModule, MatCardModule, MatButtonModule, MatToolbarModule, MatListModule, MatTooltipModule, MatProgressSpinnerModule, MatButtonToggleModule, MatTabsModule, MatExpansionModule, MatGridListModule, MatTreeModule, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { OpenSnackBarService } from './open-snackbar/open-snackbar.service';
import { BROKER_CONFIGURATION } from 'src/generated/services-wrapper';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { UppercaseDirective } from './uppercase/uppercase.directive';
import { DetailFieldComponent } from './detail-field/detail-field.component';

import { CurrencyMaskModule } from "ng2-currency-mask";
import localePt from '@angular/common/locales/pt';
import { AutoCompleteWithRedirectComponent } from './auto-complete-with-redirect/auto-complete-with-redirect.component';


registerLocaleData(localePt);

@NgModule({
    declarations: [
        HeaderComponent,
        UppercaseDirective,
        DetailFieldComponent,
        AutoCompleteWithRedirectComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        
        GeneratedModule,
        HttpClientModule,
        FlexLayoutModule,
        LayoutModule,
        RouterModule,
        TextMaskModule,
        
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
        CovalentSearchModule,
        CurrencyMaskModule,
        
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
        MatExpansionModule,
        MatAutocompleteModule,
        MatGridListModule,
        MatTreeModule,
        MatNativeDateModule
    ],
    providers: [
        OpenSnackBarService,
        TdLayoutComponent,
        TdDialogService,
        {
            provide: BROKER_CONFIGURATION,
            useValue: {
                path: '/broker',
                useMoment: true
            }
        },
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    ],
    exports: [
        HeaderComponent,
        UppercaseDirective,
        DetailFieldComponent,
        AutoCompleteWithRedirectComponent,
      
        CommonModule,
        FormsModule,
        
        GeneratedModule,
        HttpClientModule,
        FlexLayoutModule,
        LayoutModule,
        RouterModule,
        TextMaskModule,
        CurrencyMaskModule,
        
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
        CovalentSearchModule,
        
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
        MatExpansionModule,
        MatAutocompleteModule,
        MatGridListModule,
        MatTreeModule,
        MatNativeDateModule
    ],
    entryComponents: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedCommonModule { }
