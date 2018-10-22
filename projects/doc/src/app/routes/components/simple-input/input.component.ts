import { Component } from "@angular/core";

@Component({
    selector: 'free-input',
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
    </div>`,
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
export class ComponentsInputComponent{

    public model;
    public codeJs;
    public codeHtml;
    public template;

    constructor(){

        this.model = {};
        this.template = [
            {
              'model': 'vatNumber',
              'type' : 'INPUT',
              'multiple' : false,
              'label': 'VAT number'
            }
        ];

        this.codeHtml = `
            <advanced-searchbox [template]="template" [model]="model" [openOnLoad]="true">
            </advanced-searchbox>
        `;

        this.codeJs = `
            public model;
            public template;

            constructor(){
                this.model = {};
                this.template = [
                    {
                    'model': 'vatNumber',
                    'type' : 'INPUT',
                    'multiple' : false,
                    'label': 'VAT number'
                    }
                ];
            }
        `;

    }

}