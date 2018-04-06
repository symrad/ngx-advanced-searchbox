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
        <div>
        Advanced searchbox (AS) gives the possibility of manage validation, if single filter is not valid its value is not write on AS model.
        To do this we can use an object pass through [validations] attribute, where keys are models of filters and values are arrays of validators.
        <pre><code highlight [code]="codeHtmlValidators"></code></pre>
        <pre><code highlight [code]="codeJsValidators"></code></pre>
        If you want to intercept the events of Form, used inside AS, is necessary pass a new instance of Form through [form] attribute.
        <pre><code highlight [code]="codeHtmlForm"></code></pre>
        <pre><code highlight [code]="codeJsForm"></code></pre>
        </div>
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

    public codeJsValidators = `
    import { FormGroup, FormControl, Validators } from '@angular/forms';
    ...
    class component{
        public validators:{[key:string]:Validators};
        
        constructor(){
            this.validators = {
                isEnabled:[Validators.required],
                email:[Validators.email]
            };
        }
    }
    `;

    public codeHtmlValidators = `
    <advanced-searchbox [template]="template" [model]="model" [validators]="validators"></advanced-searchbox>
    `

    public codeJsForm = `
    import { FormGroup, FormControl, Validators } from '@angular/forms';
    ...
    class component{
        public validators:{[key:string]:Validators};
        public form:FormGroup;

        constructor(){
            this.validators = {
                isEnabled:[Validators.required],
                email:[Validators.email]
            };

            this.form = new FormGroup({});

            this.form.valueChanges.subscribe((res)=>{
                console.log(res);
            });
            this.form.statusChanges.subscribe((res)=>{
                console.log(res);
            });
        }
    }
    `;

    public codeHtmlForm = `
    <advanced-searchbox [template]="template" [model]="model" [form]="form" [validators]="validators"></advanced-searchbox>
    `
}

