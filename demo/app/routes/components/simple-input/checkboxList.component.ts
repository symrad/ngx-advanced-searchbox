import { Observable } from 'rxjs';
import { AppService } from './../../../app.service';
import { HttpClient } from '@angular/common/http';
import { AsConfigService } from 'ngx-advanced-searchbox';
import { Component, OnInit } from '@angular/core';
import { pipe } from "rxjs";
import { switchMap, map } from "rxjs/operators";

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

export class ComponentsCheckboxListComponent {
  
  public model = {};
  public template = {};
  public codeHtml;
  public codeJs;

  public modelAsync = {};
  public templateAsync = {};
  public codeHtmlAsync;
  public codeJsAsync;

  constructor(_config:AsConfigService, _http:HttpClient, public service:AppService){
    this.model = {"cities": ['Milan','Paris']};
    this.template = [
      {
        'model': 'cities',
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
        this.model = {"cities": ['Milan','Paris']};
        this.template = [
          {
            'model': 'cities',
            'type' : 'INPUT',
            'domains': ['Milan','Paris','Madrid','London'],
            'multiple' : '4',
            'label': 'City'
          }
        ];
    `;

    this.templateAsync = [
      {
        'model': 'capital',
        'type' : 'INPUT',
        'domains': 'domains',
        'multiple' : '4',
        'label': 'capital',
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

      constructor(_config:AsConfigService, _http:HttpClient, public service:AppService){
        this.template = [
          {
            'model': 'capital',
            'type' : 'INPUT',
            'domains': 'domains',
            'multiple' : '4',
            'bindLabel' : 'label',
            'label': 'capital'
          }

          _config.customDomainsAsyncFn['capital'] = (observable, viewModel, model) => {
            return observable
            .switchMap((term) => {
                return this.service.getMockCapital(term,'capital')
                .map((response:any) => {
                  let newResponse = {response:response, term:term};
                  return newResponse;
                });
              }
            );
          }
        ];
    `;

    _config.customDomainsAsyncFn['capital'] = (observable, viewModel, model) => {
      return observable.pipe(
      switchMap((term):Observable<{response:Array<any>,term:string}> => {
          return this.service.getMockCapital(term).pipe(
          map((response:any) => {
            let newResponse = {response:response, term:term};
            return newResponse;
          }));
        }
      ));
    }
  }
}