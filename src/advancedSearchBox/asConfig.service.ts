import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AsConfigService{

    suggestionsStaticFn(term, suggestions):Observable<Array<any>>{
        return Observable.of(term)
        .map(term => term === '' ? suggestions
          : suggestions.filter(v => {
              return v.label.indexOf(term.toLowerCase()) > -1
          }).slice(0, 10));
    }

    suggestionsAsyncFn(term, suggestions):Observable<Array<any>>{
        return Observable.of(term)
        .map(term => term === '' ? suggestions
          : suggestions.filter(v => v.label.indexOf(term.toLowerCase()) > -1).slice(0, 10));
    }

    suggestionsFormatter = (x: {label: string}) => {
       return x.label
    };
}
