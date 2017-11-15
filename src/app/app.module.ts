import { DropdownNavigationModule } from './../dropdown-navigation/dropdownNavigation.module';
import { AsBoxModule } from './../advancedSearchBox/as.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownNavigationDirective } from '../dropdown-navigation/dropdownNavigation.directive';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule.forRoot(),
    AsBoxModule.forRoot(),
    DropdownNavigationModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
