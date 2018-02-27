import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'checkbox-list',
    template: `
    <advanced-searchbox [template]="template" [model]="model" [openOnLoad]="true">
    </advanced-searchbox>
    <br/>
    <div>
      <h5>Model</h5>
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

export class ComponentsCheckboxListComponent {
  
  public model = {};
  public template = {};
  public codeHtml;
  public codeJs;

  constructor(){
    this.model = {"city": ['Milan','Paris']};
    this.template = [
      {
        'model': 'city',
        'type' : 'INPUT',
        'domains': ['Milan','Paris','Madrid','London'],
        'multiple' : '4',
        'label': 'City'
      }
    ];
    
    this.codeHtml = `
    <advanced-searchbox [template]="template" [model]="model" [openOnLoad]="true">
    </advanced-searchbox>
    `;

    this.codeJs = `
    public model = {};
    public template = {};

    constructor(_config:AsConfigService){
      this.model = {"city": [ 'pippo','pluto','paperino','paperone' ]};
      this.template = [
        {
          'type' : 'INPUT',
          'domains': ['pippo','pluto','paperino','paperone'],
          'multiple' : '4',
          'label': 'City'
        }
      ];
    `;
  }
}