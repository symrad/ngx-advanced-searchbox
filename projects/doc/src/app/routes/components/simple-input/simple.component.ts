import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'components-simple',
    template: `
    <advanced-searchbox [template]="template" [model]="model" [openOnLoad]="true">
    </advanced-searchbox>
    <br/>
    <div>
      <code>
        {{model | json}}
      </code>
      <br/>
      <br/>
      <h5>Code</h5>
      <ngb-tabset>
        <ngb-tab title="Ts">
          <ng-template ngbTabContent>
            <pre><code highlight [code]="codeJs"></code></pre>
          </ng-template>
        </ngb-tab>
        <ngb-tab title="Html">
          <ng-template ngbTabContent>
            <pre><code highlight [code]="codeHtml"></code></pre>
          </ng-template>
        </ngb-tab>
      </ngb-tabset>
    </div>
    `,
    styles: [
        `
           .overflow-box {
               widht: 300px;
               padding: 5px;
               height: 100px;
               border: 1px solid #999;
               overflow: hidden;
           }
        `
    ]
})

export class ComponentsSimpleComponent {

  public model = {};
  public template: Array<{}> = [];
  public codeJs;
  public codeHtml;

  onEditNext(data) {}

  constructor(){

    this.model = 
    { "isEnabled": [ { "label": "Yes", "value": true } ], "cities": [ 'Milan','Paris' ]};

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
        'model': 'cities',
        'type' : 'INPUT',
        'domains': ['Milan','Paris','Madrid','London'],
        'multiple' : '4',
        'label': 'City'
      },
      {
        'model': 'names',
        'type' : 'INPUT',
        'suggestions': ['pippo', 'pluto', 'paperino'],
        'multiple' : '*',
        'label': 'Name'
      }
    ];

    this.codeJs = `
    constructor(){

      this.model = 
      { "isEnabled": [ { "label": "Yes", "value": true } ], "cities": [ 'Milan','Paris' ]};
  
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
          'model': 'cities',
          'type' : 'INPUT',
          'domains': ['Milan','Paris','Madrid','London'],
          'multiple' : '4',
          'label': 'City'
        },
        {
          'model': 'names',
          'type' : 'INPUT',
          'suggestions': ['pippo', 'pluto', 'paperino'],
          'multiple' : '*',
          'label': 'Name'
        }
      ];
    }
    `;

    this.codeHtml = `
      <advanced-searchbox [template]="template" [model]="model" [openOnLoad]="true">
      </advanced-searchbox>
    `;
  }
}