import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  model = {};
  // model = { "completeName2": "kjhjkhjk", "email2": [ "ewrerw" ], "username2": { "username": { "test": { "test": [ "fdsfdsfsd", "fdsfdfds" ], "username3": [ { "op": "contains", "value": "fdsfsdfsd" }, { "op": "contains", "value": "fdsfsdffdsfsfs" }, { "op": "endsWith", "value": "fdsfssd" }, { "op": "startsWith", "value": "fdsfdsfs" }, { "op": "startsWith", "value": "fdsfsdfsdfsdfsd" }, { "op": "contains", "value": "fdsfdfdsfdsfsdfsd" }, { "op": "contains", "value": "fdsfdsfdsdsfsdfsd" } ] } } } };
  public template: Array<{}> = [];
  public validators: {[key: string]: Validators};
  public form: FormGroup;
  public viewModel;
  public operators;

  onEditNext(data) {
    console.log(data);
  }

  constructor() {

//    setTimeout(()=>{
    /*
    switch/radioList
        'domains': [{label:'SI', value:true}, {label:'NO', value:false}],
        'multiple' : '1',
        'bindLabel': 'label',
        'bindValue': 'value'
    checkboxList
        'domains': [{label:'Berlin', value:1}, {label:'London', value:2}, {label:'Milan', value:3}, {label:'Paris', value:4}],
        'multiple' : '4',
        'bindLabel': 'label',
        'bindValue': 'value'
    tags with suggestions
        'suggestions': ['pippo@pippo.com', 'paperino@paperino.com', 'pluto@pluto.com'],
        'multiple' : '*'
    range
        {
          'model' : 'birth.from',
          'type' : 'OPERATORS',
          'label' : 'Data di nascita da',
          'operators' : [ 'le'],
          'multiple' : false,
          'mask':{
            mask:'99-99-9999'
          }
        },
        {
          'model' : 'birth.to',
          'type' : 'OPERATORS',
          'label' : 'Data di nascita a',
          'operators' : [ 'ne', 'ge'],
          'multiple' : false,
          'mask':{
            mask:'99-99-9999'
          }
        }
      autocomplete
      con formatModelViewValue e formatModelValue non si può mettere bindValue (solo bindLabel)
    */


    this.model = {
      // 'isEnabled': [{ 'label': 'Yes', 'value': true } ],
      // 'city': [ 1, 2, 3, 4 ],
      // 'youtube': [
        // 'Marvel Studios\' Avengers: Infinity War Official Trailer',
        // 'Atalanta vs Juventus 0-1 ● All Goals & Highlights HD ● 30 Jan 2018 - Coppa Italia' ]
    };
    this.template = [
      {
        'model' : 'isEnabled',
        'type' : 'INPUT',
        'inputType' : 'TEXT',
        'position' : 1,
        'label' : 'Enabled',
        'domains': [{label: 'Yes', value: true}, {label: 'No', value: false}],
        'multiple' : '1',
        'bindLabel': 'label'
      },
      {
        'model' : 'city',
        'type' : 'INPUT',
        'inputType' : 'TEXT',
        'position' : 2,
        'label' : 'Città',
        'domains': [{label: 'Berlin', value: 1}, {label: 'London', value: 2}, {label: 'Milan', value: 3}, {label: 'Paris', value: 4}],
        'multiple' : '4',
        'bindLabel': 'label'
      },
      {
        'model' : 'email',
        'type' : 'INPUT',
        'inputType' : 'TEXT',
        'position' : 3,
        'label' : 'E-mail',
        'suggestions': ['pippo@pippo.com', 'paperino@paperino.com', 'pluto@pluto.com'],
        'multiple' : '*'
    },
    {
        'model' : 'birth.from',
        'type' : 'OPERATORS',
        'inputType' : 'TEXT',
        'position' : 4,
        'label' : 'Data di nascita da',
        'operators' : [ 'ge'],
        'multiple' : false,
        'mask': {
          mask: '99-99-9999'
        }
    },
    {
        'model' : 'birth.to',
        'type' : 'OPERATORS',
        'inputType' : 'TEXT',
        'position' : 5,
        'label' : 'Data di nascita a',
        'operators' : [ 'le', 'lt', 'isNot'],
        'multiple' : false,
        'mask': {
          mask: '99-99-9999'
        }
    },
    {
      'model' : 'occupazione',
      'type' : 'OPERATORS',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Occupazione',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'domains': [{'label': 'disoccupato'}, {'label': 'impiegato'}, {'label': 'operaio'}],
      'required' : false,
      'multiple' : '1',
      'bindLabel': 'label',
      'bindValue': 'label'
    },
    {
      'model' : 'gmap',
      'type' : 'OPERATORS',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Location',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'suggestions': 'https://maps.googleapis.com/maps/api/place/textsearch/json',
      'required' : false,
      'multiple' : '3',
      'bindLabel': 'label'
    },
    {
      'model' : 'youtube',
      'type' : 'INPUT',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Youtube users',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'domains': 'https://api.github.com/search/users',
      'required' : false,
      'multiple' : '3',
      'bindLabel' : 'label'
    },
    {
      'model' : 'test',
      'type' : 'OPERATORS',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Test',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'domains': [{'label': 'disoccupato', id: '1'}, {'label': 'impiegato', id: '2'}, {'label': 'operaio', id: '3'}],
      'required' : false,
      'multiple' : '3',
      'bindLabel': 'label',
      'bindValue': 'id'
    },
    {
      'model' : 'freeInput',
      'type' : 'INPUT',
      'inputType' : 'TEXT',
      'position' : 3,
      'label' : 'Free input',
      'multiple' : false,
      'mask': {
        mask: '99-99-9999'
      }
  }
    ];
//    },10000);

    this.validators = {
      isEnabled: [Validators.required],
      email: [Validators.email]
    };
    this.form = new FormGroup({});

    this.form.valueChanges.subscribe((res) => {
      console.log(res);
    });
    this.form.statusChanges.subscribe((res) => {
      console.log(res);
    });
    this.operators = {
      isNot: 'is not',
    };
  }

  onAddFilter(filter) {
  }
  onChangeViewModel(viewModel) {
    this.viewModel = viewModel;
  }
}
