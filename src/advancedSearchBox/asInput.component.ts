import { FormGroup, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FilterInterface } from './asFilter.interface';
import { UUID } from 'angular2-uuid';
import { AsComponent } from './as.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild, ComponentFactoryResolver, ResolvedReflectiveFactory, ViewContainerRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AsBoxFilterAbstract } from './asFilter.abstract';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { AsConfigService } from './asConfig.service';
import { AsSimpleInputComponent } from './input/asSimpleInput.component';
import { AsDomainsInputComponent } from './input/asDomainsInput.component';
import { AsSuggestionsInputComponent } from './input/asSuggestionsInput.component';
import { AfterViewInit } from '@angular/core';
import { AsSimpleInputMaskComponent } from './input/asSimpleInputMask.component';

export enum TypesInputEnum {
    SIMPLE = 'SIMPLE',
    SIMPLE_MASK = 'SIMPLE_MASK',
    SUGGESTIONS = 'SUGGESTIONS',
    DOMAINS = 'DOMAINS'
}

@Component({
    selector: 'as-input',
    template: `
    <div class="input-group">
        <span class="input-group-prepend">
            <span class="btn btn-outline-primary notClickable">{{viewModel.label}}</span>
        </span>
        <ng-container [ngSwitch]="inputType">
            <as-simple-input *ngSwitchCase="'SIMPLE'" #inputComponent ></as-simple-input>
            <as-simple-input-mask *ngSwitchCase="'SIMPLE_MASK'" #inputComponent ></as-simple-input-mask>
            <as-suggestions-input *ngSwitchCase="'SUGGESTIONS'" #inputComponent ></as-suggestions-input>
            <as-domains-input *ngSwitchCase="'DOMAINS'" #inputComponent (change)="onChange()"></as-domains-input>
        </ng-container>
        <span class="input-group-append">
            <button class="btn btn-outline-primary" type="button" (click)="remove()">X</button>
        </span>
    </div>
    `,
    providers:[
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AsInputComponent),
            multi: true
        },
        NgbTypeaheadConfig
    ]
})
export class AsInputComponent extends AsBoxFilterAbstract implements OnInit{

   @ViewChild('inputComponent') inputComponent;
   public inputType:TypesInputEnum;

   constructor(
        public advancedSearchBox: AsComponent,
        public _renderer: Renderer2,
        public _el: ElementRef,
        public _http: HttpClient,
        public _config: AsConfigService,
        protected resolver: ComponentFactoryResolver
    ) {
        super(advancedSearchBox, _renderer, _el, _http, _config);
    }

    ngOnInit() {
        super.ngOnInit();
        
        if(this.viewModel.mask){
            this.viewModel.mask.mask = this.viewModel.mask || false;
            this.viewModel.mask.clearIfNotMatch = this.viewModel.mask.clearIfNotMatch !== undefined ? this.viewModel.mask.clearIfNotMatch : false;
            this.viewModel.mask.dropSpecialCharacters = this.viewModel.mask.dropSpecialCharacters !== undefined ? this.viewModel.mask.dropSpecialCharacters : false;
            this.viewModel.mask.patterns = this.viewModel.mask.patterns !== undefined ? this.viewModel.mask.patterns : {};
            this.viewModel.mask.specialCharacters = this.viewModel.mask.specialCharacters !== undefined ? this.viewModel.mask.specialCharacters : [];
        }

        this.advancedSearchBox.editNext
        .filter((response) => response.viewModel && response.viewModel.uuid === this.viewModel.uuid)
        .subscribe((response) => {
            this.advancedSearchBox.nextFilterController(response.viewModel).onFocus('next');
            this.onBlur();
        });

        this.advancedSearchBox.editPrev
        .filter((response) => response.viewModel && response.viewModel.uuid === this.viewModel.uuid)
        .subscribe((response) => {
            this.advancedSearchBox.prevFilterController(response.viewModel).onFocus('prev');
            this.onBlur();
        });

        if(!this.viewModel.suggestions && !this.viewModel.domains){
            if(this.viewModel.mask){
                this.inputType = TypesInputEnum.SIMPLE_MASK;
            }else{
                this.inputType = TypesInputEnum.SIMPLE;
            }
        }
        if(this.viewModel.suggestions){
            this.inputType = TypesInputEnum.SUGGESTIONS;
        }
        if(this.viewModel.domains){
            this.inputType = TypesInputEnum.DOMAINS;
        }
    }

    onBlur() {
        super.onBlur();
        this._onChange(this.viewModel.value);
        this.removeEmpty([this.viewModel.value]);
        if(this.inputComponent.inputRef.dismissPopup){
            this.inputComponent.inputRef.dismissPopup();
        }
        if(this.inputComponent.inputRef.close){
            this.inputComponent.inputRef.close();
        }
    }

    public onChange() {
        setTimeout(()=>{
            this._onChange(this.viewModel.value);
            this.viewToModel();
        },0);
    }

}
