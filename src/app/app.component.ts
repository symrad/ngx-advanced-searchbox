import { Component } from '@angular/core';
import { Search, API } from 'angular2-searchbox';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  model = {email2: 'ewrerw', username3: [{op: 'contains', value: 'fdsfdsfdsfdsfsd'}]};
  public template: Array<{}> = [{
    'model' : 'completeName2',
    'type' : 'INPUT',
    'inputType' : 'TEXT',
    'position' : 2147483647,
    'label' : 'Nome Completo',
    'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
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
    'multiple' : false
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
    'model' : 'username2',
    'type' : 'INPUT',
    'inputType' : 'TEXT',
    'position' : 2147483647,
    'label' : 'Username',
    'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
    'required' : false,
    'multiple' : false
  },
  {
    'model' : 'username3',
    'type' : 'MULTI',
    'inputType' : 'TEXT',
    'position' : 2147483647,
    'label' : 'Username 3',
    'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
    'required' : false,
    'multiple' : '*'
  }
  ];


  onEditNext(data) {
    // console.log(data);
  }
}
