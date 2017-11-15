import { AsSimpleInputWithOperatorsComponent } from './input/asSimpleInputWithOperators.component';
import { AsSuggestionsInputWithOperatorsComponent } from './input/asSuggestionsInputWithOperators.component';
import { AsDomainsInputWithOperatorsComponent } from './input/asDomainsInputWithOperators.component';
import { AsSimpleInputComponent } from './input/asSimpleInput.component';
import { AsSuggestionsInputComponent } from './input/asSuggestionsInput.component';
import { AsDomainsInputComponent } from './input/asDomainsInput.component';
import { DropdownNavigationModule } from './../dropdown-navigation/dropdownNavigation.module';
import { AsInputWithOperatorsComponent } from './asInputWithOperators.component';
import { CommonModule } from '@angular/common';
import { AsTemplateDirective } from './asTemplate.directive';
import { AsInputComponent } from './asInput.component';
import { NgbDropdownModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { AsComponent } from './as.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutosizeInputModule } from 'ngx-input-autosize';
import { HttpClientModule } from '@angular/common/http';
import { AsConfigService } from './asConfig.service';


@NgModule({
    declarations: [
        AsComponent,
        AsInputComponent,
        AsInputWithOperatorsComponent,
        AsTemplateDirective,
        AsSimpleInputComponent,
        AsDomainsInputComponent,
        AsSuggestionsInputComponent,
        AsDomainsInputWithOperatorsComponent,
        AsSuggestionsInputWithOperatorsComponent,
        AsSimpleInputWithOperatorsComponent
    ],
    imports: [
        NgbDropdownModule.forRoot(),
        NgbTypeaheadModule.forRoot(),
        CommonModule,
        FormsModule,
        DropdownNavigationModule,
        AutosizeInputModule,
        HttpClientModule
    ],
    exports: [
        AsComponent,
        AsInputComponent,
        AsTemplateDirective,
        AsInputWithOperatorsComponent
    ],
    entryComponents: [
        AsSimpleInputComponent, 
        AsDomainsInputComponent, 
        AsSuggestionsInputComponent,
        AsSimpleInputWithOperatorsComponent,
        AsDomainsInputWithOperatorsComponent,
        AsSuggestionsInputWithOperatorsComponent
    ]
})
export class AsBoxModule {
    static forRoot(): ModuleWithProviders { return {ngModule: AsBoxModule, providers: [AsConfigService]}; }
}
