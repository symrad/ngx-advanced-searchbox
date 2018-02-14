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
import { AppendToComponent } from './routes/appendTo.component';
import { SwitchRadioComponent } from './routes/switchRadio.component';
import { HighlightModule } from 'ngx-highlightjs';
import { CheckboxListComponent } from './routes/checkboxList.component';
import { InputWithSuggestionsComponent } from './routes/inputWithSuggestions.component';
import { RangeComponent } from './routes/range.component';
 
var appRoutes = [
  {
      path: '',
      redirectTo: '/simple-input',
      pathMatch: 'full'
  },
  { path: 'simple-input', children:[
    { path: '', component: AppendToComponent, data: { title: 'Simple input' } },
    { path: 'switch-radio', component: SwitchRadioComponent, data: { title: 'Switch - Radio' } },
    { path: 'checkboxlist', component: CheckboxListComponent, data: { title: 'Checkbox List' } },
    { path: 'input-with-suggestions', component: InputWithSuggestionsComponent, data: { title: 'Input with suggestions' } },
  ]},
  { path: 'general', component: AppendToComponent, data: { title: 'General' } },
  { path: 'range', component: RangeComponent, data: { title: 'Range' } }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutSidenavComponent,
    AppendToComponent,
    SwitchRadioComponent,
    CheckboxListComponent,
    InputWithSuggestionsComponent,
    RangeComponent
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
