import { ViewModelInterface } from './../asViewModel.interface';
import { AsInputComponent } from './../asInput.component';
import { Subject } from 'rxjs/Subject';
import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { AsConfigService } from './../asConfig.service';
import { HttpClient } from '@angular/common/http';
import { AsComponent } from "../as.component";
import { Observable } from "rxjs/Observable";
import { AsBoxFilterAbstract } from '../asFilter.abstract';
import { AsInputInterface } from './asInput.interface';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { FilterInterface } from '../asFilter.interface';
import { AfterViewInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NgModel } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators/map';
import { pipe } from 'rxjs/util/pipe';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/let';
import { AsInputWithOperatorsComponent } from './../asInputWithOperators.component';

enum notDuplicate{
    Domains,
    Suggestions
}

export abstract class AsInputAbstract implements OnInit, AsInputInterface{

    public focusInput$: Subject<any>;
    public domainsResults$:ReplaySubject<any>;
    public suggestionsResults$:ReplaySubject<any>;
    public searchboxInputClick$:Observable<any>;
    public _filter:AsInputWithOperatorsComponent | AsInputComponent;
    public suggestionsFormatter:(viewModel: ViewModelInterface)=>any;
    public domainsFormatter;
    public suggestionsFunc;
    public domainsFunc;
    public domainTypeahead;
    public itemsDomain = [];
    
    public domainsAsyncSubject = new Subject();
    
    @ViewChild('inputRef') inputRef;
    @ViewChild('inputRef', {read: ElementRef}) inputElementRef:ElementRef;
    @ViewChild(NgbTypeahead) typeaheadController;
    @ViewChild(NgModel) ngModel:NgModel;

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
            text$
                .merge(this.searchboxInputClick$)
                .merge(this.focusInput$)
                //.debounceTime(50)
                .distinctUntilChanged()
                .map((term)=>{
                    if (term instanceof MouseEvent || term === undefined) {
                        term = this.inputRef.nativeElement.value || '';
                    }
                    return term;
                })
                .let((obs):Observable<any> => {
                    if(this._filter.viewModel.suggestions){
                        if(typeof this._filter.viewModel.suggestions === 'string'){
                            return obs
                            .let((obs) => this._config.suggestionsAsyncFn(obs, this._filter.viewModel, this._filter.viewModel.suggestions))
                            .do((response) => {
                                this.suggestionsResults$.next({viewModel:this._filter.viewModel, response: response});
                            })
                            .let(this.filterNotDuplicateSuggestions());
                        }else{
                            return obs
                            .let((obs) => this._config.suggestionsStaticFn(obs, this._filter.viewModel, this._filter.viewModel.suggestions))
                            .do((response) => {
                                this.suggestionsResults$.next({viewModel:this._filter.viewModel, response: response});
                            })
                            .let(this.filterNotDuplicateSuggestions());
                        }
                    }else{
                        return obs;
                    }
        });
        
    }

    private _filterNotDuplicate(type:notDuplicate){
        return map((response:any) => { 
            let viewModel = response.response;
            let term = response.term;
            let isModel = this.getterModelTree(this.advancedSearchBox.model, this._filter.viewModel.model.split('.')) || [];
            let viewModelFiltered = viewModel
            .filter((v) => {
                return isModel.filter((valModel) => {
                    if(!valModel){
                        return false;
                    }
                    if(type === notDuplicate.Domains){
                        if(this._config.formatModelViewValue[this._filter.viewModel.model]){
                            valModel = this._config.formatModelViewValue[this._filter.viewModel.model](valModel, this._filter.viewModel);
                        }
                        return this._config.domainsFormatter(this._filter.viewModel, valModel) === this._config.domainsFormatter(this._filter.viewModel, v) 
                        && this._config.domainsFormatter(this._filter.viewModel, valModel).toLowerCase() !== term.toLowerCase();
                    }else{
                        return valModel === this._config.suggestionsFormatter(this._filter.viewModel)(v) 
                        && this._config.suggestionsFormatter(this._filter.viewModel)(valModel).toLowerCase() !== term.toLowerCase();
                    }
                }).length === 0;
            });
            return viewModelFiltered;    
        });
    }

    filterNotDuplicateDomains(){
        return this._filterNotDuplicate(notDuplicate.Domains);
    }

    filterNotDuplicateSuggestions(){
        return this._filterNotDuplicate(notDuplicate.Suggestions);
    }


    ngOnInit(){
    
        this.searchboxInputClick$ = fromEvent(this.inputElementRef.nativeElement, 'click').map((response: MouseEvent) => {
            response.preventDefault();
            response.stopPropagation();
            return response;
        });

        if(this.typeaheadController){
            this.typeaheadController._userInput = '';
        }

        this._filter.focusInput$ = this.focusInput$;

        if(this._filter.viewModel.domains){
            this.domainTypeahead
            .merge(this.searchboxInputClick$)
            .merge(this.focusInput$)
            //.distinctUntilChanged()
            .map((term)=>{
                if (term instanceof MouseEvent || !term) {
                    if(this.inputRef.value){
                        term = this.inputRef.value[this.inputRef.bindLabel] || '';
                    }else{
                        term = '';
                    }
                }
                return term;
            })
            .filter((term) => this._filter.viewModel.domains)
            //.debounceTime(1000)
            .let((obs) => {
                if(typeof this._filter.viewModel.domains === 'string'){
                    return obs
                    .let((obs) => this._config.domainsAsyncFn(obs, this._filter.viewModel, this.advancedSearchBox.model))
                    .do((response) => {
                        this.domainsResults$.next({viewModel:this._filter.viewModel, response: response.response});
                    })
                    .let(this.filterNotDuplicateDomains());
                }else{
                    return obs
                    .let((obs) => this._config.domainsStaticFn(obs, this._filter.viewModel, this.advancedSearchBox.model))
                    .do((response) => {
                        this.domainsResults$.next({viewModel:this._filter.viewModel, response: response});
                    })
                    .let(this.filterNotDuplicateDomains());
                }
            })
            .subscribe(items => {
                if(typeof items === 'object'){
                    this.itemsDomain = items;
                }
            });
        }
    }

    getterModelTree(parent, models) {
        if (models.length === 0) {
            return parent;
        }
        const firstModel = models[0];
        if (!parent[firstModel]) {
            return false;
        }
        models.shift();
        return this.getterModelTree(parent[firstModel], models);
    }

}