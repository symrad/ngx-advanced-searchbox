import { HttpClient } from '@angular/common/http';
import { AsConfigService } from 'ngx-advanced-searchbox';
import { Component, OnInit } from '@angular/core';
import { pipe } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";


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
    <h4 class="bd-title">
      With remote data source
    </h4>
    <advanced-searchbox [template]="templateAsync" [model]="modelAsync" [openOnLoad]="false">
    </advanced-searchbox>
    <br/>
    <div>
      <h5>Model</h5>
      <code>
        {{modelAsync | json}}
      </code>
      <br/>
      <br/>
      <h5>Code</h5>
      <ngb-tabset>
        <ngb-tab title="Ts">
          <ng-template ngbTabContent>
            <pre><code highlight [code]="codeJsAsync"></code></pre>
          </ng-template>
        </ngb-tab>
        <ngb-tab title="Html">
          <ng-template ngbTabContent>
            <pre><code highlight [code]="codeHtmlAsync"></code></pre>
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

    this.codeHtml = `
      <advanced-searchbox [template]="template" [model]="model" [openOnLoad]="true">
      </advanced-searchbox>
    `;

    this.templateAsync = [
      {
        'model': 'youtube',
        'type' : 'INPUT',
        'suggestions': 'https://www.googleapis.com/youtube/v3/search',
        'multiple' : '*',
        'label': 'Youtube video'
      }
    ];

    this.codeJsAsync = `
      public model = {};
      public template = {};

      constructor(_config:AsConfigService){
        this.template = [
          {
            'model': 'youtube',
            'type' : 'INPUT',
            'suggestions': 'https://www.googleapis.com/youtube/v3/search',
            'multiple' : '*',
            'bindLabel':'label',
            'label': 'Youtube video'
          }
        ];

        _config.customSuggestionsAsyncFn['youtube'] = (observable, viewModel, model) => {
          return observable
          .switchMap((term) => {
              return _http.get('https://www.googleapis.com/youtube/v3/search', {params:{
                  q:term,
                  key: '{your key}',
                  type: 'video',
                  maxResults: '12',
                  part: 'id,snippet'
                  }})
                  .catch(()=>[])
                  .map((response:any) => {
                      let newResponse = {response:[], term:''};
                      newResponse.response = response.items.map((item)=>{
                          return item.snippet.title;
                      });
                      newResponse.term = term;
                      return newResponse;
                  })
              }
          );
        }
      }`;

    this.codeHtmlAsync = `
      <advanced-searchbox [template]="template" [model]="model" [openOnLoad]="true">
      </advanced-searchbox>
    `;

    _config.customSuggestionsAsyncFn['youtube'] = (observable, viewModel, model) => {
      return observable.pipe(
      switchMap((term) => {
          return _http.get('https://www.googleapis.com/youtube/v3/search', {params:{
              q:term,
              key: 'AIzaSyBafKFrisguQvT3WC20Q972uxS1cZfPvg8',
              type: 'video',
              maxResults: '12',
              part: 'id,snippet'
              }}).pipe(
              catchError(()=>[]),
              map((response:any) => {
                  let newResponse = {response:[], term:''};
                  newResponse.response = response.items.map((item)=>{
                      return item.snippet.title;
                  });
                  newResponse.term = term;
                  return newResponse;
              }))
          }
      ));
    }
  }
}