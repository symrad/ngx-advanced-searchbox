import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AdvancedSearchBoxConfigService{

    suggestionsStaticFn(term, suggestions):Observable<Array<any>>{
        return Observable.of(term)
        .map(term => term === '' ? []
          : suggestions.filter(v => v.indexOf(term.toLowerCase()) > -1).slice(0, 10));
    }

    suggestionsAsyncFn(term, suggestions):Observable<Array<any>>{
        return Observable.of(term)
        .map(term => term === '' ? []
          : suggestions.filter(v => v.indexOf(term.toLowerCase()) > -1).slice(0, 10));
    }

    suggestiosFormatter = (x: {label: string}) => x;
}
