import { Component } from '@angular/core';

@Component({
    selector: 'div[page-api]',
    template: `
    <layout-header></layout-header>
    <div id="main-content" class="container-fluid">
        <router-outlet></router-outlet>
    </div>
    `,
    styles: [
        `
           
        `
    ]
})
export class ApiComponent {
}

