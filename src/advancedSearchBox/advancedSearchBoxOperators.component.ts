import { FilterInterface } from './advancedSearchBoxFilter.interface';
import { AdvancedSearchBoxComponent } from './advancedSearchBox.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { AdvancedSearchBoxInputAbstract } from './advancedSearchBoxInput.abstract';
@Component({
    selector: 'app-as-operators',
    templateUrl: './advancedSearchBoxOperators.html'
})
export class AdvancedSearchBoxOperatorsComponent extends AdvancedSearchBoxInputAbstract {

    @Input('viewModel') viewModel: any;
    @ViewChild('inputRef') inputRef: ElementRef;

    constructor(
        public advancedSearchBox: AdvancedSearchBoxComponent,
        public renderer: Renderer2,
        public el: ElementRef
    ) {
        super(advancedSearchBox, renderer, el);
    }

    onInternalStep() {

    }

}
