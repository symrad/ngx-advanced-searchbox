import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'input-with-suggestions',
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
      <pre><code highlight [code]="codeJs"></code></pre>
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

export class InputWithSuggestionsComponent {
  
  public model = {};
  public template = {};
  public codeHtml;
  public codeJs;

  constructor(){
    this.model = {"name": [ "pippo" ]};
    this.template = [
      {
        'model': 'name',
        'type' : 'INPUT',
        'suggestions': ['pippo', 'pluto', 'paperino'],
        'multiple' : '*',
        'label': 'Name'
      }
    ];
    this.codeJs = `
      public model = {};
      public template = {};

      constructor(_config:AsConfigService){
        this.model = {"name": [ "pippo" ]};
        this.template = [
          {
            'model': 'name',
            'type' : 'INPUT',
            'suggestions': ['pippo', 'pluto', 'paperino'],
            'multiple' : '*',
            'label': 'Name'
          }
        ];
      }`;
  }
}