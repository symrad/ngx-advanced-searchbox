import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'layout-header',
    template: `
        <nav class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-primary">
            <a class="navbar-brand" href="#">
                <img src="assets/angular.svg" width="32px" height="32px"/>
                ngx-advanced-searchbox{{version}}
            </a>
            <button class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/getting-started" routerLinkActive="active">Getting started</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/components" routerLinkActive="active">Component</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/api" routerLinkActive="active">Api</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/develop" routerLinkActive="active">Develop</a>
                    </li>
                </ul>

                <form class="form-inline my-2 my-lg-0">
                    <iframe src="https://ghbtns.com/github-btn.html?user=symrad&repo=ngx-advanced-searchbox&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
                </form>
            </div>
        </nav>
    `,
    styles: [
        `
        :host{
            position: sticky;
            top: 0;
            z-index: 1071; // over everything in bootstrap  
        }
        `
    ]
})
export class LayoutHeaderComponent implements OnInit {
    theme = 'Default theme';
    @Input() version: string;

    ngOnInit() {
        
    }
    
}

