import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import 'rxjs/add/operator/take';

@Injectable()
export class AsConfigService{

    private _navigation;
    public suggestionsFormatter;
    public domainsFormatter;
    
    constructor(){
        this._navigation = new ReplaySubject(2);
        this.suggestionsFormatter = (x: {label: string}) => {
            return x;
        }; 
        this.domainsFormatter = (x: {label: string}) => {
            return x.label;
        };
    }

    suggestionsStaticFn(term, suggestions):Observable<Array<any>>{
        return Observable.of(term)
        .map(term => term === '' ? suggestions
          : suggestions.filter(v => {
              return v.indexOf(term.toLowerCase()) > -1
          }).slice(0, 10));
    }

    suggestionsAsyncFn(term, suggestions):Observable<Array<any>>{
        return Observable.of(term)
        .map(term => term === '' ? suggestions
          : suggestions.filter(v => v.indexOf(term.toLowerCase()) > -1).slice(0, 10));
    }

    domainsStaticFn(term, viewModel, model):Observable<Array<any>>{
        return Observable.of(term)
        .map(term => term === '' ? viewModel.domains
          : viewModel.domains.filter(v => {
              return v.label.indexOf(term.toLowerCase()) > -1
          }).slice(0, 10));
    }

    domainsAsyncFn(response, viewModel, model):Observable<Array<any>>{
        return Observable.of(response.items)
        .map(items => {
            return items.map((item)=>{
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