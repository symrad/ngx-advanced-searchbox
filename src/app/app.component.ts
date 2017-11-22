import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  model = {};
  //model = { "completeName2": "kjhjkhjk", "email2": [ "ewrerw" ], "username2": { "username": { "test": { "test": [ "fdsfdsfsd", "fdsfdfds" ], "username3": [ { "op": "contains", "value": "fdsfsdfsd" }, { "op": "contains", "value": "fdsfsdffdsfsfs" }, { "op": "endsWith", "value": "fdsfssd" }, { "op": "startsWith", "value": "fdsfdsfs" }, { "op": "startsWith", "value": "fdsfsdfsdfsdfsd" }, { "op": "contains", "value": "fdsfdfdsfdsfsdfsd" }, { "op": "contains", "value": "fdsfdsfdsdsfsdfsd" } ] } } } };
  public template: Array<{}> = [];

  


  onEditNext(data) {
    // console.log(data);
  }

  constructor(){
    //setTimeout(()=>{

    this.model = { "name": "simone" };
    this.template = [{
      'model' : 'name',
      'type' : 'INPUT',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Nome Completo',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'suggestions': ['simone', 'marco', 'luca', 'matteo'],
      'required' : false,
      'multiple' : false
    }, {
      'model' : 'email',
      'type' : 'INPUT',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Email',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'required' : false,
      'multiple' : '2'
    },
    /*
    , {
      'model' : 'enabled',
      'type' : 'RANGE',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Attivo',
      'domain' : [ {
        'value' : false,
        'label' : 'No'
      }, {
        'value' : true,
        'label' : 'Si'
      } ],
      'required' : false,
      'multiple' : true
    },
    */
    {
      'model' : 'birth.from',
      'type' : 'OPERATORS',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Data di nascita da',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'required' : false,
      'multiple' : false
    },
    {
      'model' : 'birth.to',
      'type' : 'OPERATORS',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Data di nascita a',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'required' : false,
      'multiple' : false
    },
    {
      'model' : 'occupazione',
      'type' : 'INPUT',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Occupazione',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'domains': [{'label':'disoccupato'}, {'label':'impiegato'}, {'label':'operaio'}],
      'required' : false,
      'multiple' : '*'
    }
    ];
    //},1000);
  }
}
