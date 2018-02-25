import { Component } from '@angular/core';

@Component({
    selector: 'layout-sidenav',
    template: `
        <h6>
            <a class="nav-link" routerLink="/components/simple-input" routerLinkActive="active">Simple input</a>
        </h6>
        <ul class="nav nav-pills flex-column">
            <li class="nav-item" routerLinkActive="active">
                <a class="nav-link" routerLink="/components/simple-input/switch-radio" routerLinkActive="active">Switch/Radio</a>
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
            <a class="nav-link" routerLink="/range" routerLinkActive="active">Range</a>
        </h6>
        <ul class="nav nav-pills flex-column">
            
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

