import { ViewModelInterface } from './asViewModel.interface';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ReplaySubject } from "rxjs";
import { take, catchError, map, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { FunctionCall } from '@angular/compiler';

@Injectable()
export class AsConfigService{

    private _navigation:ReplaySubject<any> = new ReplaySubject(2);

    public customDomainsFormatter:{[key:string]:(viewModel:ViewModelInterface,val:any)=>any} = {};
    public customDomainsModelFormatter:{[key:string]:(viewModel:ViewModelInterface,val:any)=>any} = {};
    public customSuggestionsFormatter:{[key:string]:(viewModel:ViewModelInterface)=>any} = {};

    public formatModelValue:{[key:string]:(val:any)=>Object|String} = {};
    public formatModelViewValue:{[key:string]:(val:any, template:any)=>Object|String} = {};

    public customSuggestionsStaticFn:{[key: string]:(observable:Observable<any>,viewModel:ViewModelInterface,model:any)=>any} = {};
    public customSuggestionsAsyncFn:{[key: string]:(observable:Observable<any>,viewModel:ViewModelInterface,model:any)=>any} = {};
    public customDomainsStaticFn:{[key: string]:(observable:Observable<any>,viewModel:ViewModelInterface,model:any)=>any} = {};
    public customDomainsAsyncFn:{[key: string]:(observable:Observable<any>,viewModel:ViewModelInterface,model:any)=>any} = {};
    

    public domainsFormatter:(viewModel:ViewModelInterface,model:any)=>any;
    public domainsModelFormatter:(viewModel:ViewModelInterface,model:any)=>any;
    public suggestionsFormatter:(viewModel: ViewModelInterface)=>any;

    public domainsAsyncSubject:Subject<any> = new Subject();
    
    constructor(private _http:HttpClient){
        
        this.suggestionsFormatter = (viewModel):any => {
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
                return this.customDomainsFormatter[viewModel.model](viewModel,val);
            }
            if(typeof val === 'object'){
                if(viewModel.bindLabel){
                    return val[viewModel.bindLabel];
                }
                return val.label;
            }
            return val;
        };

        this.domainsModelFormatter = (viewModel, val) => {
            if(this.customDomainsModelFormatter[viewModel.model]){
                return this.customDomainsModelFormatter[viewModel.model](viewModel,val);
            }
            if(typeof val === 'object'){
                if(viewModel.bindLabel){
                    return val[viewModel.bindLabel];
                }
                return val.label;
            }
            return val;
        };
        
    }

    suggestionsStaticFn(observable:Observable<any>, viewModel, suggestions):Observable<any>{
        if(this.customSuggestionsStaticFn[viewModel.model]){
            return this.customSuggestionsStaticFn[viewModel.model](observable, viewModel, suggestions);
        }
        return observable.pipe(
        map(term => {
            let response = {response:suggestions, term:term};
            if(term === ''){
                return response;
            }
            response.response = suggestions.filter(v => {
                return v.toString().indexOf(term.toLowerCase()) > -1
            }).slice(0, 10);
            return response;
        }));
    }

    suggestionsAsyncFn(observable:Observable<any>, viewModel, suggestions):Observable<any>{
        if(this.customSuggestionsAsyncFn[viewModel.model]){
            return this.customSuggestionsAsyncFn[viewModel.model](observable, viewModel, suggestions);
        }
        return observable.pipe(
        switchMap((term) => 
            this._http.get(viewModel.suggestions, {params:{q:term}}).pipe(
            catchError(()=>[]),
            map((response:any) => {
                let newResponse = {response:[], term:''};
                newResponse.response = response.items.map((item)=>{
                    return {label:item.login};
                });
                newResponse.term = term;
                return newResponse;
            }))
        ));
    }

    domainsStaticFn(observable:Observable<any>, viewModel, model):Observable<any>{
        if(this.customDomainsStaticFn[viewModel.model]){
            return this.customDomainsStaticFn[viewModel.model](observable, viewModel, model);
        }
        return observable.pipe(
        map(term => {
            let response = {response:viewModel.domains, term:term};
            if(term === ''){
                return response;
            }
            response.response = viewModel.domains.filter(v => {
                if(v[viewModel.bindLabel]){
                    return v[viewModel.bindLabel].toString().toLowerCase().indexOf(term.toLowerCase()) > -1
                }
                return v.toString().indexOf(term.toLowerCase()) > -1
            }).slice(0, 10);
            return response;
        }));
    }

    domainsAsyncFn(observable:Observable<any>, viewModel, model):Observable<any>{
        if(this.customDomainsAsyncFn[viewModel.model]){
            return this.customDomainsAsyncFn[viewModel.model](observable, viewModel, model);
        }
        
        return observable.pipe(
        switchMap((term) => this._http.get(viewModel.domains, {params:{q:term}})),
        catchError(()=>[]),
        map((response:any) => {
            return response.items.map((item)=>{
                return {label:item.login};
            });
        }));
    }

    set navigation(navigation){
        this._navigation = navigation;
    } 
    get navigation(){
        this.historyNavigation = this._navigation.pipe(take(2));
        return this._navigation;
    }

    public historyNavigation;
}