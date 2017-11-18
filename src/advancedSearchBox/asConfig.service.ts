import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rx-dom";

@Injectable()
export class AsConfigService{

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

    suggestionsFormatter = (x: {label: string}) => {
       return x;
    };

    domainsStaticFn(term, suggestions):Observable<Array<any>>{
        return Observable.of(term)
        .map(term => term === '' ? suggestions
          : suggestions.filter(v => {
              return v.label.indexOf(term.toLowerCase()) > -1
          }).slice(0, 10));
    }

    domainsAsyncFn(term, suggestions):Observable<Array<any>>{
        return Observable.of(term)
        .map(term => term === '' ? suggestions
          : suggestions.filter(v => v.label.indexOf(term.toLowerCase()) > -1).slice(0, 10));
    }

    domainsFormatter = (x: {label: string}) => {
       return x.label;
    };

    private _navigation = new ReplaySubject(2);
    set navigation(navigation){
        this._navigation = navigation;
    } 
    get navigation(){
        this.historyNavigation = this._navigation.take(2);
        return this._navigation;
    }

    public historyNavigation;
}