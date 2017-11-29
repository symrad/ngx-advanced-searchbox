import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnDestroy, ViewChild, AfterViewChecked, DoCheck } from "@angular/core";
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
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector:'div[as-domains-input-with-operators]',
    template: `
    <ng-select 
        bindLabel="label"
        bindValue="label"
        (focus)="_filter.focusInput$.next()"
        (keydown)="advancedSearchBox.keydown($event,_filter.viewModel)"
        #inputRef
        [placeholder]="_filter.viewModel.label"
        [typeahead]="domainTypeahead"
        [items]="itemsDomain"
        (change)="onChange($event)"
        [(ngModel)]="_filter.viewModel.value.value">
    </ng-select>
    <input autosize #inputAutosize type="text" [(ngModel)]="filterValue" [hidden]="true" />`,
    styles:[`
        ng-select{
            height:100%;
            min-width:200px;
        }
    `]
    
})
export class AsDomainsInputWithOperatorsComponent extends AsInputAbstract implements AfterViewChecked, DoCheck{
    
    public domainsResults$_;
    @ViewChild(NgSelectComponent) typeahead;
    @ViewChild('inputAutosize', {read: ElementRef}) inputAutosize:ElementRef;
    
    private _filterValue = '';
    set filterValue(val){
        this._filterValue = val;
    }
    get filterValue(){
        return this._filterValue;
    }
    
    constructor(
        public advancedSearchBox: AsComponent,
        protected _http: HttpClient,
        protected _config: AsConfigService,
        public _element: ElementRef
    ) {
        super(advancedSearchBox, _http, _config, _element);
    }

    ngDoCheck(){
        if(this.typeahead.filterValue){
            this._filterValue = this.typeahead.filterValue;
        }
    }

    ngAfterViewChecked(){
        this.inputElementRef.nativeElement.style.width = 'calc('+this.inputAutosize.nativeElement.style.width + ' + 50px)';
    }

    onChange(data){
        if(!data){
            this.focusInput$.next(undefined);
            this.inputRef.open();
            this._filter.removeEmpty([this._filter.viewModel.value.value]);
        }else{
            this._filterValue = data.label;
            this._filter.onSelectDomains(data.label);
        }
    }
}