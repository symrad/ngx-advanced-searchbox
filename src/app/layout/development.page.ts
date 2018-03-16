import { Component } from '@angular/core';

@Component({
    selector: 'page-getting-started',
    template: `
    <layout-header></layout-header>
    <div class="container-fluid">
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
export class DevelopmentComponent {
}

