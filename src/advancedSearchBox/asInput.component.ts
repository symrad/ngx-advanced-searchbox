import { FilterInterface } from './asFilter.interface';
import { UUID } from 'angular2-uuid';
import { AsComponent } from './as.component';
import { Component, OnInit, Renderer2, ElementRef, OnDestroy, Input, ViewChild, ComponentFactoryResolver, ResolvedReflectiveFactory, ViewContainerRef } from '@angular/core';
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

@Component({
    selector: 'as-input',
    templateUrl: './asInput.html',
    providers: [NgbTypeaheadConfig]
})
export class AsInputComponent extends AsBoxFilterAbstract implements OnInit {

   public inputInstance;
   @ViewChild('inputView', { read: ViewContainerRef }) inputView;

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
            const asSimpleInputComponent = this.resolver.resolveComponentFactory(AsSimpleInputComponent);
            this.inputInstance = this.inputView.createComponent(asSimpleInputComponent).instance;
        }
        if(this.viewModel.suggestions){
            const asDomainsInputComponent = this.resolver.resolveComponentFactory(AsSuggestionsInputComponent);
            this.inputInstance = this.inputView.createComponent(asDomainsInputComponent).instance;
        }
        if(this.viewModel.domains){
            const asDomainsInputComponent = this.resolver.resolveComponentFactory(AsDomainsInputComponent);
            this.inputInstance = this.inputView.createComponent(asDomainsInputComponent).instance;
        }

        this.inputInstance._filter = this;
    }

    onBlur() {
        super.onBlur();
        setTimeout(()=>{
            this.removeEmpty([this.viewModel.value]);
        },150);
    }

    public onChange() {
        this.viewToModel();
    }

}
