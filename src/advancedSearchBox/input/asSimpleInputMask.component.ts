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
    selector:'div[as-simple-input-mask]',
    template: `<input type="text"
            [(ngModel)]="_filter.viewModel.value"
            (change)="_filter.onChange()"
            (focus)="_filter.focusInput$.next()"
            (keydown)="advancedSearchBox.keydown($event,_filter.viewModel)" 
            autosize 
            [placeholder]="_filter.viewModel.label"
            [mask]="_filter.viewModel.mask.mask"
            [specialCharacters]="_filter.viewModel.mask.specialCharacters"
            [patterns]="_filter.viewModel.mask.patterns"
            [dropSpecialCharacters]="_filter.viewModel.mask.dropSpecialCharacters"
            [clearIfNotMatch]="_filter.viewModel.mask.clearIfNotMatch"
            #inputRef
            />`,
    styles:[`
        input{
            height:100%;
        }
    `]
    
})
export class AsSimpleInputMaskComponent extends AsInputAbstract{
    
    constructor(
        public advancedSearchBox: AsComponent,
        protected _http: HttpClient,
        protected _config: AsConfigService,
        public _element: ElementRef
    ) {
        super(advancedSearchBox, _http, _config, _element);
    }
}