import { HttpClient } from '@angular/common/http';
import { NgbDropdown, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { FilterInterface } from './asFilter.interface';
import { UUID } from 'angular2-uuid';
import { AsComponent } from './as.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild, OnChanges, SimpleChanges, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import 'rxjs/add/operator/filter';
import { AsBoxFilterAbstract } from './asFilter.abstract';
import { Key as KeyBoard} from 'ts-keycode-enum/Key.enum';
import { Observable } from 'rxjs/Observable';
import { AsConfigService } from './asConfig.service';
import { AsSimpleInputWithOperatorsComponent } from './input/asSimpleInputWithOperators.component';
import { AsSuggestionsInputWithOperatorsComponent } from './input/asSuggestionsInputWithOperators.component';
import { AsDomainsInputWithOperatorsComponent } from './input/asDomainsInputWithOperators.component';

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

@Component({
    selector: 'as-input-operators',
    templateUrl: './asInputWithOperators.html'
})
export class AsInputWithOperatorsComponent extends AsBoxFilterAbstract implements OnInit, OnChanges {

   @ViewChild(NgbDropdown) operatorsDropDownDir: NgbDropdown;
   @ViewChild('buttonToggle') buttonToggleEr: ElementRef;
   @ViewChild('inputView', { read: ViewContainerRef }) inputView;
   public operatorsList = [];
   public operatorsEnum = OperatorsEnum;
   public inputInstance;

   constructor(
        public advancedSearchBox: AsComponent,
        public renderer: Renderer2,
        public el: ElementRef,
        public _http: HttpClient,
        public _config: AsConfigService,
        protected resolver: ComponentFactoryResolver
    ) {
        super(advancedSearchBox, renderer, el, _http, _config);

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.viewModel) {
            this.operatorsList = changes.viewModel.currentValue.operators;
        }
    }

    ngOnInit() {
        super.ngOnInit();

        if (!this.viewModel.value) {
            this.viewModel.value = {};
        }

        this.advancedSearchBox.editNext
        .filter((response) => response.viewModel && response.viewModel.uuid === this.viewModel.uuid)
        .subscribe((response) => {
            if (response.options.id && response.options.id === 'buttonDropDown') {
                this.operatorsDropDownDir.close();
                this.inputInstance.inputRef.nativeElement.focus();
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
                this.operatorsDropDownDir.open();
                this.buttonToggleEr.nativeElement.focus();
            }
        });

        this.advancedSearchBox.searchboxInputClick$.subscribe((response) => {
            this.operatorsDropDownDir.close();
        });

        if(!this.viewModel.suggestions && !this.viewModel.domains){
            const asSimpleInputComponent = this.resolver.resolveComponentFactory(AsSimpleInputWithOperatorsComponent);
            this.inputInstance = this.inputView.createComponent(asSimpleInputComponent).instance;
        }
        if(this.viewModel.suggestions){
            const asDomainsInputComponent = this.resolver.resolveComponentFactory(AsSuggestionsInputWithOperatorsComponent);
            this.inputInstance = this.inputView.createComponent(asDomainsInputComponent).instance;
        }
        if(this.viewModel.domains){
            const asDomainsInputComponent = this.resolver.resolveComponentFactory(AsDomainsInputWithOperatorsComponent);
            this.inputInstance = this.inputView.createComponent(asDomainsInputComponent).instance;
        }

        this.inputInstance._filter = this;
    }
    
    onBlur() {
        super.onBlur();
        this.operatorsDropDownDir.close();
        //setTimeout(()=>{
            this.removeEmpty([this.viewModel.value.value]);
        //},200);
    }

    onFocus(prevNext) {
        if (prevNext === 'prev') {
            this.inputInstance.inputRef.nativeElement.focus();
        }else {
            setTimeout(()=>{
                this.buttonToggleEr.nativeElement.focus();
                this.operatorsDropDownDir.open();
            });
        }
    }

    onChange() {
        this.viewToModel();
    }

    onChangeOperators($event: MouseEvent | KeyboardEvent, operator: string) {
        var comeFrom = 'searchbox';
        this._config.historyNavigation.takeLast(1).subscribe((response) => {
            //console.log(response);
            if(response.from === 'searchbox' || response.from === 'next'){
                comeFrom = 'next';
            }else{
                comeFrom = 'prev';
            }
        });
        const valueEmitted = {
            viewModel: this.viewModel,
            options: {id:'buttonDropDown'}
        };
        if ($event instanceof KeyboardEvent) {
            switch ($event.which) {
                case KeyBoard.Enter:
                // case KeyBoard.Tab:
                    $event.preventDefault();
                    this.viewModel.value.op = operator;
                    if(comeFrom === 'next'){
                        this.advancedSearchBox.editNext.next(valueEmitted);
                    }else{
                        this.advancedSearchBox.editPrev.next(valueEmitted);
                    }
                    if (this.viewModel.value.value) {
                        this.viewToModel();
                    }
            }
        }
        if ($event instanceof MouseEvent) {
            $event.preventDefault();
            $event.stopPropagation();
            this.viewModel.value.op = operator;
            if(comeFrom === 'next'){
                this.advancedSearchBox.editNext.next(valueEmitted);
            }else{
                this.advancedSearchBox.editPrev.next(valueEmitted);
            }
            if (this.viewModel.value.value) {
                this.viewToModel();
            }
        }
    }

    public onSelectDomains($event:NgbTypeaheadSelectItemEvent){
        this.viewModel.value.value = $event.item;
        this._config.historyNavigation.takeLast(1).subscribe((response) => {
            const valueEmitted = {
                viewModel: this.viewModel,
                options: {}
            };
            if(response.from === 'searchbox' || response.from === 'next'){
                this.advancedSearchBox.editNext.next(valueEmitted);
            }else{
                this.advancedSearchBox.editPrev.next(valueEmitted);
            }
        });
        this.viewToModel();
    }

}
