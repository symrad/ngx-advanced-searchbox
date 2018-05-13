import { Injectable } from "@angular/core";
import { Observable, of, pipe } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable()
export class AppService{
    getMockCapital(term: string = null): Observable<any> {
        let items = getMockCapital();
        if (term) {
            items = items.filter(x => x.label.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
        }
        return Observable.create(function(observer) {
            observer.next(items);   
        },500);
    }
}

function getMockCapital() {
    return [
        {label:'Rome', value:1},
        {label:'London', value:2}, 
        {label:'Berlin', value:3}, 
        {label:'Paris', value:4},
        {label:'Lisbon', value:5},
        {label:'Madrid', value:6}, 
        {label:'Tirana', value:7}, 
        {label:'Buenos Aires', value:8},
        {label:'Vienna', value:9},
        {label:'Canberra', value:10}, 
        {label:'Brussels', value:11}, 
        {label:'Sarajevo', value:12},
        {label:'Brasilia', value:13},
        {label:'Sofia', value:14}, 
        {label:'Athens', value:15}, 
        {label:'Budapest', value:16}

    ]
}