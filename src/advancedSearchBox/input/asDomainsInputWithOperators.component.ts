import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnDestroy, ViewChild, AfterViewChecked, DoCheck, forwardRef } from "@angular/core";
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
import { NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AsInputWithOperatorsComponent } from '../asInputWithOperators.component';

@Component({
    selector:'as-domains-input-with-operators',
    template: `
    <ng-select 
        appendTo="body"
        [bindLabel]="filter.viewModel.bindLabel"
        [bindValue]="filter.viewModel.bindValue"
        (focus)="filter.focusInput$.next()"
        (keydown)="advancedSearchBox.keydown($event, filter.viewModel)"
        #inputRef
        [placeholder]="filter.viewModel.label"
        [typeahead]="domainTypeahead"
        [items]="itemsDomain"
        (change)="onChange($event)"
        (clear)="onClear()"
        (remove)="onRemove($event)"
        [(ngModel)]="filter.viewModel.value.value">
    </ng-select>
    <input autosize #inputAutosize type="text" [(ngModel)]="filterValue" [hidden]="true" />`,
    styles:[`
        ng-select{
            height:100%;
            min-width:200px;
        }
    `],
    providers:[
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AsDomainsInputWithOperatorsComponent),
            multi: true
        }
    ]
    
})
export class AsDomainsInputWithOperatorsComponent extends AsInputAbstract implements AfterViewChecked, DoCheck{
    
    @ViewChild(NgSelectComponent) typeahead;
    @ViewChild('inputAutosize', {read: ElementRef}) inputAutosize:ElementRef;
    @ViewChild('inputRef', {read: NgControl}) ngControl:NgControl;
    
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
        public _element: ElementRef,
        public filter:AsInputWithOperatorsComponent
    ) {
        super(advancedSearchBox, _http, _config, _element);
    }

    ngOnInit(){
        super.ngOnInit();
       
        this.ngControl.valueChanges.subscribe((res)=>{
            if(res === '' || res === undefined || res === null){
            }else{
                if(this.filter.viewModel.bindLabel){
                    this.filterValue = res[this.filter.viewModel.bindLabel];
                }else{
                    this.filterValue = res;
                }
            }
        });
    }

    ngDoCheck(){
        if(this.typeahead.filterValue){
            this.filterValue = this.typeahead.filterValue;
        }
    }

    ngAfterViewChecked(){
        this.inputElementRef.nativeElement.style.width = 'calc('+this.inputAutosize.nativeElement.style.width + ' + 50px)';
    }

    onClear(){
        this._filterValue = null;
        this.focusInput$.next(undefined);
        this.filter.remove();
    }

    onRemove(data){
        this.focusInput$.next(undefined);
        this.inputRef.open();
        this.filter.removeEmpty([this.filter.viewModel.value]);
    }

    onChange(data){
        // without timeout it is execute before keydown event
        setTimeout(()=>{
            if(data === '' || data === undefined || data === null){
                this.focusInput$.next(undefined);
                this.inputRef.open();
                this.filter.removeEmpty([this.filter.viewModel.value]);
            }else{
                if(this.filter.viewModel.bindLabel){
                    this._filterValue = data[this.filter.viewModel.bindLabel];
                }else{
                    this._filterValue = data;
                }

                if(this.filter.viewModel.bindValue){
                    this.filter.onSelectDomains(data[this.filter.viewModel.bindValue]);
                }else{
                    this.filter.onSelectDomains(data);
                }
            }
            this._onChange(data);
            this.change.emit(data);
        },0);
    }
}