import { FilterInterface } from './advancedSearchBoxFilter.interface';
import { UUID } from 'angular2-uuid';
import { element } from 'protractor';
import { AdvancedSearchBoxComponent } from './advancedSearchBox.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild } from '@angular/core';
import 'rxjs/add/operator/filter';
import { AdvancedSearchBoxFilterAbstract } from './advancedSearchBoxFilter.abstract';

@Component({
    selector: 'as-input',
    templateUrl: './advancedSearchBoxInput.html'
})
export class AdvancedSearchBoxInputComponent extends AdvancedSearchBoxFilterAbstract implements OnInit {

   constructor(
        public advancedSearchBox: AdvancedSearchBoxComponent,
        public _renderer: Renderer2,
        public _el: ElementRef
    ) {
        super(advancedSearchBox, _renderer, _el);
    }

    ngOnInit() {
        super.ngOnInit();

        this.advancedSearchBox.editNext
        .filter((response) => response.viewModel && response.viewModel.uuid === this.viewModel.uuid)
        .subscribe((response) => {
            this.advancedSearchBox.nextFilterController(response.viewModel).onFocus('next');
            this.onBlur();
        });

        this.advancedSearchBox.editPrev
        .filter((response) => response.viewModel && response.viewModel.uuid === this.viewModel.uuid)
        .subscribe((response) => {
            this.advancedSearchBox.prevFilterController(response.viewModel).onFocus('prev');
            this.onBlur();
        });
    }

    onBlur() {
        super.onBlur();
        this.removeEmpty([this.viewModel.value]);
    }

    private onChange() {
        this.viewToModel();
    }

}
