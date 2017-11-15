import { Component } from '@angular/core';
import { Search, API } from 'angular2-searchbox';
import { setTimeout } from 'timers';


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
    setTimeout(()=>{

    //this.model = { "completeName2": "kjhjkhjk", "email2": [ "ewrerw" ], "username2": { "username": { "test": { "test": [ "fdsfdsfsd", "fdsfdfds" ], "username3": [ { "op": "contains", "value": "fdsfsdfsd" }, { "op": "contains", "value": "fdsfsdffdsfsfs" }, { "op": "endsWith", "value": "fdsfssd" }, { "op": "startsWith", "value": "fdsfdsfs" }, { "op": "startsWith", "value": "fdsfsdfsdfsdfsd" }, { "op": "contains", "value": "fdsfdfdsfdsfsdfsd" }, { "op": "contains", "value": "fdsfdsfdsdsfsdfsd" } ] } } } };
    this.template = [{
      'model' : 'completeName2',
      'type' : 'INPUT',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Nome Completo',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'domains': [{'label':'ciao'}, {'label':'ciao1'}, {'label':'ciao2'}],
      'required' : false,
      'multiple' : false
    }, {
      'model' : 'email2',
      'type' : 'INPUT',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Email',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'required' : false,
      'multiple' : '*'
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
      'model' : 'username2.username.test.test',
      'type' : 'INPUT',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Username',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'required' : false,
      'multiple' : '*'
    },
    {
      'model' : 'username2.username.test.username3',
      'type' : 'OPERATORS',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Username 3',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'suggestions': [{'label':'ciao'}, {'label':'ciao1'}, {'label':'ciao2'}],
      'required' : false,
      'multiple' : '*'
    }
    ];
    },1000);
  }
}
