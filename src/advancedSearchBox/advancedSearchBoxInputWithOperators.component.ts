import { HttpClient } from '@angular/common/http';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { FilterInterface } from './advancedSearchBoxFilter.interface';
import { UUID } from 'angular2-uuid';
import { element } from 'protractor';
import { AdvancedSearchBoxComponent } from './advancedSearchBox.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import 'rxjs/add/operator/filter';
import { AdvancedSearchBoxFilterAbstract } from './advancedSearchBoxFilter.abstract';
import { Key as KeyBoard} from 'ts-keycode-enum/Key.enum';
import { Observable } from 'rxjs/Observable';
import { AdvancedSearchBoxConfigService } from './advancedSearchBoxConfig.service';

enum OperatorsEnum {
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
    templateUrl: './advancedSearchBoxInputWithOperators.html'
})
export class AdvancedSearchBoxInputWithOperatorsComponent extends AdvancedSearchBoxFilterAbstract implements OnInit, OnChanges {

   @ViewChild(NgbDropdown) operatorsDropDownDir: NgbDropdown;
   @ViewChild('buttonToggle') buttonToggleEr: ElementRef;
   public operatorsList = [];
   public operatorsEnum = OperatorsEnum;

   constructor(
        public advancedSearchBox: AdvancedSearchBoxComponent,
        public renderer: Renderer2,
        public el: ElementRef,
        public _http: HttpClient,
        public _config: AdvancedSearchBoxConfigService
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
                this.inputRef.nativeElement.focus();
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
    }
    
    onBlur() {
        super.onBlur();
        this.operatorsDropDownDir.close();
        this.removeEmpty([this.viewModel.value.value]);
    }

    onFocus(prevNext) {
        if (prevNext === 'prev') {
            this.inputRef.nativeElement.focus();
        }else {
            setTimeout(() => {
                this.buttonToggleEr.nativeElement.focus();
            });
            this.operatorsDropDownDir.open();
        }
    }

    onChange() {
        this.viewToModel();
    }

    onChangeOperators($event: MouseEvent | KeyboardEvent, operator: string) {
        if ($event instanceof KeyboardEvent) {
            switch ($event.which) {
                case KeyBoard.Enter:
                // case KeyBoard.Tab:
                    $event.preventDefault();
                    this.viewModel.value.op = operator;
                    this.operatorsDropDownDir.close();
                    this.inputRef.nativeElement.focus();
                    if (this.viewModel.value.value) {
                        this.viewToModel();
                    }

            }
        }
        if ($event instanceof MouseEvent) {
            this.viewModel.value.op = operator;
            this.operatorsDropDownDir.close();
            this.inputRef.nativeElement.focus();
            if (this.viewModel.value.value) {
                this.viewToModel();
            }
        }
    }

}
