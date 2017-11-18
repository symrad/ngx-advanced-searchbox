import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnDestroy, ViewChild } from "@angular/core";
import { AsComponent } from "../as.component";
import { Renderer2, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AsConfigService } from "../asConfig.service";
import { AsInputAbstract } from "./asInput.abstract";
import { AsBoxFilterAbstract } from "../asFilter.abstract";
import { Subject } from "rxjs/Subject";
import { AsInputComponent } from "../asInput.component";
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/first';

@Component({
    selector:'div[as-domains-input-with-operators]',
    template: `<input type="text"
            [(ngModel)]="_filter.viewModel.value.value"
            (focus)="_filter.focusInput$.next()"
            (keydown)="advancedSearchBox.keydown($event,_filter.viewModel)"
            (selectItem)="_filter.onSelectDomains($event)"
            (blur)="onBlur()"
            autosize 
            [placeholder]="_filter.viewModel.label"
            [ngbTypeahead]="domainsFunc"
            [inputFormatter]="domainsFormatter"
            [resultFormatter]="domainsFormatter"
            focusFirst="true"
            #inputRef
            container="body"
            editable="false"
            />`,
    styles:[`
        input{
            height:100%;
        }
    `]
    
})
export class AsDomainsInputWithOperatorsComponent extends AsInputAbstract {
    
    public domainsResults$_;
    @ViewChild(NgbTypeahead) typeahead;
    
    constructor(
        public advancedSearchBox: AsComponent,
        protected _http: HttpClient,
        protected _config: AsConfigService,
        public _element: ElementRef
    ) {
        super(advancedSearchBox, _http, _config, _element);
    }

    onBlur(){
        this.domainsResults$_ = this.domainsResults$
        .filter((response) => {
            return response.viewModel.uuid === this._filter.viewModel.uuid;
        })
        .first()
        .subscribe((response) => {
            if(response.response.length < 1){
                this._filter.viewModel.value.value = '';
            }else{
                this._filter.viewModel.value.value = response.response[0];
                this.typeahead._userInput = this.domainsFormatter(response.response[0]);
            }
        });
    }
}