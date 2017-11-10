import { HttpClient } from '@angular/common/http';
import { ViewModelInterface } from './advancedSearchBoxViewModel.interface';
import { FilterInterface } from './advancedSearchBoxFilter.interface';
import { UUID } from 'angular2-uuid';
import { element } from 'protractor';
import { AdvancedSearchBoxComponent } from './advancedSearchBox.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild, HostListener } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/switchMap';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AdvancedSearchBoxConfigService } from './advancedSearchBoxConfig.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

export abstract class AdvancedSearchBoxFilterAbstract implements OnInit, OnDestroy, FilterInterface {

    @Input() viewModel: ViewModelInterface;
    @ViewChild('inputRef') inputRef: ElementRef;
    @ViewChild(NgbTypeahead) typeaheadController;
    
    private _isFirstDocClick = true;
    public searchboxInputClick$: Observable<any>;
    public focusInput$: Subject<any> = new Subject();

    constructor(
        public advancedSearchBox: AdvancedSearchBoxComponent,
        public _renderer: Renderer2,
        public _el: ElementRef,
        public _http: HttpClient,
        public _config: AdvancedSearchBoxConfigService
    ) {}

    ngOnInit(): void {
        this.advancedSearchBox.addFilterController(this.viewModel.uuid, this);

        this.searchboxInputClick$ = fromEvent(this.inputRef.nativeElement, 'click').map((response: MouseEvent) => {
            response.preventDefault();
            response.stopPropagation();
            return response;
        });

        this.typeaheadController._userInput = '';
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

    searchBoxFunc = (text$: Observable<string>) =>
    text$
        .merge(this.searchboxInputClick$)
        .merge(this.focusInput$)
        .flatMap((term:any):Observable<any> => {
            if (term instanceof MouseEvent || term === undefined) {
                term = this.inputRef.nativeElement.value;
            }
            if(!this.viewModel.suggestions){
                return Observable.of(false);
            }else{
                if(typeof this.viewModel.suggestions === 'string'){
                    return Observable.of(term)
                    .switchMap((term) => this._http.get(this.viewModel.suggestions, {params:{query:term}}))
                    .flatMap(() => this._config.suggestionsAsyncFn(term, this.viewModel.suggestions));
                }else{
                    return Observable.of(term)
                    .flatMap((term) => this._config.suggestionsStaticFn(term, this.viewModel.suggestions));
                }
            }
        })

    formatter = this._config.suggestiosFormatter;

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
