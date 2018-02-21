import { Component, forwardRef, ViewChild } from "@angular/core";
import { AsComponent } from "../as.component";
import { Renderer2, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AsConfigService } from "../asConfig.service";
import { AsInputAbstract } from "./asInput.abstract";
import { AsBoxFilterAbstract } from "../asFilter.abstract";
import { Subject } from "rxjs/Subject";
import { AsInputComponent } from "../asInput.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { AsInputWithOperatorsComponent } from "../asInputWithOperators.component";
import { NgbTypeahead } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector:'as-suggestions-input-with-operators',
    template: `<input type="text"
            [(ngModel)]="filter.viewModel.value.value"
            (change)="filter.onChange()"
            (focus)="filter.focusInput$.next()"
            (keydown)="advancedSearchBox.keydown($event, filter.viewModel)"
            (selectItem)="filter.onSelectSuggestions($event)"
            autosize 
            [autosizeProp]="filter.viewModel.bindLabel"
            [placeholder]="filter.viewModel.label"
            [ngbTypeahead]="suggestionsFunc"
            [inputFormatter]="suggestionsFormatter(filter.viewModel)"
            [resultFormatter]="suggestionsFormatter(filter.viewModel)"
            #inputRef
            editable="false"
            />`,
    styles:[`
        input{
            height:100%;
        }
    `],
    providers:[
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AsSuggestionsInputWithOperatorsComponent),
            multi: true
        }
    ]
    
})
export class AsSuggestionsInputWithOperatorsComponent extends AsInputAbstract{
    
    @ViewChild(NgbTypeahead) inputRef;
    
    constructor(
        public advancedSearchBox: AsComponent,
        protected _http: HttpClient,
        protected _config: AsConfigService,
        public _element: ElementRef,
        public filter:AsInputWithOperatorsComponent
    ) {
        super(advancedSearchBox, _http, _config, _element);
    }
}
