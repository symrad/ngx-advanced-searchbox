import { DropdownNavigationDirective } from './../dropdown-navigation/dropdownNavigation.directive';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        DropdownNavigationDirective
    ],
    imports: [
        NgbModule,
        CommonModule,
        FormsModule
    ],
    exports: [
      DropdownNavigationDirective
    ]
})
export class DropdownNavigationModule {}
