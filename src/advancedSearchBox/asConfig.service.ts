import { ViewModelInterface } from './asViewModel.interface';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FunctionCall } from '@angular/compiler';

@Injectable()
export class AsConfigService{

    private _navigation:ReplaySubject<any> = new ReplaySubject(2);

    public customDomainsModelFormatter:{[key:string]:(viewModel:ViewModelInterface,val:any)=>any} = {};
    public customSuggestionsFormatter:{[key:string]:(viewModel:ViewModelInterface)=>any} = {};

    public formatModelValue:{[key:string]:(val:any)=>Object|String} = {};
    public formatModelViewValue:{[key:string]:(val:any, template:any)=>Object|String} = {};

    public customSuggestionsStaticFn:{[key: string]:(observable:Observable<any>,viewModel:ViewModelInterface,model:any)=>any} = {};
    public customSuggestionsAsyncFn:{[key: string]:(observable:Observable<any>,viewModel:ViewModelInterface,model:any)=>any} = {};
    public customDomainsStaticFn:{[key: string]:(observable:Observable<any>,viewModel:ViewModelInterface,model:any)=>any} = {};
    public customDomainsAsyncFn:{[key: string]:(observable:Observable<any>,viewModel:ViewModelInterface,model:any)=>any} = {};
    
    public domainsFormatter:(viewModel:ViewModelInterface,model:any)=>any;
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

    suggestionsStaticFn(observable, viewModel, suggestions):Observable<Array<any>>{
        if(this.customSuggestionsStaticFn[viewModel.model]){
            return this.customSuggestionsStaticFn[viewModel.model](observable, viewModel, suggestions);
        }
        return observable
        .map(term => {
            let response = {response:suggestions, term:term};
            if(term === ''){
                return response;
            }
            response.response = suggestions.filter(v => {
                return v.indexOf(term.toLowerCase()) > -1
            }).slice(0, 10);
            return response;
        });
    }

    suggestionsAsyncFn(observable, viewModel, suggestions):Observable<Array<any>>{
        if(this.customSuggestionsAsyncFn[viewModel.model]){
            return this.customSuggestionsAsyncFn[viewModel.model](observable, viewModel, suggestions);
        }
        return observable
        .switchMap((term) => 
            this._http.get(viewModel.suggestions, {params:{q:term}})
            .catch(()=>[])
            .map((response:any) => {
                let newResponse = {response:[], term:''};
                newResponse.response = response.items.map((item)=>{
                    return {label:item.login};
                });
                newResponse.term = term;
                return newResponse;
            })
        );
    }

    domainsStaticFn(observable, viewModel, model):Observable<Array<any>>{
        if(this.customDomainsStaticFn[viewModel.model]){
            return this.customDomainsStaticFn[viewModel.model](observable, viewModel, model);
        }
        return observable
        .map(term => {
            let response = {response:viewModel.domains, term:term};
            if(term === ''){
                return response;
            }
            response.response = viewModel.domains.filter(v => {
                if(v[viewModel.bindLabel]){
                    return v[viewModel.bindLabel].toLowerCase().indexOf(term.toLowerCase()) > -1
                }
                return v.indexOf(term.toLowerCase()) > -1
            }).slice(0, 10);
            return response;
        });
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