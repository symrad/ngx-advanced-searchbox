import { AsUtils } from './../asUtils';
import { ViewModelInterface } from './../asViewModel.interface';
import { AsInputComponent } from './../asInput.component';
import { Subject, OperatorFunction } from 'rxjs';
import { ElementRef, OnInit, ViewChild, Input, Output } from '@angular/core';
import { AsConfigService } from './../asConfig.service';
import { HttpClient } from '@angular/common/http';
import { AsComponent } from "../as.component";
import { Observable, pipe } from "rxjs";
import { AsBoxFilterAbstract } from '../asFilter.abstract';
import { AsInputInterface } from './asInput.interface';
import { fromEvent } from 'rxjs';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { FilterInterface } from '../asFilter.interface';
import { AfterViewInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { NgModel, ControlValueAccessor, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { map, merge, distinctUntilChanged, tap, filter } from 'rxjs/operators';
import { AsInputWithOperatorsComponent } from './../asInputWithOperators.component';

enum notDuplicate{
    Domains,
    Suggestions
}

export abstract class AsInputAbstract implements OnInit, AsInputInterface, ControlValueAccessor{

    public focusInput$: Subject<any>;
    public domainsResults$:ReplaySubject<any>;
    public suggestionsResults$:ReplaySubject<any>;
    public searchboxInputClick$:Observable<any>;
    public suggestionsFormatter:(viewModel: ViewModelInterface)=>any;
    public domainsFormatter;
    public suggestionsFunc;
    public domainsFunc;
    public domainTypeahead:Observable<any>;
    public itemsDomain = [];
    public form: FormGroup;
    public abstract filter;
    
    public domainsAsyncSubject = new Subject();
    
    @ViewChild('inputRef') inputRef;
    @ViewChild('inputRef', {read: ElementRef}) inputElementRef:ElementRef;
    @ViewChild(NgbTypeahead) typeaheadController;
    @ViewChild(NgModel) ngModel:NgModel;
    @Output('change') change:EventEmitter<any> = new EventEmitter();

    constructor(
        public advancedSearchBox: AsComponent,
        protected _http: HttpClient,
        protected _config: AsConfigService,
        public _element: ElementRef
    ) {
        this.focusInput$ = new Subject();
        this.domainsResults$ = new ReplaySubject(1);
        this.suggestionsResults$ = new ReplaySubject(1);
        this.suggestionsFormatter = this._config.suggestionsFormatter;
        this.domainsFormatter = this._config.domainsFormatter;
        this.domainTypeahead = new EventEmitter();
        
        this.suggestionsFunc = (text$: Observable<string>) =>
            text$.pipe(
                merge(this.searchboxInputClick$),
                merge(this.focusInput$),
                //.debounceTime(50)
                distinctUntilChanged(),
                map((term)=>{
                    if (term instanceof MouseEvent || term === undefined) {
                        term = this.inputRef._elementRef.nativeElement.value || '';
                    }
                    return term;
                }),
                pipe((obs):Observable<any> => {
                    if(this.filter.viewModel.suggestions){
                        if(typeof this.filter.viewModel.suggestions === 'string' || this.filter.viewModel.suggestions === ''){
                            return obs
                            .pipe((obs) => this._config.suggestionsAsyncFn(obs, this.filter.viewModel, this.filter.viewModel.suggestions))
                            .pipe(
                            tap((response) => {
                                this.suggestionsResults$.next({viewModel:this.filter.viewModel, response: response});
                            }))
                            .pipe(this.filterNotDuplicateSuggestions());
                        }else{
                            return obs
                            .pipe((obs) => this._config.suggestionsStaticFn(obs, this.filter.viewModel, this.filter.viewModel.suggestions))
                            .pipe(tap((response) => {
                                this.suggestionsResults$.next({viewModel:this.filter.viewModel, response: response});
                            }))
                            .pipe(this.filterNotDuplicateSuggestions());
                        }
                    }else{
                        return obs;
                    }
        }));
        
    }

    public _onChange = (val: any) => {};

    writeValue(val): void {
        this._onChange(val);
    }

    registerOnChange(fn: (val: any) => void): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
    }

    setDisabledState(isDisabled: boolean): void {
    }

    ngOnInit(){
    
        this.searchboxInputClick$ = fromEvent(this.inputElementRef.nativeElement, 'click').pipe(map((response: MouseEvent) => {
            response.preventDefault();
            response.stopPropagation();
            return response;
        }));        
        if(this.typeaheadController){
            this.typeaheadController._userInput = '';
        }
        
        this.filter.focusInput$ = this.focusInput$;        
        if(this.filter.viewModel.domains){
            this.domainTypeahead.pipe(
            merge(this.searchboxInputClick$),
            merge(this.focusInput$),
            //.distinctUntilChanged()
            map((term)=>{
                if (term instanceof MouseEvent || !term) {
                    if(this.inputRef._value){
                        term = this.inputRef._value[this.inputRef.bindLabel] || '';
                    }else{
                        term = '';
                    }
                }
                return term;
            }),
            filter((term) => this.filter.viewModel.domains))
            //.debounceTime(1000)
            .pipe((obs:Observable<any>) => {
                if(typeof this.filter.viewModel.domains === 'string' || this.filter.viewModel.domains === ''){
                    return obs
                    .pipe((obs) => this._config.domainsAsyncFn(obs, this.filter.viewModel, this.advancedSearchBox.model))
                    .pipe(tap((response:any) => {
                        this.domainsResults$.next({viewModel:this.filter.viewModel, response: response.response});
                    }))
                    .pipe(this.filterNotDuplicateDomains());
                }else{
                    return obs
                    .pipe((obs) => this._config.domainsStaticFn(obs, this.filter.viewModel, this.advancedSearchBox.model))
                    .pipe(tap((response) => {
                        this.domainsResults$.next({viewModel:this.filter.viewModel, response: response});
                    }))
                    .pipe(this.filterNotDuplicateDomains());
                }
            })
            .subscribe(items => {
                if(typeof items === 'object'){
                    this.itemsDomain = items;
                }
            });
        }
    }

    private _filterNotDuplicate(type:notDuplicate):OperatorFunction<any,any>{
        return map((response:any) => { 
            let viewModel:Array<any> = response.response;
            let term:string = response.term;
            let isModel:Array<any> = AsUtils.getterSetterModelTree(this.advancedSearchBox.model, this.filter.viewModel.model.split('.')) || [];
            let viewModelFiltered:Array<any> = viewModel
            .filter((v) => {
                return isModel.filter((valModel) => {
                    if(!valModel){
                        return false;
                    }
                    if(type === notDuplicate.Domains){
                        if(this._config.formatModelViewValue[this.filter.viewModel.model]){
                            valModel = this._config.formatModelViewValue[this.filter.viewModel.model](valModel, this.filter.viewModel);
                        }
                        return this._config.domainsFormatter(this.filter.viewModel, valModel) === this._config.domainsModelFormatter(this.filter.viewModel, v) 
                        && this._config.domainsFormatter(this.filter.viewModel, valModel).toLowerCase() !== term.toLowerCase();
                    }else{
                        return valModel === this._config.suggestionsFormatter(this.filter.viewModel)(v) 
                        && this._config.suggestionsFormatter(this.filter.viewModel)(valModel).toLowerCase() !== term.toLowerCase();
                    }
                }).length === 0;
            });
            return viewModelFiltered;    
        });
    }

    filterNotDuplicateDomains():OperatorFunction<any,any>{
        return this._filterNotDuplicate(notDuplicate.Domains);
    }

    filterNotDuplicateSuggestions():OperatorFunction<any,any>{
        return this._filterNotDuplicate(notDuplicate.Suggestions);
    }
}