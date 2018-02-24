import { HttpClient } from '@angular/common/http';
import { NgbDropdown, NgbTypeaheadSelectItemEvent, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { FilterInterface } from './asFilter.interface';
import { UUID } from 'angular2-uuid';
import { AsComponent } from './as.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild, OnChanges, SimpleChanges, ViewContainerRef, ComponentFactoryResolver, forwardRef } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeLast';
import { AsBoxFilterAbstract } from './asFilter.abstract';
import { Key as KeyBoard} from 'ts-keycode-enum';
import { Observable } from 'rxjs/Observable';
import { AsConfigService } from './asConfig.service';
import { AsSimpleInputWithOperatorsComponent } from './input/asSimpleInputWithOperators.component';
import { AsSuggestionsInputWithOperatorsComponent } from './input/asSuggestionsInputWithOperators.component';
import { AsDomainsInputWithOperatorsComponent } from './input/asDomainsInputWithOperators.component';
import { AsSimpleInputWithOperatorsMaskComponent } from './input/asSimpleInputWithOperatorsMask.component';
import { FormGroup, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

export enum OperatorsEnum {
    eq = '=',
    lt = '<',
    le = '\u2264',
    ne = '\u2260',
    gt = '>',
    ge = '\u2265',
    startsWith = '[...',
    endsWith = '...]',
    contains = '[...]'
}

export enum TypesInputWithOperatorsEnum {
    SIMPLE = 'SIMPLE',
    SIMPLE_MASK = 'SIMPLE_MASK',
    SUGGESTIONS = 'SUGGESTIONS',
    DOMAINS = 'DOMAINS'
}

@Component({
    selector: 'as-input-operators',
    template: `
    <div class="input-group">
        <span class="input-group-prepend">
            <div class="btn-group">
                <span class="btn btn-outline-primary notClickable">{{viewModel.label}}</span>
                <div ngbDropdown class="btn-group" appDropdownNavigation>
                    <button class="btn btn-outline-primary noRadius" type="button" ngbDropdownToggle #buttonToggle 
                    (keydown)="advancedSearchBox.keydown($event, viewModel, {id:'buttonDropDown'})">{{viewModel.value.op ? operatorsEnum[viewModel.value.op] : '..'}}</button>
                    <div class="dropdown-menu" ngbDropdownMenu>
                        <a class="dropdown-item" (focus)="viewModel.value.op = operator" *ngFor="let operator of operatorsList" 
                        (click)="onChangeOperators($event, operator)" (keydown)="onChangeOperators($event, operator)" href="javascript:void(0)">
                            {{operatorsEnum[operator]}}
                        </a>
                    </div>
                </div>
            </div>
        </span>
        <ng-container [ngSwitch]="inputType">
            <as-simple-input-with-operators *ngSwitchCase="'SIMPLE'" #inputComponent ></as-simple-input-with-operators>
            <as-simple-input-with-operators-mask *ngSwitchCase="'SIMPLE_MASK'" #inputComponent ></as-simple-input-with-operators-mask>
            <as-suggestions-input-with-operators *ngSwitchCase="'SUGGESTIONS'" #inputComponent ></as-suggestions-input-with-operators>
            <as-domains-input-with-operators *ngSwitchCase="'DOMAINS'" #inputComponent (change)="onChange()"></as-domains-input-with-operators>
        </ng-container>
        <span class="input-group-append">
            <button class="btn btn-outline-primary" type="button" (click)="remove()">X</button>
        </span>
    </div>
    `,
    providers:[
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AsInputWithOperatorsComponent),
            multi: true
        }
    ]
})
export class AsInputWithOperatorsComponent extends AsBoxFilterAbstract implements OnInit, OnChanges {

   public operatorsList;
   public operatorsEnum;
   public inputType:TypesInputWithOperatorsEnum;

   constructor(
        public advancedSearchBox: AsComponent,
        public renderer: Renderer2,
        public el: ElementRef,
        public _http: HttpClient,
        public _config: AsConfigService,
        protected resolver: ComponentFactoryResolver
    ) {
        super(advancedSearchBox, renderer, el, _http, _config);
        this.operatorsList = [];
        this.operatorsEnum = OperatorsEnum;

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.viewModel) {
            this.operatorsList = changes.viewModel.currentValue.operators;
        }
    }

    ngOnInit() {
        super.ngOnInit();

        if (!this.viewModel.value) {
            this.viewModel.value = {op:this.operatorsList[0]};
        }

        this.advancedSearchBox.editNext
        .filter((response) => response.viewModel && response.viewModel.uuid === this.viewModel.uuid)
        .subscribe((response) => {
            if (response.options.id && response.options.id === 'buttonDropDown') {
                this.operatorsDropDownDir.close();
                this.focusInput();
                this.focusInput$.next();
            }else {
                this.advancedSearchBox.nextFilterController(response.viewModel).onFocus('next');
                this.onBlur();
            }
        });

        this.advancedSearchBox.editPrev
        .filter((response) => response.viewModel && response.viewModel.uuid === this.viewModel.uuid)
        .subscribe((response) => {
            if (response.options.id && response.options.id === 'buttonDropDown') {
                this.advancedSearchBox.prevFilterController(response.viewModel).onFocus('prev');
                this.operatorsDropDownDir.close();
                this.buttonToggleEr.nativeElement.blur();
                this.onBlur();
            }else {
                this.blurInput();
                this.operatorsDropDownDir.open();
                this.buttonToggleEr.nativeElement.focus();
            }
        });

        this.advancedSearchBox.searchboxInputClick$.subscribe((response) => {
            this.operatorsDropDownDir.close();
        });

        if(!this.viewModel.suggestions && !this.viewModel.domains){
            if(this.viewModel.mask){
                this.inputType = TypesInputWithOperatorsEnum.SIMPLE_MASK;
            }else{
                this.inputType = TypesInputWithOperatorsEnum.SIMPLE;
            }
        }
        if(this.viewModel.suggestions){
            this.inputType = TypesInputWithOperatorsEnum.SUGGESTIONS;
        }
        if(this.viewModel.domains){
            this.inputType = TypesInputWithOperatorsEnum.DOMAINS;
        }
    }
    
    onBlur() {
        this.operatorsDropDownDir.close();
        this._onChange(this.viewModel.value.value);
        this.removeEmpty([this.viewModel.value.value]);
        this.blurInput();
    }

    onFocus(prevNext) {
        if (prevNext === 'prev') {
            this.focusInput();
        }else {
            setTimeout(()=>{
                this.buttonToggleEr.nativeElement.focus();
                this.operatorsDropDownDir.open();
            });
        }
    }

    public onChange() {
        this._onChange(this.viewModel.value.value);
        this.viewToModel();
    }

    onChangeOperators($event: MouseEvent | KeyboardEvent, operator: string) {
        const valueEmitted = {
            viewModel: this.viewModel,
            options: {id:'buttonDropDown'}
        };
        this._onChange(this.viewModel.value.value);
        if ($event instanceof KeyboardEvent) {
            switch ($event.which) {
                case KeyBoard.Enter:
                // case KeyBoard.Tab:
                    $event.preventDefault();
                    this.viewModel.value.op = operator;
                    this.advancedSearchBox.editNext.next(valueEmitted);
                    
                    if (this.viewModel.value.value) {
                        this.viewToModel();
                    }
            }
        }
        if ($event instanceof MouseEvent) {
            $event.preventDefault();
            $event.stopPropagation();
            this.viewModel.value.op = operator;
            this.advancedSearchBox.editNext.next(valueEmitted);
            
            if (this.viewModel.value.value) {
                this.viewToModel();
            }
        }
    }

    public onSelectDomains(data){
        this.viewModel.value.value = data;
        const valueEmitted = {
            viewModel: this.viewModel,
            options: {}
        };

        this.advancedSearchBox.editNext.next(valueEmitted);
        
        this._onChange(this.viewModel.value.value);
        this.viewToModel();
    }

}