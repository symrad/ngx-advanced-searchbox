import { Component } from "@angular/core";
import { AsComponent } from "../as.component";
import { Renderer2, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AsConfigService } from "../asConfig.service";
import { AsInputAbstract } from "./asInput.abstract";
import { AsBoxFilterAbstract } from "../asFilter.abstract";
import { Subject } from "rxjs/Subject";
import { AsInputComponent } from "../asInput.component";

@Component({
    selector:'as-domains-input',
    template: `<input type="text"
            [(ngModel)]="_filter.viewModel.value"
            (keydown)="advancedSearchBox.keydown($event,_filter.viewModel)" 
            (change)="_filter.onChange()"
            (blur)="_filter.onBlur()"
            autosize 
            [placeholder]="_filter.viewModel.label"
            (focus)="_filter.focusInput$.next()"
            [ngbTypeahead]="domainsFunc"
            [inputFormatter]="domainsFormatter"
            [resultFormatter]="domainsFormatter"
            (selectItem)="_filter.onSelectDomains($event)"
            #inputRef
            />`,
    styles:[`
        input{
            height:100%;
        }
    `]
    
})
export class AsDomainsInputComponent extends AsInputAbstract{
    
    constructor(
        public advancedSearchBox: AsComponent,
        protected _http: HttpClient,
        protected _config: AsConfigService,
        public _element: ElementRef
    ) {
        super(advancedSearchBox, _http, _config, _element);
    }
}