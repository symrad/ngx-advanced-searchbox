import { ViewModelInterface } from './advancedSearchBoxViewModel.interface';
import { FilterInterface } from './advancedSearchBoxFilter.interface';
import { UUID } from 'angular2-uuid';
import { element } from 'protractor';
import { AdvancedSearchBoxComponent } from './advancedSearchBox.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild } from '@angular/core';
import 'rxjs/add/operator/filter';

export abstract class AdvancedSearchBoxInputAbstract implements OnInit, OnDestroy, FilterInterface {

    @Input() viewModel: ViewModelInterface;
    @ViewChild('inputRef') inputRef: ElementRef;

    constructor(
        public advancedSearchBox: AdvancedSearchBoxComponent,
        public _renderer: Renderer2,
        public _el: ElementRef
    ) {}

    ngOnInit() {
        this.advancedSearchBox.addFilterController(this.viewModel.uuid, this);
    }

    ngOnDestroy() {
        this.advancedSearchBox.removeFilterController(this.viewModel.uuid);
    }

    onFocus(prevNext) {
        this.inputRef.nativeElement.focus();
    }

    onBlur() {
        this.inputRef.nativeElement.blur();
    }

    remove() {
        this.advancedSearchBox.removeViewModel(this.viewModel);
    }

    onInternalStep() {

    }

}
