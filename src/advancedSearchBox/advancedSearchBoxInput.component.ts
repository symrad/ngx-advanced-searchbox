import { FilterInterface } from './advancedSearchBoxFilter.interface';
import { UUID } from 'angular2-uuid';
import { element } from 'protractor';
import { AdvancedSearchBoxComponent } from './advancedSearchBox.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AdvancedSearchBoxFilterAbstract } from './advancedSearchBoxFilter.abstract';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { AdvancedSearchBoxConfigService } from './advancedSearchBoxConfig.service';

@Component({
    selector: 'as-input',
    templateUrl: './advancedSearchBoxInput.html',
    providers: [NgbTypeaheadConfig]
})
export class AdvancedSearchBoxInputComponent extends AdvancedSearchBoxFilterAbstract implements OnInit {

   constructor(
        public advancedSearchBox: AdvancedSearchBoxComponent,
        public _renderer: Renderer2,
        public _el: ElementRef,
        public _http: HttpClient,
        public _config: AdvancedSearchBoxConfigService
    ) {
        super(advancedSearchBox, _renderer, _el, _http, _config);
    }

    ngOnInit() {
        super.ngOnInit();

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
    }

    onBlur() {
        super.onBlur();
        this.removeEmpty([this.viewModel.value]);
    }

    private onChange() {
        this.viewToModel();
    }

}
