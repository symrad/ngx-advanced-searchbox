import { FilterInterface } from './advancedSearchBoxFilter.interface';
import { AdvancedSearchBoxTemplateDirective } from './advancedSearchBoxTemplate.directive';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges,
    SimpleChanges, ContentChild, TemplateRef, ViewChild, ElementRef, Renderer2,
    ViewChildren, QueryList, ContentChildren, AfterViewInit, AfterContentInit, forwardRef, HostListener } from '@angular/core';
import { Key as KeyBoard} from 'ts-keycode-enum/Key.enum';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgbTypeaheadConfig, NgbTypeahead, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { NgModel } from '@angular/forms';
import { UUID } from 'angular2-uuid';

@Component({
    selector: 'app-advanced-searchbox',
    templateUrl: './advancedSearchBox.html',
    providers: [NgbTypeaheadConfig],
    styleUrls: ['./advancedSearchBox.scss']
})
export class AdvancedSearchBoxComponent implements OnInit, OnChanges {

    @Output('editNext') editNext: EventEmitter<any>  = new EventEmitter();
    @Output('editPrev') editPrev: EventEmitter<any>  = new EventEmitter();
    @ContentChild(AdvancedSearchBoxTemplateDirective, {read: TemplateRef}) externalTemplate;
    @ViewChild('searchbox') searchboxInput: ElementRef;
    @ViewChild('searchboxModel') searchboxModel: NgModel;
    @ViewChild(NgbTypeahead) typeaheadController;

    @Input() template: Array<any>;
    @Input()
    set model(model: Object){
        for (const key in model) {
            if (model.hasOwnProperty(key)) {
                const typeofValue: string = typeof model[key];
                // tslint:disable-next-line:typeof-compare
                if (typeofValue === 'array' || typeofValue === 'object') {
                    for (const value of model[key]){
                        this.createViewFilter(key, value);
                    }
                }else {
                    this.createViewFilter(key, model[key]);
                }
            }
        }
        setTimeout(() => {
            this.focusInput$.next();
        });
        this._model = model;
    }

    get model(): Object{
        return this._model;
    }

    private _model: Object;
    public viewModel: Array<{type: string}> = [];
    public searchBox = '';
    public searchboxInputClick$: Observable<any>;
    public focusInput$: Subject<any> = new Subject();
    public filtersControllers = {};
    public focusIndex = 0;

    filterSearchBox(): Array<any> {
        return this.template
        .filter((value) => {
          return this.viewModel.filter((param) => {
                  if (param['model'] === value['model'] && (param['value'] && param['value'].op && !param['value'].value)) {
                      return false;
                  }
                  const maxOccurrence = param['multiple'];
                  if (maxOccurrence && maxOccurrence !== '*') {
                      return param['model'] === value['model'] && param['multiple'] <= this.model[param['model']].length;
                  }else {
                      return param['model'] === value['model'] && !param['multiple'];
                  }
              }).length === 0;
        });
    }

    searchBoxFunc = (text$: Observable<string>) =>
        text$
        .merge(this.searchboxInputClick$)
        .merge(this.focusInput$)
        .map((term: any) => {
            if (term instanceof MouseEvent || term === undefined) {
                term = this.searchBox;
            }

            const test = this.filterSearchBox()
                  .filter(v => v.label.toLowerCase().indexOf(term.toLowerCase()) > -1)
                  .slice(0, 10);
                  return test;
        })

    formatter = (x: {label: string}) => x.label;

    trackByFn(index, item) {
        return item.uuid;
    }

    constructor(
        public element: ElementRef,
        public typeahead: NgbTypeaheadConfig,
        private _renderer: Renderer2) {
    }

    ngOnInit() {
        this._renderer.setProperty(this.searchboxInput.nativeElement, 'value', '');

        this.searchboxInputClick$ = fromEvent(this.searchboxInput.nativeElement, 'click').map((response: MouseEvent) => {
            response.preventDefault();
            response.stopPropagation();
            return response;
        });

        this.searchboxModel.valueChanges.subscribe(response => {
            // console.log(response);
        });

        this.typeaheadController._userInput = '';
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.model) {
            const currentValModel = changes.model.currentValue;
        }
        if (changes.model) {
            const currentValModel = changes.model.currentValue;
        }
    }

    findTemplate(key, value) {
        return this.template.filter((param) => {
            return param[key] === value;
        })[0];
    }

    getCurrentCaretPosition = function(input) {
        if (!input) {
            return 0;
        }

        try {
            // Firefox & co
            if (typeof input.selectionStart === 'number') {
                return input.selectionDirection === 'backward' ? input.selectionStart : input.selectionEnd;

            } else if ((<any>document).selection) { // IE
                input.focus();
                const selection = (<any>document).selection.createRange();
                const selectionLength = (<any>document).selection.createRange().text.length;
                selection.moveStart('character', -input.value.length);
                return selection.text.length - selectionLength;
            }
        }catch (err) {
            // selectionStart is not supported by HTML 5 input type, so jut ignore it
        }
        return 0;
    };

    // tslint:disable-next-line:no-shadowed-variable
    // tslint:disable-next-line:no-unnecessary-initializer
    keydown(e, currentViewModel, options = {}) {
        const valueEmitted = {
            viewModel: currentViewModel,
            options: options
        };

        const handledKeys: KeyBoard[] = [
            KeyBoard.Backspace,
            KeyBoard.Tab,
            KeyBoard.Enter,
            KeyBoard.LeftArrow,
            KeyBoard.RightArrow
        ];

        if (handledKeys.indexOf(e.which) === -1) {
            return;
        }

        const cursorPosition = this.getCurrentCaretPosition(e.target);

        if (e.which === KeyBoard.Backspace) {
            if (cursorPosition === 0) {
                e.preventDefault();
                this.editPrev.next(valueEmitted);
            }

        } else if (e.which === KeyBoard.Tab) {
            if (e.shiftKey) {
                e.preventDefault();
                this.editPrev.emit(valueEmitted);
            } else {
                e.preventDefault();
                this.editNext.emit(valueEmitted);
            }

        } else if (e.which === KeyBoard.Enter) {
            this.editNext.emit(valueEmitted);

        } else if (e.which === KeyBoard.LeftArrow) {
            if (cursorPosition === 0) {
                this.editPrev.emit(valueEmitted);
            }

        } else if (e.which === KeyBoard.RightArrow) {
            if (cursorPosition === e.target.value.length) {
                this.editNext.emit(valueEmitted);
            }
        }
    }

    addFilter(typeaheadSelected: NgbTypeaheadSelectItemEvent): void {
        typeaheadSelected.preventDefault();
        const viewModel = this.createViewFilter(typeaheadSelected.item.model);
        setTimeout(() => {
            this.getFilterController(viewModel).onFocus('next');
        });
    }

    createViewFilter(singleFilterModel, value?) {
        const uuid = UUID.UUID();
        const multiViewModel = this.viewModel.filter((param) => {
            return param['model'] === singleFilterModel;
        });
        const template = Object.assign({uuid: uuid}, this.findTemplate('model', singleFilterModel), {value: value});
        if (multiViewModel.length > 0) {
            const indexFirstMulti = this.viewModel.indexOf(multiViewModel[0]);
            this.viewModel.splice(indexFirstMulti, 0, template);
        }else {
            this.viewModel.push(template);
        }
        this.searchBox = '';
        return template;
    }

    addFilterController(uuid, controller): void {
        this.filtersControllers[uuid] = controller;
    }

    removeFilterController(uuid): void {
        delete this.filtersControllers[uuid];
    }

    nextFilterController(viewModel): FilterInterface | AdvancedSearchBoxComponent {
        const indexViewModel = this.viewModel.indexOf(viewModel);
        if (indexViewModel >= 0 && indexViewModel + 1 < this.viewModel.length) {
            const nextFilter: any = this.viewModel[indexViewModel + 1];
            return <FilterInterface>this.filtersControllers[nextFilter.uuid];
        }
        return this;
    }

    prevFilterController(viewModel): FilterInterface | AdvancedSearchBoxComponent {
        const indexViewModel = this.viewModel.indexOf(viewModel);
        if (indexViewModel > 0 ) {
            const prevFilter: any = this.viewModel[indexViewModel - 1];
            return <FilterInterface>this.filtersControllers[prevFilter.uuid];
        }
        return this;
    }

    getFilterController(viewModel): FilterInterface {
        return this.filtersControllers[viewModel.uuid];
    }

    removeViewModel(object): void {
        const index = this.viewModel.indexOf(object);
        if (index !== undefined && index > -1) {
            this.viewModel.splice(index, 1);
        }
    }

    removeAll(): void {
        this.viewModel = [];
        this.model = {};
    }

    viewToModel(viewModel) {
        this.filtersControllers[viewModel.uuid].viewToModel();
    }

    onFocus(prevNext) {
        this.searchboxInput.nativeElement.focus();
    }
}
