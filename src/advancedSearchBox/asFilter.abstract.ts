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
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';

export abstract class AsBoxFilterAbstract implements OnInit, OnDestroy, FilterInterface, AfterViewInit {

    @Input() viewModel: ViewModelInterface;

    public abstract inputInstance;
    private _isFirstDocClick;
    public searchboxInputClick$;
    public inputClickUnsubscribe$_:Subscription;
    public focusInput$: Subject<any>;

    constructor(
        public advancedSearchBox: AsComponent,
        public _renderer: Renderer2,
        public _el: ElementRef,
        public _http: HttpClient,
        public _config: AsConfigService
    ) {
        this._isFirstDocClick = true;
        this.focusInput$ = new Subject();
    }

    ngAfterViewInit(){
        this.advancedSearchBox.afterViewInitFilters$.next(this.viewModel);
    }

    ngOnInit(): void {
        this.advancedSearchBox.addFilterController(this.viewModel.uuid, this);
        this.inputClickUnsubscribe$_ = fromEvent(this._el.nativeElement, 'click').map((response: MouseEvent) => {
            response.preventDefault();
            response.stopPropagation();
            return response;
        }).subscribe(()=>{});
    }

    ngOnDestroy(): void {
        this.advancedSearchBox.removeFilterController(this.viewModel.uuid);
        this.inputClickUnsubscribe$_.unsubscribe();
    }

    onFocus(prevNext): void {
        setTimeout(()=>{
            if(this.inputInstance.inputRef.nativeElement){
                this.inputInstance.inputRef.nativeElement.focus();
            }else{
                this.inputInstance.inputRef.open();
                this.inputInstance.focusInput$.next(undefined);
            }
        },0);
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
            if (model || model === false) {
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
        //if (this.viewModel.value) {
            const newModel = {};
            for (const singleViewModel of this.advancedSearchBox.viewModel){
                let formattedValue = singleViewModel.value;
                if(singleViewModel.formatModelValue){
                    formattedValue = singleViewModel.formatModelValue(singleViewModel.value);
                }
                if (singleViewModel.multiple) {
                    this.getterSetterModelTree(newModel, singleViewModel.model.split('.'), []).push(formattedValue);
                }else {
                    this.getterSetterModelTree(newModel, singleViewModel.model.split('.'), formattedValue);
                }
            }
            for (const key in this.advancedSearchBox.model) {
                if (this.advancedSearchBox.model.hasOwnProperty(key)) {
                    delete this.advancedSearchBox.model[key];
                }
            }
            Object.assign(this.advancedSearchBox.model, newModel);
        //}
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
    

    public onSelectDomains($event){
        const isModified = this.viewModel.value !== $event;
        this.viewModel.value = $event;
        if(isModified){
            this.advancedSearchBox.nextFilterController(this.viewModel).onFocus('next');
        }
        this.viewToModel();
    }

    public onSelectSuggestions($event:NgbTypeaheadSelectItemEvent){
        const isModified = this.viewModel.value !== $event.item;
        this.viewModel.value = $event.item;
        if(isModified){
            this.advancedSearchBox.nextFilterController(this.viewModel).onFocus('next');
        }
        this.viewToModel();
        this.inputInstance.typeaheadController._userInput = this.inputInstance.suggestionsFormatter($event.item);
    }

    
}
