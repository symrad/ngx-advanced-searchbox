import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'div[class="row flex-xl-nowrap"][id="api-main-component"]',
    template: `
    <div class="col-12 col-md-3 col-xl-3 sidebar">
        <nav class="collapse bd-links">
            <h6>Annotation</h6>
            <ul class="nav">
                <li>
                    <a href="#input">@Input</a>
                </li>
                <li>
                    <a href="#output">@Output</a>
                </li>
            </ul>
            <h6>Enum</h6>
            <ul class="nav">
                <li>
                    <a href="#operatorsEnum">OperatorsEnum</a>
                </li>
            </ul>
            <h6>interface</h6>
            <ul class="nav">
                <li>
                    <a href="#maskInterface">MaskInterface</a>
                </li>
                <li>
                    <a href="#templateModelInterface">TemplateModelInterface</a>
                </li>
                <li>
                    <a href="#viewModelInterface">ViewModelInterface</a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="col-12 col-md-9 col-xl-9 py-md-4 pl-md-4">
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
                    if you want to use the events of the form you have to pass a instance of it throught form attribute.
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
                    <td>open dropdown of filters when the component is loaded</td>
                </tr>
                <tr>
                    <td>[template]</td>
                    <td><code>Array[<a href="#templateModelInterface">TemplateModelInterface</a>]</code></td>
                    <td>none</td>
                    <td>true</td>
                    <td></td>
                </tr>
                <tr>
                    <td>[validators]</td>
                    <td><code>{{'{'}}[validatorName:string]:Validator}</code></td>
                    <td>none</td>
                    <td>false</td>
                    <td>no add value of input to model if the form control is invalid</td>
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
        <br/><br/>
        <h2 class="bd-title" id="operatorsEnum">OperatorsEnum</h2>
        <pre><code highlight [code]="codeJsOperatorsEnum"></code></pre>
        <br/><br/>
        <h2 class="bd-title" id="viewModelInterface">ViewModelInterface</h2>
        <pre><code highlight [code]="codeJsViewModelInterface"></code></pre>
        <table class="table table-bordered table-striped">
            <thead>
                <th>Attribute</th>
                <th>Description</th>
            </thead>
            <tbody>
                <tr>
                    <td>value</td>
                    <td>the value of the filter</td>
                </tr>
                <tr>
                    <td>uuid</td>
                    <td>unique id</td>
                </tr>
            </tbody>
        </table>
        <br/><br/>
        <h2 class="bd-title" id="templateModelInterface">TemplateModelInterface</h2>
        <pre><code highlight [code]="codeJsTemplateModelInterface"></code></pre>
        <table class="table table-bordered table-striped">
            <thead>
                <th>Attribute</th>
                <th>Type</th>
                <th>Description</th>
            </thead>    
            <tbody>
                <tr>
                    <td>bindLabel</td>
                    <td><code>String</code></td>
                    <td>Object property to use for label. Default label</td>
                </tr>
                <tr>
                    <td>bindValue</td>
                    <td><code>String</code></td>
                    <td>Object property to use for selected model. By default binds to whole object.</td>
                </tr>
                <tr>
                    <td>date</td>
                    <td><code>Boolean</code></td>
                    <td>true if input of filter is to deal as a date</td>
                </tr>
                <tr>
                    <td>domains</td>
                    <td><code>Array{{'<'}}Object{{'>'}} | String (URL for async call)</code></td>
                    <td>List of options rendered under filter input, user can select only one of these options</td>
                </tr>
                <tr>
                    <td>inputType</td>
                    <td><code>String</code></td>
                    <td>type of input</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td><code>String</code></td>
                    <td>label of filter</td>
                </tr>
                <tr>
                    <td>mask</td>
                    <td><code><a href="#maskInterface">MaskInterface</a></code></td>
                    <td>mask applied to filter input</td>
                </tr>
                <tr>
                    <td>model</td>
                    <td><code>String</code></td>
                    <td>Object property to use for save model</td>
                </tr>
                <tr>
                    <td>multiple</td>
                    <td><code>String | Boolean | Number | '*'</code></td>
                    <td>the instances of filters that user can create</td>
                </tr>
                <tr>
                    <td>operators</td>
                    <td><code>Array{{'<'}}<a href="#operatorsEnum">OperatorsEnum</a>{{'>'}}</code></td>
                    <td>List of operators rendered on the left of filter input</td>
                </tr>
                <tr>
                    <td>position</td>
                    <td><code>Number</code></td>
                    <td>position of filter inside main dropdown</td>
                </tr>
                <tr>
                    <td>suggestions</td>
                    <td><code>Array{{'<'}}Object{{'>'}} | String (URL for async call)</code></td>
                    <td>List of suggestions rendered under filter input, user can select a suggestion or insert a custom string</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td><code>TypesFilterEnum</code></td>
                    <td>type of filter</td>
                </tr>
            </tbody>
        </table>
        <br/><br/>
        <h2 class="bd-title" id="maskInterface">MaskInterface</h2>
        <pre><code highlight [code]="codeJsMaskInterface"></code></pre>
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
export class ApiMainComponent {

    public codeJsOperatorsEnum = `
        export enum OperatorsEnum {
            eq = '=',
            lt = '<',
            le = '\u2264',
            ne = '\u2260',
            gt = '>',
            ge = '\u2265',
            startsWith = '[...',
            endsWith = '...]',
            contains = '[...]'
        }
    `;

    public codeJsMaskInterface = `
        export interface MaskInterface {
            mask: any;
            specialCharacters:any;
            patterns:any;
            dropSpecialCharacters:boolean;
            clearIfNotMatch:boolean;
        }
    `;

    public codeJsTemplateModelInterface = `
        export interface TemplateModelInterface {
            _templateUuid: string;
            bindLabel:any;
            bindValue:any;
            model: string;
            type: TypesFilterEnum;
            inputType: string;
            position: number;
            label: string;
            multiple: any;
            date: boolean;
            suggestions: any;
            domains: any;
            operators: Array<OperatorsEnum>;
            mask: MaskInterface;
        }
    `;

    public codeJsViewModelInterface = `
        export interface ViewModelInterface extends TemplateModelInterface{
            value: any;
            uuid: string;
        }
    `;

}

