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
import { ComponentsSimpleComponent } from './routes/components/simple.component';
import { ComponentsSwitchRadioComponent } from './routes/components/switchRadio.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ComponentsCheckboxListComponent } from './routes/components/checkboxList.component';
import { ComponentsInputWithSuggestionsComponent } from './routes/components/inputWithSuggestions.component';
import { ComponentsRangeComponent } from './routes/components/range.component';
import { GettingStartedComponent } from './layout/gettingStarted.page';
import { GettingStartedMainComponent } from './routes/getting-started/main.component';
 
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
        { path: '', component: ComponentsSimpleComponent, data: { title: 'Simple input' } },
        { path: 'switch-radio', component: ComponentsSwitchRadioComponent, data: { title: 'Switch - Radio' } },
        { path: 'checkboxlist', component: ComponentsCheckboxListComponent, data: { title: 'Checkbox List' } },
        { path: 'input-with-suggestions', component: ComponentsInputWithSuggestionsComponent, data: { title: 'Input with suggestions' } },
      ]},
      { path: 'general', component: ComponentsSimpleComponent, data: { title: 'General' } },
      { path: 'range', component: ComponentsRangeComponent, data: { title: 'Range' } }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutSidenavComponent,
    ComponentsSimpleComponent,
    ComponentsSwitchRadioComponent,
    ComponentsCheckboxListComponent,
    ComponentsInputWithSuggestionsComponent,
    ComponentsRangeComponent,
    GettingStartedComponent,
    ComponentsComponent,
    GettingStartedMainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AsBoxModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {
          useHash: true
      }
    ),
    HighlightModule.forRoot({path: environment.assetsPath+'/lib/hljs'})
  ],
  providers: [
    {provide:AsConfigService, useClass:AppConfigService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
