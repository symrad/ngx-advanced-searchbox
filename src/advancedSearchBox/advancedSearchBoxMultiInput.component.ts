import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { FilterInterface } from './advancedSearchBoxFilter.interface';
import { UUID } from 'angular2-uuid';
import { element } from 'protractor';
import { AdvancedSearchBoxComponent } from './advancedSearchBox.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild } from '@angular/core';
import 'rxjs/add/operator/filter';
import { AdvancedSearchBoxInputAbstract } from './advancedSearchBoxInput.abstract';

@Component({
    selector: 'app-as-multi-input',
    templateUrl: './advancedSearchBoxMultiInput.html'
})
export class AdvancedSearchBoxMultiInputComponent extends AdvancedSearchBoxInputAbstract implements OnInit {

   @ViewChild(NgbDropdown) operators: NgbDropdown;
   @ViewChild('buttonToggle') buttonToggle: ElementRef;

   constructor(
        public advancedSearchBox: AdvancedSearchBoxComponent,
        public renderer: Renderer2,
        public el: ElementRef
    ) {
        super(advancedSearchBox, renderer, el);
    }

    ngOnInit() {
        super.ngOnInit();

        this.advancedSearchBox.editNext
        .filter((response) => response.viewModel && response.viewModel.uuid === this.viewModel.uuid)
        .subscribe((response) => {
            if (response.options.id && response.options.id === 'buttonDropDown') {
                this.operators.close();
                this.inputRef.nativeElement.focus();
            }else {
                this.advancedSearchBox.nextFilterController(response.viewModel).onFocus('next');
                this.onBlur();
            }
        });

        this.advancedSearchBox.editPrev
        .filter((response) => response.viewModel && response.viewModel.uuid === this.viewModel.uuid)
        .subscribe((response) => {
            if (response.options.id && response.options.id === 'buttonDropDown') {
                this.advancedSearchBox.prevFilterController(response.viewModel).onFocus('prev');
                this.operators.close();
                this.buttonToggle.nativeElement.blur();
            }else {
                this.operators.open();
                this.buttonToggle.nativeElement.focus();
                this.onBlur();
            }
        });

        this.advancedSearchBox.searchboxInputClick$.subscribe((response) => {
            this.operators.close();
        });
    }

    viewToModel() {
        if (this.viewModel.value) {
            if (!this.advancedSearchBox.model[this.viewModel.model]) {
                this.advancedSearchBox.model[this.viewModel.model] = [];
            }
            this.advancedSearchBox.model[this.viewModel.model].push(this.viewModel.value);
        }
    }

    onInternalStep() {

    }

    onBlur() {
        super.onBlur();
        this.operators.close();
        this.removeEmpty();
    }

    onFocus(prevNext) {
        if (prevNext === 'prev') {
            this.inputRef.nativeElement.focus();
        }else {
            this.operators.open();
            this.buttonToggle.nativeElement.focus();
        }
    }

    onChange() {
        this.viewToModel();
    }

    remove() {
        super.remove();
        if (this.viewModel.value) {
            const indexToRemove = this.advancedSearchBox.model[this.viewModel.model].indexOf(this.viewModel.value);
            this.advancedSearchBox.model[this.viewModel.model].splice(indexToRemove, 1);
        }
    }
}
