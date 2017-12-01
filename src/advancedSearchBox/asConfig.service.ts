import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import 'rxjs/add/operator/take';

@Injectable()
export class AsConfigService{

    private _navigation;
    public customDomainsFormatter;
    public customDomainsModelFormatter;
    public customSuggestionsFormatter;

    public customSuggestionsStaticFn;
    public customSuggestionsAsyncFn;
    public customDomainsStaticFn;
    public customDomainsAsyncFn;
    
    public domainsFormatter;
    public domainsModelFormatter;
    public suggestionsFormatter;
    
    constructor(private _http:HttpClient){
        this._navigation = new ReplaySubject(2);
        this.customSuggestionsFormatter = {};
        this.customDomainsFormatter = {};
        this.customDomainsModelFormatter = {};

        this.customSuggestionsStaticFn = {};
        this.customSuggestionsAsyncFn = {};
        this.customDomainsStaticFn = {};
        this.customDomainsAsyncFn = {};
        
        this.suggestionsFormatter = (viewModel) => {
            if(this.customSuggestionsFormatter[viewModel.model]){
                return this.customSuggestionsFormatter[viewModel.model];
            }
            return (val)=>{
                return val;
            };
        }; 
        this.domainsFormatter = (viewModel, val) => {
            if(this.customDomainsFormatter[viewModel.model]){
                return this.customSuggestionsFormatter[viewModel.model];
            }
            return val.label;
        };
        this.domainsModelFormatter = (viewModel, val) => {
            if(this.customDomainsModelFormatter[viewModel.model]){
                return this.customDomainsModelFormatter[viewModel.model];
            }
            if(viewModel.type === 'OPERATORS'){
                return val.value;
            }
            return val;
        };
    }

    suggestionsStaticFn(term, viewModel, suggestions):Observable<Array<any>>{
        if(this.customSuggestionsStaticFn[viewModel.model]){
            return this.customSuggestionsStaticFn[viewModel.model](term, viewModel, suggestions);
        }
        return Observable.of(term)
        .map(term => term === '' ? suggestions
          : suggestions.filter(v => {
              return v.indexOf(term.toLowerCase()) > -1
          }).slice(0, 10));
    }

    suggestionsAsyncFn(term, viewModel, suggestions):Observable<Array<any>>{
        if(this.customSuggestionsAsyncFn[viewModel.model]){
            return this.customSuggestionsAsyncFn[viewModel.model](term, viewModel, suggestions);
        }
        return Observable.of(term)
        .switchMap((term) => this._http.get(viewModel.suggestions, {params:{query:term}}))
        .map(() => term === '' ? suggestions
          : suggestions.filter(v => v.indexOf(term.toLowerCase()) > -1).slice(0, 10));
    }

    domainsStaticFn(term, viewModel, model):Observable<Array<any>>{
        if(this.customDomainsStaticFn[viewModel.model]){
            return this.customDomainsStaticFn[viewModel.model](term, viewModel, model);
        }
        return Observable.of(term)
        .map(term => term === '' ? viewModel.domains
          : viewModel.domains.filter(v => {
              return v[viewModel.bindLabel].indexOf(term.toLowerCase()) > -1
          }).slice(0, 10));
    }

    domainsAsyncFn(response, viewModel, model):Observable<Array<any>>{
        if(this.customDomainsAsyncFn[viewModel.model]){
            return this.customDomainsAsyncFn[viewModel.model](response, viewModel, model);
        }
        return Observable.of(response.items)
        .switchMap((term) => this._http.get(viewModel.domains, {params:{q:term}}))
        .map(() => {
            return response.items.map((item)=>{
                return {label:item.login};
            });
        });
    }

    set navigation(navigation){
        this._navigation = navigation;
    } 
    get navigation(){
        this.historyNavigation = this._navigation.take(2);
        return this._navigation;
    }

    public historyNavigation;
}