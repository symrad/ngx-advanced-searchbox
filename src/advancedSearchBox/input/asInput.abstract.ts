import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { AsConfigService } from './../asConfig.service';
import { HttpClient } from '@angular/common/http';
import { AsComponent } from "../as.component";
import { Observable } from "rxjs/Observable";
import { AsBoxFilterAbstract } from '../asFilter.abstract';
import { AsInputInterface } from './asInput.interface';
import { Subject } from 'rxjs/Subject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { FilterInterface } from '../asFilter.interface';

export abstract class AsInputAbstract implements OnInit, AsInputInterface{

    public focusInput$: Subject<any> = new Subject();
    public searchboxInputClick$;
    public _filter;
    
    @ViewChild('inputRef') inputRef:ElementRef;
    @ViewChild(NgbTypeahead) typeaheadController;

    constructor(
        public advancedSearchBox: AsComponent,
        protected _http: HttpClient,
        protected _config: AsConfigService,
        public _element: ElementRef
    ) {}

    ngOnInit(){
        this.searchboxInputClick$ = fromEvent(this.inputRef.nativeElement, 'click').map((response: MouseEvent) => {
            response.preventDefault();
            response.stopPropagation();
            return response;
        });
        if(this.typeaheadController){
            this.typeaheadController._userInput = '';
        }
    }
    suggestionsFunc = (text$: Observable<string>) =>
    text$
        .merge(this.searchboxInputClick$)
        .merge(this._filter.focusInput$)
        .flatMap((term:any):Observable<any> => {
            if (term instanceof MouseEvent || term === undefined) {
                term = this._element.nativeElement.value || '';
            }
            if(!this._filter.viewModel.suggestions){
                return Observable.of(false);
            }else{
                if(typeof this._filter.viewModel.suggestions === 'string'){
                    return Observable.of(term)
                    .switchMap((term) => this._http.get(this._filter.viewModel.suggestions, {params:{query:term}}))
                    .flatMap(() => this._config.suggestionsAsyncFn(term, this._filter.viewModel.suggestions));
                }else{
                    return Observable.of(term)
                    .flatMap((term) => this._config.suggestionsStaticFn(term, this._filter.viewModel.suggestions));
                }
            }
        })

    public suggestionsFormatter = this._config.suggestionsFormatter;

    domainsFunc = (text$: Observable<string>) =>
    text$
        .merge(this.searchboxInputClick$)
        .merge(this._filter.focusInput$)
        .flatMap((term:any):Observable<any> => {
            if (term instanceof MouseEvent || term === undefined) {
                term = this._element.nativeElement.value || '';
            }
            if(!this._filter.viewModel.domains){
                return Observable.of(false);
            }else{
                if(typeof this._filter.viewModel.domains === 'string'){
                    return Observable.of(term)
                    .switchMap((term) => this._http.get(this._filter.viewModel.domains, {params:{query:term}}))
                    .flatMap(() => this._config.suggestionsAsyncFn(term, this._filter.viewModel.domains));
                }else{
                    return Observable.of(term)
                    .flatMap((term) => this._config.suggestionsStaticFn(term, this._filter.viewModel.domains));
                }
            }
        })

    public domainsFormatter = this._config.suggestionsFormatter;

    
}