import { AsInputComponent } from './../asInput.component';
import { AsInputWithOperatorsComponent } from './../asInputWithOperators.component';
import { Component, forwardRef } from "@angular/core";
import { AsComponent } from "../as.component";
import { Renderer2, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AsConfigService } from "../asConfig.service";
import { AsInputAbstract } from "./asInput.abstract";
import { AsBoxFilterAbstract } from "../asFilter.abstract";
import { Subject } from "rxjs/Subject";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector:'as-simple-input-mask',
    template: `<input type="text"
            [(ngModel)]="filter.viewModel.value"
            (change)="filter.onChange()"
            (focus)="filter.focusInput$.next()"
            (keydown)="advancedSearchBox.keydown($event, filter.viewModel)" 
            autosize 
            [placeholder]="filter.viewModel.label"
            [mask]="filter.viewModel.mask.mask"
            [specialCharacters]="filter.viewModel.mask.specialCharacters"
            [patterns]="filter.viewModel.mask.patterns"
            [dropSpecialCharacters]="filter.viewModel.mask.dropSpecialCharacters"
            [clearIfNotMatch]="filter.viewModel.mask.clearIfNotMatch"
            #inputRef
            />`,
    styles:[`
        input{
            height:100%;
        }
    `],
    providers:[
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AsSimpleInputMaskComponent),
            multi: true
        }
    ]
    
})
export class AsSimpleInputMaskComponent extends AsInputAbstract{
    
    constructor(
        public advancedSearchBox: AsComponent,
        protected _http: HttpClient,
        protected _config: AsConfigService,
        public _element: ElementRef,
        public filter:AsInputComponent){
        super(advancedSearchBox, _http, _config, _element);
    }
}