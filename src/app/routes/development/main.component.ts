import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'div[class="row flex-xl-nowrap"]',
    template: `
    <div class="col-12 col-md-3 col-xl-2 bd-sidebar">
        <nav class="collapse bd-links">
            <ul class="nav">
                <li>
                    <a href="#input">@Input</a>
                </li>
                <li>
                    <a href="#output">@Output</a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5">
        <h2 class="bd-title" id="input">@Input</h2>
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Input</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Required</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>[form]</td>
                    <td><code>FormGroup</code></td>
                    <td><code>new FormGroup()</code></td>
                    <td>false</td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td>[model]</td>
                    <td><code>Object</code></td>
                    <td>none</td>
                    <td>true</td>
                    <td></td>
                </tr>
                <tr>
                    <td>[openOnLoad]</td>
                    <td><code>Boolean</code></td>
                    <td><code>false</code></td>
                    <td>false</td>
                    <td></td>
                </tr>
                <tr>
                    <td>[template]</td>
                    <td><code>Array[ViewModelInterface]</code></td>
                    <td>none</td>
                    <td>true</td>
                    <td></td>
                </tr>
                <tr>
                    <td>[validators]</td>
                    <td><code>Object</code></td>
                    <td>none</td>
                    <td>false</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <br/><br/>
        <h2 class="bd-title" id="output">@Output</h2>
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th style="width:20%">Output</th>
                    <th style="width:80%">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>(editNext)</td>
                    <td>Fired when navigate to next filter</td>
                </tr>
                <tr>
                    <td>(editPrev)</td>
                    <td>Fired when navigate to prev filter</td>
                </tr>
                <tr>
                    <td>(onChangeViewModel)</td>
                    <td>Fired when view model change</td>
                </tr>
            </tbody>
        </table>
    </div>
    `,
    styles: [
        `
         .nav{
             flex-direction:column;
         }  
         .nav li{
            padding: .25rem 1.5rem;
         }
         .bd-sidebar{
            position: sticky;
            top: 4rem;
            height: calc(100vh - 4rem);
         }
        `
    ]
})
export class DevelopmentMainComponent {
    
}

