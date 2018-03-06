import { HttpClient } from '@angular/common/http';
import { AsConfigService } from 'ngx-advanced-searchbox';
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
      <pre><code highlight [code]="codeJsAsync"></code></pre>
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

  public modelAsync = {};
  public templateAsync = {};
  public codeHtmlAsync;
  public codeJsAsync;

  constructor(_config:AsConfigService, _http:HttpClient){
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


    this.templateAsync = [
      {
        'model': 'youtube',
        'type' : 'INPUT',
        'domains': 'https://www.googleapis.com/youtube/v3/search',
        'multiple' : '4',
        'label': 'youtube',
        'bindLabel' : 'label'
      }
    ];
    
    this.codeHtmlAsync = `
    <advanced-searchbox [template]="template" [model]="model" [openOnLoad]="true">
    </advanced-searchbox>
    `;

    this.codeJsAsync = `
    public model = {};
    public template = {};

    constructor(_config:AsConfigService, _http:HttpClient){
      this.template = [
        {
          'model': 'youtube',
          'type' : 'INPUT',
          'domains': 'https://www.googleapis.com/youtube/v3/search',
          'multiple' : '4',
          'bindLabel' : 'label',
          'label': 'youtube'
        }

        _config.customDomainsAsyncFn['youtube'] = (observable, viewModel, model) => {
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
                          return {label:item.snippet.title};
                      });
                      newResponse.term = term;
                      return newResponse;
                  })
              }
          );
        }
      ];
    `;

    _config.customDomainsAsyncFn['youtube'] = (observable, viewModel, model) => {
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