import { Component } from '@angular/core';

@Component({
    selector: 'getting-started-main',
    template: `
    <p>
        A directive for Angular providing a advanced visual search box, inspired to <a href="http://dnauck.github.io/angular-advanced-searchbox/">angular-advanced-searchbox</a> for AngularJs
    </p>
    <h3>
        Dependencies
    </h3>
    <p>
        The required dependencies are:
    </p>
    <ul>
        <li>
            <a href="https://angular.io" target="_blank">Angular</a> (<em>requires</em> Angular version 5 or higher, tested with 5.0.2)
        </li>
        <li>
            <a href="https://www.getbootstrap.com" target="_blank">Bootstrap CSS</a> (tested with 4.0.0)
        </li>
        <li>
            <a href="https://ng-bootstrap.github.io" target="_blank">Ng-bootstrap</a> (tested with 1.0.0)
        </li>
        <li>
            <a href="https://ng-select.github.io/ng-select" target="_blank">Ng-select</a> (tested with 0.21.0)
        </li>
        <li>
            <a href="http://reactivex.io" target="_blank">RxJs</a> (<em>requires</em> RxJs 5.5 or higher, tested with 5.5)
        </li>
    </ul>
    `,
    styles: [
        `
           
        `
    ]
})
export class GettingStartedMainComponent {
}

