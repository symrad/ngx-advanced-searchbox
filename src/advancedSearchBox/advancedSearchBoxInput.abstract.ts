import { ViewModelInterface } from './advancedSearchBoxViewModel.interface';
import { FilterInterface } from './advancedSearchBoxFilter.interface';
import { UUID } from 'angular2-uuid';
import { element } from 'protractor';
import { AdvancedSearchBoxComponent } from './advancedSearchBox.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild, HostListener } from '@angular/core';
import 'rxjs/add/operator/filter';

export abstract class AdvancedSearchBoxInputAbstract implements OnInit, OnDestroy, FilterInterface {

    @Input() viewModel: ViewModelInterface;
    @ViewChild('inputRef') inputRef: ElementRef;
    private _isFirstDocClick = true;

    constructor(
        public advancedSearchBox: AdvancedSearchBoxComponent,
        public _renderer: Renderer2,
        public _el: ElementRef
    ) {}

    ngOnInit(): void {
        this.advancedSearchBox.addFilterController(this.viewModel.uuid, this);
    }

    ngOnDestroy(): void {
        this.advancedSearchBox.removeFilterController(this.viewModel.uuid);
    }

    onFocus(prevNext): void {
        this.inputRef.nativeElement.focus();
    }

    onBlur(): void {
        this.inputRef.nativeElement.blur();
    }

    remove(): void {
        this.advancedSearchBox.removeViewModel(this.viewModel);
    }

    onInternalStep() {

    }

    removeEmpty(models: Array<any>): void {
        let isToRemove = true;
        for (const model of models){
            if (model) {
                isToRemove = false;
                break;
            }
        }
        if (isToRemove) {
            this.remove();
        }
    }

    getKeys(object): Array<any> {
        return Object.keys(object);
    }

    abstract viewToModel();

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (!this._isFirstDocClick) {
            if (this._el.nativeElement.contains(event.target)) {

            } else {
                this.advancedSearchBox.getFilterController(this.viewModel).onBlur();
                this.viewToModel();
            }
        }
        this._isFirstDocClick = false;
    }
}
