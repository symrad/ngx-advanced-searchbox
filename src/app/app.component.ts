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
    
  }

  constructor(){
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
    */


    this.model = { "city": [ 1 ] };
    this.template = [
      {
        'model' : 'isEnabled',
        'type' : 'INPUT',
        'inputType' : 'TEXT',
        'position' : 1,
        'label' : 'Enabled',
        'domains': [{label:'Yes', value:true}, {label:'No', value:false}],
        'multiple' : '1',
        'bindLabel': 'label'
      },
      {
        'model' : 'city',
        'type' : 'INPUT',
        'inputType' : 'TEXT',
        'position' : 2,
        'label' : 'Città',
        'domains': [{label:'Berlin', value:1}, {label:'London', value:2}, {label:'Milan', value:3}, {label:'Paris', value:4}],
        'multiple' : '4',
        'bindLabel': 'label',
        formatModelValue: function(val){
          if(val){
            return val.value;
          }
          return val;
        },
        formatModelViewValue: function(val, template, domains){
          var domainsFiltered = template.domains.filter((par)=>{
            return par.value == val;
          });
          if(domainsFiltered.length>0){
            return domainsFiltered[0]
          }
          return val;
          
          //return {label:'Berlin', value:1};
        }
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
        formatModelValue: function(val){
          const newVal = Object.assign({},val);
          const daySplitted = val.value.split('-');
          newVal.value = new Date(parseInt(daySplitted[2]),parseInt(daySplitted[1])-1,parseInt(daySplitted[0]),12);
          return newVal;
        },
        formatModelViewValue: function(val){
          const newVal = Object.assign({},val);
          newVal.value = new Date(val.value);
          newVal.value = newVal.value.getDate()  + "-" + (newVal.value.getMonth()+1) + "-" + newVal.value.getFullYear();
          return newVal;
        },
        'mask':{
          mask:'99-99-9999'
        }
    },
    {
        'model' : 'birth.to',
        'type' : 'OPERATORS',
        'inputType' : 'TEXT',
        'position' : 5,
        'label' : 'Data di nascita a',
        'operators' : [ 'le', 'lt'],
        'multiple' : false,
        formatModelValue: function(val){
          const newVal = Object.assign({},val);
          const daySplitted = val.value.split('-');
          newVal.value = new Date(parseInt(daySplitted[2]),parseInt(daySplitted[1])-1,parseInt(daySplitted[0]),12);
          return newVal;
        },
        formatModelViewValue: function(val){
          const newVal = Object.assign({},val);
          newVal.value = new Date(val.value);
          newVal.value = newVal.value.getDate()  + "-" + (newVal.value.getMonth()+1) + "-" + newVal.value.getFullYear();
          return newVal;
        },
        'mask':{
          mask:'99-99-9999'
        }
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
      'multiple' : '1',
      'bindLabel': 'label',
      'bindValue': 'label'
    },
    {
      'model' : 'github',
      'type' : 'INPUT',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Github Users',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'suggestions': 'https://api.github.com/search/users',
      'required' : false,
      'multiple' : '3',
      'bindLabel': 'label',
      'bindValue': 'label'
      
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
      'bindLabel': 'label',
      'bindValue': 'label'
      
    },
    {
      'model' : 'test',
      'type' : 'OPERATORS',
      'inputType' : 'TEXT',
      'position' : 2147483647,
      'label' : 'Test',
      'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],
      'domains': [{'label':'disoccupato','id':'1'}, {'label':'impiegato',id:'2'}, {'label':'operaio',id:'3'}],
      'required' : false,
      'multiple' : '3',
      'bindLabel': 'label',
      'bindValue': 'id'
    },
    ];
//    },10000);
  }
}
