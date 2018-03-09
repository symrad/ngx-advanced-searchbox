import { Component } from '@angular/core';

@Component({
    selector: 'layout-sidenav',
    template: `
        <h6>
            <a class="nav-link" routerLink="/components/simple-input" routerLinkActive="active">Simple input</a>
        </h6>
        <ul class="nav nav-pills flex-column">
            <li class="nav-item" routerLinkActive="active">
                <a class="nav-link" routerLink="/components/simple-input/input" routerLinkActive="active">Input</a>
            </li>
            <li class="nav-item" routerLinkActive="active">
                <a class="nav-link" routerLink="/components/simple-input/input-with-mask" routerLinkActive="active">Input with mask</a>
            </li>
            <li class="nav-item" routerLinkActive="active">
                <a class="nav-link" routerLink="/components/simple-input/radio-select-switch" routerLinkActive="active">Radio/Select/Switch</a>
            </li>
            <li class="nav-item" routerLinkActive="active">
                <a class="nav-link" routerLink="/components/simple-input/checkboxlist" routerLinkActive="active">Checkbox List</a>
            </li>
            <li class="nav-item" routerLinkActive="active">
                <a class="nav-link" routerLink="/components/simple-input/input-with-suggestions" routerLinkActive="active">Input with suggestions</a>
            </li>
        </ul>
        <br/>
        <h6>
            <a class="nav-link" routerLink="/components/operators-input" routerLinkActive="active">Operators input</a>
        </h6>
        <ul class="nav nav-pills flex-column">
            <li class="nav-item" routerLinkActive="active">
                <a class="nav-link" routerLink="/components/operators-input/range" routerLinkActive="active">Range</a>
            </li>
        </ul>
    `,
    styles: [
        `
           .nav {
              margin-left:15px;
           }
        `
    ]
})
export class LayoutSidenavComponent {
}

