import { ComponentsInputComponent } from './routes/components/simple-input/input.component';
import { AppService } from './app.service';
import { ComponentsRangeComponent } from './routes/components/operators-input/range.component';
import { ComponentsOperatorsInputComponent } from './routes/components/operators-input/operators.component';
import { Component } from '@angular/core';
import { ComponentsComponent } from './layout/components.page';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AsBoxModule, AsConfigService } from 'ngx-advanced-searchbox';
import { AppConfigService } from './appConfig.service';
import { RouterModule } from '@angular/router'
import { LayoutHeaderComponent } from './layout/header.component';
import { LayoutSidenavComponent } from './layout/sidenav.component';
import { ComponentsSimpleComponent } from './routes/components/simple-input/simple.component';
import { ComponentsRadioSelectSwitchComponent } from './routes/components/simple-input/radioSelectSwitch.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ComponentsCheckboxListComponent } from './routes/components/simple-input/checkboxList.component';
import { ComponentsInputWithSuggestionsComponent } from './routes/components/simple-input/inputWithSuggestions.component';
import { GettingStartedComponent } from './layout/gettingStarted.page';
import { GettingStartedMainComponent } from './routes/getting-started/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ComponentsInputWithMaskComponent } from './routes/components/simple-input/inputWithMask.component';
import { ApiComponent } from './layout/api.page';
import { ApiMainComponent } from './routes/development/main.component';
 
var appRoutes = [
  {
      path: '',
      redirectTo: '/getting-started',
      pathMatch: 'full'
  },
  {
    path:'getting-started',
    component:GettingStartedComponent,
    children:[
      {path:'', component:GettingStartedMainComponent, data:{title: 'Getting started'}}
    ]
  },
  {
    path:'components',
    component:ComponentsComponent,
    children:[
      { path:'',
        redirectTo:'/components/simple-input',
        pathMatch: 'full',
      },
      { path: 'simple-input', children:[
        { path: '', component: ComponentsSimpleComponent, data: { title: 'Simple input' }},
        { path: 'input', component: ComponentsInputComponent, data: { title: 'Input' }},
        { path: 'input-with-mask', component: ComponentsInputWithMaskComponent, data: { title: 'Input with mask' }},
        { path: 'radio-select-switch', component: ComponentsRadioSelectSwitchComponent, data: { title: 'Radio - Select - Switch' } },
        { path: 'checkboxlist', component: ComponentsCheckboxListComponent, data: { title: 'Checkbox List' } },
        { path: 'input-with-suggestions', component: ComponentsInputWithSuggestionsComponent, data: { title: 'Input with suggestions' } },
      ]},
      { path: 'general', component: ComponentsSimpleComponent, data: { title: 'General' } },
      { path: 'operators-input', children:[
        { path: '', component: ComponentsOperatorsInputComponent, data: { title: 'Operators input' } },
        { path: 'range', component: ComponentsRangeComponent, data: { title: 'Range' } }
      ]}
    ]
  },
  {
    path:'api',
    component:ApiComponent,
    children:[
      {path:'', component:ApiMainComponent, data:{title: 'Api'}}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutSidenavComponent,
    ComponentsSimpleComponent,
    ComponentsInputComponent,
    ComponentsRadioSelectSwitchComponent,
    ComponentsCheckboxListComponent,
    ComponentsInputWithSuggestionsComponent,
    GettingStartedComponent,
    ComponentsComponent,
    GettingStartedMainComponent,
    ComponentsOperatorsInputComponent,
    ComponentsRangeComponent,
    ComponentsInputWithMaskComponent,
    ApiComponent,
    ApiMainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AsBoxModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {
          useHash: true
      }
    ),
    HighlightModule.forRoot({path: environment.assetsPath+'/lib/hljs'}),
    ServiceWorkerModule.register('/ngx-advanced-searchbox/dist/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    {provide:AsConfigService, useClass:AppConfigService},
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
