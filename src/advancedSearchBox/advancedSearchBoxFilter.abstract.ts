import { ViewModelInterface } from './advancedSearchBoxViewModel.interface';
import { FilterInterface } from './advancedSearchBoxFilter.interface';
import { UUID } from 'angular2-uuid';
import { element } from 'protractor';
import { AdvancedSearchBoxComponent } from './advancedSearchBox.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild, HostListener } from '@angular/core';
import 'rxjs/add/operator/filter';
import { FormControl } from '@angular/forms';

export abstract class AdvancedSearchBoxFilterAbstract implements OnInit, OnDestroy, FilterInterface {

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
        this.viewToModel();
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

    getterSetterModelTree(parent, models, typeLastModel) {
        if (models.length === 0) {
            return parent;
        }
        const firstModel = models[0];
        if (!parent[firstModel]) {
            if (models.length === 1) {
                parent[firstModel] = typeLastModel;
                return parent[firstModel];
            }
            parent[firstModel] = {};
        }
        models.shift();
        return this.getterSetterModelTree(parent[firstModel], models, typeLastModel);
    }

    viewToModel() {
        if (this.viewModel.value) {
            const newModel = {};
            for (const singleViewModel of this.advancedSearchBox.viewModel){
                if (singleViewModel.multiple) {
                    this.getterSetterModelTree(newModel, singleViewModel.model.split('.'), []).push(singleViewModel.value);
                }else {
                    this.getterSetterModelTree(newModel, singleViewModel.model.split('.'), singleViewModel.value);
                }
            }
            for (const key in this.advancedSearchBox.model) {
                if (this.advancedSearchBox.model.hasOwnProperty(key)) {
                    delete this.advancedSearchBox.model[key];
                }
            }
            Object.assign(this.advancedSearchBox.model, newModel);
        }
    }

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
