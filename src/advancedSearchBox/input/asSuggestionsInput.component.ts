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
    selector:'div[as-suggestions-input]',
    template: `<input type="text"
            [(ngModel)]="_filter.viewModel.value"
            (change)="_filter.onChange()"
            (focus)="_filter.focusInput$.next()"
            (keydown)="advancedSearchBox.keydown($event,_filter.viewModel)"
            (selectItem)="_filter.onSelectSuggestions($event)"
            autosize 
            [placeholder]="_filter.viewModel.label"
            [ngbTypeahead]="suggestionsFunc"
            [inputFormatter]="suggestionsFormatter(_filter.viewModel)"
            [resultFormatter]="suggestionsFormatter(_filter.viewModel)"
            #inputRef
            editable="false"
            />`,
    styles:[`
        input{
            height:100%;
        }
    `]
    
})
export class AsSuggestionsInputComponent extends AsInputAbstract{
    
    constructor(
        public advancedSearchBox: AsComponent,
        protected _http: HttpClient,
        protected _config: AsConfigService,
        public _element: ElementRef
    ) {
        super(advancedSearchBox, _http, _config, _element);
    }
}
