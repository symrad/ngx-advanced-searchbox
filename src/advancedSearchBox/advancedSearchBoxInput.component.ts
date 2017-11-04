import { FilterInterface } from './advancedSearchBoxFilter.interface';
import { UUID } from 'angular2-uuid';
import { element } from 'protractor';
import { AdvancedSearchBoxComponent } from './advancedSearchBox.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild } from '@angular/core';
import 'rxjs/add/operator/filter';
import { AdvancedSearchBoxInputAbstract } from './advancedSearchBoxInput.abstract';

@Component({
    selector: 'app-as-input',
    templateUrl: './advancedSearchBoxInput.html'
})
export class AdvancedSearchBoxInputComponent extends AdvancedSearchBoxInputAbstract implements OnInit {

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
            this.onBlur();
            this.advancedSearchBox.nextFilterController(response.viewModel).onFocus('next');
        });

        this.advancedSearchBox.editPrev
        .filter((response) => response.viewModel && response.viewModel.uuid === this.viewModel.uuid)
        .subscribe((response) => {
            this.onBlur();
            this.advancedSearchBox.prevFilterController(response.viewModel).onFocus('prev');
        });
    }

    viewToModel() {
        this.advancedSearchBox.model[this.viewModel.model] = this.viewModel.value;
    }

    private onChange() {
        this.viewToModel();
    }
}
