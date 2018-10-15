import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'components-operators',
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

export class ComponentsOperatorsInputComponent {

  public model = {};
  public template: Array<{}> = [];
  public codeJs;
  public codeHtml;

  onEditNext(data) {
    
  }

  constructor(){

    this.model = {};
    this.template = [
    {
        'model' : 'birth.from',
        'type' : 'OPERATORS',
        'inputType' : 'TEXT',
        'position' : 4,
        'label' : 'Birth from',
        'operators' : [ 'ge','gt','eq'],
        'multiple' : false,
        'mask':{
          mask:'99-99-9999'
        }
    },
    {
        'model' : 'birth.to',
        'type' : 'OPERATORS',
        'inputType' : 'TEXT',
        'position' : 5,
        'label' : 'Birth to',
        'operators' : [ 'le', 'lt'],
        'multiple' : false,
        'mask':{
          mask:'99-99-9999'
        }
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
      
    }
    ];

    this.codeJs = `
    constructor(){

      this.model = {};
      this.template = [
        {
          'model' : 'birth.from',
          'type' : 'OPERATORS',
          'inputType' : 'TEXT',
          'position' : 4,
          'label' : 'Birth from',
          'operators' : [ 'ge','gt','eq'],
          'multiple' : false,
          'mask':{
            mask:'99-99-9999'
          }
        },
        {
          'model' : 'birth.to',
          'type' : 'OPERATORS',
          'inputType' : 'TEXT',
          'position' : 5,
          'label' : 'Birth to',
          'operators' : [ 'le', 'lt'],
          'multiple' : false,
          'mask':{
            mask:'99-99-9999'
          }
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