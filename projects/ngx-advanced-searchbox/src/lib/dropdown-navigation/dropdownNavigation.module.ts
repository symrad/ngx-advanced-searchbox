import { DropdownNavigationDirective } from './../dropdown-navigation/dropdownNavigation.directive';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        DropdownNavigationDirective
    ],
    imports: [
        NgbDropdownModule,
        CommonModule,
        FormsModule
    ],
    exports: [
      DropdownNavigationDirective
    ]
})
export class DropdownNavigationModule {}
