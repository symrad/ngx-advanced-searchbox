import { Component } from '@angular/core';

@Component({
    selector: 'div[page-api]',
    template: `
    <layout-header></layout-header>
    <div id="main-content" class="container-fluid">
        <div class="row flex-xl-nowrap">
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    styles: [
        `
           
        `
    ]
})
export class ApiComponent {
}

