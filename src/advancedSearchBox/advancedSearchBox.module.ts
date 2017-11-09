import { DropdownNavigationModule } from './../dropdown-navigation/dropdownNavigation.module';
import { AdvancedSearchBoxInputWithOperatorsComponent } from './advancedSearchBoxInputWithOperators.component';
import { CommonModule } from '@angular/common';
import { AdvancedSearchBoxTemplateDirective } from './advancedSearchBoxTemplate.directive';
import { AdvancedSearchBoxInputComponent } from './advancedSearchBoxInput.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdvancedSearchBoxComponent } from './advancedSearchBox.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutosizeInputModule } from 'ngx-input-autosize';


@NgModule({
    declarations: [
        AdvancedSearchBoxComponent,
        AdvancedSearchBoxInputComponent,
        AdvancedSearchBoxInputWithOperatorsComponent,
        AdvancedSearchBoxTemplateDirective
    ],
    imports: [
        NgbModule,
        CommonModule,
        FormsModule,
        DropdownNavigationModule,
        AutosizeInputModule
    ],
    exports: [
        AdvancedSearchBoxComponent,
        AdvancedSearchBoxInputComponent,
        AdvancedSearchBoxTemplateDirective,
        AdvancedSearchBoxInputWithOperatorsComponent
    ]
})
export class AdvancedSearchBoxModule {}
