import { AutosizeComponent } from './autosize.component';
import { AutosizeDirective } from './autosizeInput.directive';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AutosizeDirective,
        AutosizeComponent
    ],
    imports: [
        NgbModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        AutosizeDirective,
        AutosizeComponent
    ],
    entryComponents: [AutosizeComponent]
})
export class AutosizeInputModule {}
