import { element } from 'protractor';
import { Component, ViewContainerRef, ComponentFactoryResolver, NgZone, VERSION, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'div[autosize]',
  template: `<div style="position: fixed; top: -9999px; left: 0px;height:1px;" #sizeElement>
                <span style="white-space:pre;" #shadowElement>{{autosizeValue}}</span>
            </div>`,
  styles: [':host { display:block;position: fixed; top: -9999px; left: 0px;}']
})
export class AutosizeComponent {
    @Input('autosizeValue') autosizeValue: any;
    @ViewChild('sizeElement') sizeElement: ElementRef;
    @ViewChild('shadowElement') shadowElement: ElementRef;

    constructor(public el: ElementRef) {}
}
