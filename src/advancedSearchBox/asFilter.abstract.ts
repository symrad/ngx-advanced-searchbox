import { HttpClient } from '@angular/common/http';
import { ViewModelInterface } from './asViewModel.interface';
import { FilterInterface } from './asFilter.interface';
import { UUID } from 'angular2-uuid';
import { AsComponent } from './as.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild, HostListener } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/switchMap';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AsConfigService } from './asConfig.service';
import { NgbTypeahead, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { AsInputInterface } from './input/asInput.interface';
import { AfterViewInit } from '@angular/core';

export abstract class AsBoxFilterAbstract implements OnInit, OnDestroy, FilterInterface, AfterViewInit {

    @Input() viewModel: ViewModelInterface;

    public abstract inputInstance;
    private _isFirstDocClick = true;
    public searchboxInputClick$: Observable<any>;
    public focusInput$: Subject<any> = new Subject();

    constructor(
        public advancedSearchBox: AsComponent,
        public _renderer: Renderer2,
        public _el: ElementRef,
        public _http: HttpClient,
        public _config: AsConfigService
    ) {}

    ngAfterViewInit(){
        this.advancedSearchBox.afterViewInitFilters$.next(this.viewModel);
    }

    ngOnInit(): void {
        this.advancedSearchBox.addFilterController(this.viewModel.uuid, this);
    }

    ngOnDestroy(): void {
        this.advancedSearchBox.removeFilterController(this.viewModel.uuid);
    }

    onFocus(prevNext): void {
       this.inputInstance.inputRef.nativeElement.focus();
    }

    onBlur(): void {
       
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
    

    public onSelectDomains($event:NgbTypeaheadSelectItemEvent){
        this.viewModel.value = $event.item;
        this.advancedSearchBox.nextFilterController(this.viewModel).onFocus('next');
        this.viewToModel();
    }

    public onSelectSuggestions($event:NgbTypeaheadSelectItemEvent){
        this.viewModel.value = $event.item;
        this.advancedSearchBox.nextFilterController(this.viewModel).onFocus('next');
        this.viewToModel();
        this.inputInstance.typeaheadController._userInput = this.inputInstance.suggestionsFormatter($event.item);
    }

    
}
