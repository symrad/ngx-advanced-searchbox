import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { FilterInterface } from './advancedSearchBoxFilter.interface';
import { UUID } from 'angular2-uuid';
import { element } from 'protractor';
import { AdvancedSearchBoxComponent } from './advancedSearchBox.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import 'rxjs/add/operator/filter';
import { AdvancedSearchBoxInputAbstract } from './advancedSearchBoxInput.abstract';
import { Key as KeyBoard} from 'ts-keycode-enum/Key.enum';

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
    selector: 'app-as-multi-input',
    templateUrl: './advancedSearchBoxMultiInput.html'
})
export class AdvancedSearchBoxMultiInputComponent extends AdvancedSearchBoxInputAbstract implements OnInit, OnChanges {

   @ViewChild(NgbDropdown) operatorsDropDownDir: NgbDropdown;
   @ViewChild('buttonToggle') buttonToggleEr: ElementRef;
   public operatorsList = [];
   public operatorsEnum = OperatorsEnum;

   constructor(
        public advancedSearchBox: AdvancedSearchBoxComponent,
        public renderer: Renderer2,
        public el: ElementRef
    ) {
        super(advancedSearchBox, renderer, el);

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.viewModel) {
            this.operatorsList = changes.viewModel.currentValue.operators;
        }
    }

    ngOnInit() {
        super.ngOnInit();

        this.viewModel.value = {};

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

    viewToModel() {
        if (this.viewModel.value.value) {
            if (!this.advancedSearchBox.model[this.viewModel.model]) {
                this.advancedSearchBox.model[this.viewModel.model] = [];
            }
            this.advancedSearchBox.model[this.viewModel.model].push(this.viewModel.value);
        }
    }

    onInternalStep() {

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
            this.operatorsDropDownDir.open();
            this.buttonToggleEr.nativeElement.focus();
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
                    this.viewToModel();

            }
        }
        if ($event instanceof MouseEvent) {
            this.viewModel.value.op = operator;
            this.operatorsDropDownDir.close();
            this.inputRef.nativeElement.focus();
            this.viewToModel();
        }
    }

    remove() {
        super.remove();
        if (this.viewModel.value && this.advancedSearchBox.model[this.viewModel.model]) {
            const indexToRemove = this.advancedSearchBox.model[this.viewModel.model].indexOf(this.viewModel.value);
            this.advancedSearchBox.model[this.viewModel.model].splice(indexToRemove, 1);
            if (this.advancedSearchBox.model[this.viewModel.model].length < 1) {
                delete this.advancedSearchBox.model[this.viewModel.model];
            }
        }
    }
}
