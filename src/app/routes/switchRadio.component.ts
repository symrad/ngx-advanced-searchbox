import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'switch-radio',
    template: `
    <advanced-searchbox [template]="template" [model]="model" [openOnLoad]="true">
    </advanced-searchbox>
  <br/>
  <div>
    <code>
      {{model | json}}
    </code>
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

export class SwitchRadioComponent {
  
  public model = {};
  public template = {};
  public codeHtml;
  public codeJs;

  constructor(){
    this.model = { "isEnabled": [ { "label": "Yes", "value": true } ]};
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
      }
    ];
    this.codeJs = `
      public model = {};
      public template = {};

      constructor(){
        this.model = { "isEnabled": [ { "label": "Yes", "value": true } ]};
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
          }
        ];
      }`;
  }
}