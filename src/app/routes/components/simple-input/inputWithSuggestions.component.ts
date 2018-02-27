import { HttpClient } from '@angular/common/http';
import { AsConfigService } from 'ngx-advanced-searchbox';
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
    <h2 class="bd-title">
      Remote data source
    </h2>
    <advanced-searchbox [template]="templateAsync" [model]="modelAsync" [openOnLoad]="true">
    </advanced-searchbox>

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

export class ComponentsInputWithSuggestionsComponent {
  
  public model = {};
  public template = {};
  public codeHtml;
  public codeJs;

  public modelAsync = {};
  public templateAsync = {};
  public codeHtmlAsync;
  public codeJsAsync; 

  constructor(_config:AsConfigService, _http:HttpClient){
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

    this.templateAsync = [
      {
        'model': 'nameAsync',
        'type' : 'INPUT',
        'suggestions': 'https://www.googleapis.com/youtube/v3/search',
        'multiple' : '*',
        'label': 'Name'
      }
    ];

    _config.customSuggestionsAsyncFn['nameAsync'] = (observable, viewModel, model) => {
      return observable
      .switchMap((term) => {
          return _http.get('https://www.googleapis.com/youtube/v3/search', {params:{
              q:term,
              key: 'AIzaSyBafKFrisguQvT3WC20Q972uxS1cZfPvg8',
              type: 'video',
              maxResults: '12',
              part: 'id,snippet'
              }})
              .catch(()=>[])
              .map((response:any) => {
                  let newResponse = {response:[], term:''};
                  newResponse.response = response.items.map((item)=>{
                      return {label:item.snippet.title};
                  });
                  newResponse.term = term;
                  return newResponse;
              })
          }
      );
    }
  }
}