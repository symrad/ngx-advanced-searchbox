import { Component } from '@angular/core';

@Component({
    selector: 'layout-sidenav',
    template: `
        <ul class="nav nav-pills flex-column">
            <li class="nav-item" routerLinkActive="active">
                <a class="nav-link" routerLink="/general" routerLinkActive="active">General</a>
            </li>
            <li class="nav-item" routerLinkActive="active">
                <a class="nav-link" routerLink="/switch-radio" routerLinkActive="active">Switch/Radio</a>
            </li>
        </ul>
    `
})
export class LayoutSidenavComponent {
}

