import { NgModel } from '@angular/forms';
import { element } from 'protractor';
import { AutosizeComponent } from './autosize.component';
import { ElementRef, HostListener, Directive, AfterContentChecked, OnInit,
    ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Directive({
  selector: 'input[autosize]'
})

export class AutosizeDirective implements AfterContentChecked, OnInit {
    base: number;
    supportedInputTypes = ['text', 'search', 'tel', 'url', 'email', 'password', 'number'];
    cssProps = [
        'fontSize', 'fontFamily', 'fontWeight', 'fontStyle',
        'letterSpacing', 'textTransform', 'wordSpacing', 'textIndent',
        'boxSizing', 'borderLeftWidth', 'borderRightWidth', 'borderLeftStyle', 'borderRightStyle',
        'paddingLeft', 'paddingRight', 'marginLeft', 'marginRight'
    ];
    autosizeValue;
    autosizeComponent: AutosizeComponent;

    @HostListener('input', ['$event.target']) onInput(textArea: HTMLInputElement): void {
        this.adjust();
    }

    constructor(
        private resolver: ComponentFactoryResolver,
        private element: ElementRef,
        private vc: ViewContainerRef,
        private ngModel: NgModel
    ) {

    }

    ngOnInit() {
        const factory = this.resolver.resolveComponentFactory(AutosizeComponent);
        this.autosizeComponent = this.vc.createComponent(factory).instance;
        //for (const prop of this.cssProps){
            this.autosizeComponent.shadowElement.nativeElement.style = getComputedStyle(this.element.nativeElement);
            // this.autosizeComponent.shadowElement.nativeElement.style[prop] = getComputedStyle(this.element.nativeElement)[prop];
        //}
        this.ngModel.valueChanges.subscribe(response => {
            this.autosizeComponent.autosizeValue = response;
        });
    }

    ngAfterContentChecked(): void {
        this.adjust();
    }

    adjust(): void {
        // this.element.nativeElement.style.minWidth = '50px';
        this.element.nativeElement.style.width = this.autosizeComponent.sizeElement.nativeElement.offsetWidth + 10 + 'px';
    }
}
