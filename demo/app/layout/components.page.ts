import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { pipe } from "rxjs";
import { switchMap, map, filter, mergeMap } from "rxjs/operators";

@Component({
    selector: 'div[page-components]',
    template: `
    <layout-header></layout-header>
    <div id="main-content">
        <div class="row">
            <div class="col-12 col-md-2 col-xl-3 py-md-4 bd-sidebar">
                <layout-sidenav></layout-sidenav>
            </div>
            <main class="col-12 col-md-10 col-xl-9 py-md-4 pl-md-4">
                <h2 class="bd-title">
                    {{title}}
                </h2>
                
                <router-outlet></router-outlet>
                    
            </main>
        </div>
    </div>
    `,
    styles: [
        `
        .bd-sidebar{
            position: sticky;
            top: 4rem;
            height: calc(100vh - 4rem);
         }
        `
    ]
})
export class ComponentsComponent {
    public title;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title
      ){
    
        
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map((route) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            filter((route) => route.outlet === 'primary'),
            mergeMap((route) => route.data))
            .subscribe((event) => {
                this.title = event['title'];
                this.titleService.setTitle(this.title);
        });
    }
}

