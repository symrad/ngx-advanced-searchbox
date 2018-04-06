import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'div[class="row flex-xl-nowrap"][id="develop-main-component"]',
    template: `
    <div class="col-12 col-md-3 col-xl-3 sidebar">
        <nav class="collapse bd-links">
            <ul class="nav">
                <li>
                    <a href="#validation">Validation</a>
                </li>
                <li>
                    <a href="#format">Format value / label</a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="col-12 col-md-9 col-xl-9 py-md-4 pl-md-4">
        <h2 class="bd-title" id="validation">Validation</h2>
        <h2 class="bd-title" id="format">Format value / label</h2>
    </div>`,
    styles: [
        `
         .nav{
             flex-direction:column;
         }  
         .nav li{
            padding: .25rem 1.5rem;
         }
         .sidebar{
            position: sticky;
            top: 4rem;
            height: calc(100vh - 4rem);
         }
         nav h6{
             padding:10px;
             margin-bottom:0;
         }
        `
    ]
})
export class DevelopMainComponent {

    
}

