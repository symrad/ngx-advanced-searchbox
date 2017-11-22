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
import { NgModel } from '@angular/forms';

export abstract class AsInputAbstract implements OnInit, AsInputInterface{

    public focusInput$: Subject<any>;
    public domainsResults$:ReplaySubject<any>;
    public suggestionsResults$:ReplaySubject<any>;
    public searchboxInputClick$;
    public _filter;
    public suggestionsFormatter;
    public domainsFormatter;
    public suggestionsFunc;
    public domainsFunc;
    
    @ViewChild('inputRef') inputRef:ElementRef;
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
        this.suggestionsFunc = (text$: Observable<string>) =>
            text$
                .merge(this.searchboxInputClick$)
                .merge(this.focusInput$)
                .debounceTime(50)
                .distinctUntilChanged()
                .flatMap((term:any):Observable<any> => {
                    if (term instanceof MouseEvent || term === undefined) {
                        term = this.inputRef.nativeElement.value || '';
                    }
                    if(!this._filter.viewModel.suggestions){
                        return Observable.of(false);
                    }else{
                        if(typeof this._filter.viewModel.suggestions === 'string'){
                            return Observable.of(term)
                            .switchMap((term) => this._http.get(this._filter.viewModel.suggestions, {params:{query:term}}))
                            .flatMap(() => this._config.suggestionsAsyncFn(term, this._filter.viewModel.suggestions))
                            .do((response) => {
                                this.suggestionsResults$.next({viewModel:this._filter.viewModel, response: response});
                            });
                        }else{
                            return Observable.of(term)
                            .flatMap((term) => this._config.suggestionsStaticFn(term, this._filter.viewModel.suggestions))
                            .do((response) => {
                                this.suggestionsResults$.next({viewModel:this._filter.viewModel, response: response});
                            });
                        }
                    }
        });
        
        this.domainsFunc = (text$: Observable<string>) =>
            text$
                .merge(this.searchboxInputClick$)
                .merge(this.focusInput$)
                .debounceTime(50)
                .distinctUntilChanged()
                .flatMap((term:any):Observable<any> => {
                    if (term instanceof MouseEvent || term === undefined) {
                        term = this.inputRef.nativeElement.value || '';
                    }
                    if(!this._filter.viewModel.domains){
                        return Observable.of(false);
                    }else{
                        if(typeof this._filter.viewModel.domains === 'string'){
                            return Observable.of(term)
                            .switchMap((term) => this._http.get(this._filter.viewModel.domains, {params:{query:term}}))
                            .flatMap(() => this._config.domainsAsyncFn(term, this._filter.viewModel, this.advancedSearchBox.model))
                            .do((response) => {
                                this.domainsResults$.next({viewModel:this._filter.viewModel, response: response});
                            });
                        }else{
                            return Observable.of(term)
                            .flatMap((term) => this._config.domainsStaticFn(term, this._filter.viewModel, this.advancedSearchBox.model))
                            .do((response) => {
                                this.domainsResults$.next({viewModel:this._filter.viewModel, response: response});
                            })
                            /*
                            .map((viewModel) => { 
                                let isModel = this.getterModelTree(this.advancedSearchBox.model, this._filter.viewModel.model.split('.')) || [];
                                let viewModelFiltered = viewModel
                                .filter((v) => {
                                    return isModel.filter((valModel) => {
                                        if(!valModel){
                                            return false;
                                        }
                                        return this.domainsFormatter(valModel) === this.domainsFormatter(v);
                                    }).length === 0;
                                });
                                return viewModelFiltered;    
                            })
                            */
                            ;
                        }
                    }
        });
    }

    ngOnInit(){
        this.searchboxInputClick$ = fromEvent(this.inputRef.nativeElement, 'click').map((response: MouseEvent) => {
            response.preventDefault();
            response.stopPropagation();
            return response;
        });
        if(this.typeaheadController){
            this.typeaheadController._userInput = '';
        }

        this._filter.focusInput$ = this.focusInput$;
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