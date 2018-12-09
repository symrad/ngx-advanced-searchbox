import { AppConfigService } from './appConfig.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AsBoxModule, AsConfigService } from 'projects/ngx-advanced-searchbox/src/public_api';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule.forRoot(),
    AsBoxModule.forRoot(),
    NgxMaskModule
  ],
  providers: [
    {provide: AsConfigService, useClass: AppConfigService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
