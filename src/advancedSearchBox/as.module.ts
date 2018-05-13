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
import { NgModule, ModuleWithProviders, forwardRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AutosizeInputModule } from 'ngx-input-autosize';
import { HttpClientModule } from '@angular/common/http';
import { AsConfigService } from './asConfig.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule, MaskService, NEW_CONFIG, INITIAL_CONFIG, config, _configFactory, initialConfig } from 'ngx-mask';
import { AsSimpleInputWithOperatorsMaskComponent } from './input/asSimpleInputWithOperatorsMask.component';
import { AsSimpleInputMaskComponent } from './input/asSimpleInputMask.component';


@NgModule({
    declarations: [
        AsComponent,
        AsInputComponent,
        AsInputWithOperatorsComponent,
        AsTemplateDirective,
        AsSimpleInputComponent,
        AsSimpleInputMaskComponent,
        AsDomainsInputComponent,
        AsSuggestionsInputComponent,
        AsDomainsInputWithOperatorsComponent,
        AsSuggestionsInputWithOperatorsComponent,
        AsSimpleInputWithOperatorsComponent,
        AsSimpleInputWithOperatorsMaskComponent
    ],
    imports: [
        NgbDropdownModule.forRoot(),
        NgbTypeaheadModule.forRoot(),
        NgxMaskModule,
        NgSelectModule,
        CommonModule,
        FormsModule,
        DropdownNavigationModule,
        AutosizeInputModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [
        AsComponent,
        AsInputComponent,
        AsTemplateDirective,
        AsInputWithOperatorsComponent
    ],
    entryComponents: [
        AsSimpleInputComponent, 
        AsSimpleInputMaskComponent,
        AsDomainsInputComponent, 
        AsSuggestionsInputComponent,
        AsSimpleInputWithOperatorsComponent,
        AsDomainsInputWithOperatorsComponent,
        AsSimpleInputWithOperatorsMaskComponent,
        AsSuggestionsInputWithOperatorsComponent
    ],
    
    providers: [
        {
          provide: NEW_CONFIG,
          useValue: {}
        },
        {
          provide: INITIAL_CONFIG,
          useValue: initialConfig
        },
        {
          provide: config,
          useFactory: _configFactory,
          deps: [INITIAL_CONFIG, NEW_CONFIG]
        },
      ]
  
})
export class AsBoxModule {
    static forRoot(): ModuleWithProviders { 
        return {
            ngModule: AsBoxModule, 
            providers: [AsConfigService]
        }; 
    }
}
