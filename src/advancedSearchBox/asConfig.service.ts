import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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

    public domainsAsyncSubject:Subject<any> = new Subject();
    
    constructor(private _http:HttpClient){
        this._navigation = new ReplaySubject(2);
        this.customSuggestionsFormatter = {};
        this.customDomainsFormatter = {};
        this.customDomainsModelFormatter = {};

        this.customSuggestionsStaticFn = {};
        this.customSuggestionsAsyncFn = {};
        this.customDomainsStaticFn = {};
        this.customDomainsAsyncFn = {};

        this.customDomainsAsyncFn['youtube'] = (observable, viewModel, model) => {
            return observable
            .switchMap((term) => {
                return this._http.get('https://www.googleapis.com/youtube/v3/search', {params:{
                q:term,
                key: 'AIzaSyBafKFrisguQvT3WC20Q972uxS1cZfPvg8',
                type: 'video',
                maxResults: '12',
                part: 'id,snippet'
                }});
                }
            )
            .catch(()=>[])
            .map((response:any) => {
                return response.items.map((item)=>{
                    return {label:item.snippet.title};
                });
            });
        }
        
        this.suggestionsFormatter = (viewModel) => {
            if(this.customSuggestionsFormatter[viewModel.model]){
                return this.customSuggestionsFormatter[viewModel.model];
            }
            return (val)=>{
                if(typeof val === 'object'){
                    return val.label;
                }
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

    suggestionsStaticFn(observable, viewModel, suggestions):Observable<Array<any>>{
        if(this.customSuggestionsStaticFn[viewModel.model]){
            return this.customSuggestionsStaticFn[viewModel.model](observable, viewModel, suggestions);
        }
        return observable
        .map(term => term === '' ? suggestions
          : suggestions.filter(v => {
              return v.indexOf(term.toLowerCase()) > -1
          }).slice(0, 10));
    }

    suggestionsAsyncFn(observable, viewModel, suggestions):Observable<Array<any>>{
        if(this.customSuggestionsAsyncFn[viewModel.model]){
            return this.customSuggestionsAsyncFn[viewModel.model](observable, viewModel, suggestions);
        }
        return observable
        .switchMap((term) => this._http.get(viewModel.suggestions, {params:{q:term}}))
        .catch(()=>[])
        .map((response:any) => {
            return response.items.map((item)=>{
                return {label:item.login};
            });
        });
    }

    domainsStaticFn(observable, viewModel, model):Observable<Array<any>>{
        if(this.customDomainsStaticFn[viewModel.model]){
            return this.customDomainsStaticFn[viewModel.model](observable, viewModel, model);
        }
        return observable
        .map(term => term === '' ? viewModel.domains
          : viewModel.domains.filter(v => {
              return v[viewModel.bindLabel].indexOf(term.toLowerCase()) > -1
          }).slice(0, 10));
    }

    domainsAsyncFn(observable, viewModel, model):Observable<Array<any>>{
        if(this.customDomainsAsyncFn[viewModel.model]){
            return this.customDomainsAsyncFn[viewModel.model](observable, viewModel, model);
        }
        
        return observable
        .switchMap((term) => this._http.get(viewModel.domains, {params:{q:term}}))
        .catch(()=>[])
        .map((response:any) => {
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