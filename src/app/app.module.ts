import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AsBoxModule, AsConfigService } from 'ngx-advanced-searchbox';
import { AppConfigService } from './appConfig.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AsBoxModule.forRoot()
  ],
  providers: [
    {provide:AsConfigService, useClass:AppConfigService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
