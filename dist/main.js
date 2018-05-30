(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.title = 'app';
        this.model = {};
        //model = { "completeName2": "kjhjkhjk", "email2": [ "ewrerw" ], "username2": { "username": { "test": { "test": [ "fdsfdsfsd", "fdsfdfds" ], "username3": [ { "op": "contains", "value": "fdsfsdfsd" }, { "op": "contains", "value": "fdsfsdffdsfsfs" }, { "op": "endsWith", "value": "fdsfssd" }, { "op": "startsWith", "value": "fdsfdsfs" }, { "op": "startsWith", "value": "fdsfsdfsdfsdfsd" }, { "op": "contains", "value": "fdsfdfdsfdsfsdfsd" }, { "op": "contains", "value": "fdsfdsfdsdsfsdfsd" } ] } } } };
        this.template = [];
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.title = event['title'];
            _this.titleService.setTitle(_this.title);
        });
        //    setTimeout(()=>{
        /*
        switch/radioList
            'domains': [{label:'SI', value:true}, {label:'NO', value:false}],
            'multiple' : '1',
            'bindLabel': 'label',
            'bindValue': 'value'
        checkboxList
            'domains': [{label:'Berlin', value:1}, {label:'London', value:2}, {label:'Milan', value:3}, {label:'Paris', value:4}],
            'multiple' : '4',
            'bindLabel': 'label',
            'bindValue': 'value'
        tags with suggestions
            'suggestions': ['pippo@pippo.com', 'paperino@paperino.com', 'pluto@pluto.com'],
            'multiple' : '*'
        range
            {
              'model' : 'birth.from',
              'type' : 'OPERATORS',
              'label' : 'Data di nascita da',
              'operators' : [ 'le'],
              'multiple' : false,
              'mask':{
                mask:'99-99-9999'
              }
            },
            {
              'model' : 'birth.to',
              'type' : 'OPERATORS',
              'label' : 'Data di nascita a',
              'operators' : [ 'ne', 'ge'],
              'multiple' : false,
              'mask':{
                mask:'99-99-9999'
              }
            }
          autocomplete
          con formatModelViewValue e formatModelValue non si può mettere bindValue (solo bindLabel)
        */
        this.model =
            { "isEnabled": [{ "label": "Yes", "value": true }], "city": [1, 2, 3, 4], "youtube": ["Marvel Studios' Avengers: Infinity War Official Trailer"] };
        this.template = [
            {
                'model': 'isEnabled',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 1,
                'label': 'Enabled',
                'domains': [{ label: 'Yes', value: true }, { label: 'No', value: false }],
                'multiple': '1',
                'bindLabel': 'label'
            },
            {
                'model': 'city',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 2,
                'label': 'Città',
                'domains': [{ label: 'Berlin', value: 1 }, { label: 'London', value: 2 }, { label: 'Milan', value: 3 }, { label: 'Paris', value: 4 }],
                'multiple': '4',
                'bindLabel': 'label'
            },
            {
                'model': 'email',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 3,
                'label': 'E-mail',
                'suggestions': ['pippo@pippo.com', 'paperino@paperino.com', 'pluto@pluto.com'],
                'multiple': '*'
            },
            {
                'model': 'birth.from',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 4,
                'label': 'Data di nascita da',
                'operators': ['ge'],
                'multiple': false,
                'mask': {
                    mask: '99-99-9999'
                }
            },
            {
                'model': 'birth.to',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 5,
                'label': 'Data di nascita a',
                'operators': ['le', 'lt'],
                'multiple': false,
                'mask': {
                    mask: '99-99-9999'
                }
            },
            {
                'model': 'occupazione',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 2147483647,
                'label': 'Occupazione',
                'operators': ['startsWith', 'contains', 'eq', 'ne', 'endsWith'],
                'domains': [{ 'label': 'disoccupato' }, { 'label': 'impiegato' }, { 'label': 'operaio' }],
                'required': false,
                'multiple': '1',
                'bindLabel': 'label',
                'bindValue': 'label'
            },
            {
                'model': 'gmap',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 2147483647,
                'label': 'Location',
                'operators': ['startsWith', 'contains', 'eq', 'ne', 'endsWith'],
                'suggestions': 'https://maps.googleapis.com/maps/api/place/textsearch/json',
                'required': false,
                'multiple': '3',
                'bindLabel': 'label'
            },
            {
                'model': 'youtube',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 2147483647,
                'label': 'Youtube users',
                'operators': ['startsWith', 'contains', 'eq', 'ne', 'endsWith'],
                'domains': 'https://api.github.com/search/users',
                'required': false,
                'multiple': '3',
                'bindLabel': 'label'
            },
            {
                'model': 'test',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 2147483647,
                'label': 'Test',
                'operators': ['startsWith', 'contains', 'eq', 'ne', 'endsWith'],
                'domains': [{ 'label': 'disoccupato', 'id': '1' }, { 'label': 'impiegato', id: '2' }, { 'label': 'operaio', id: '3' }],
                'required': false,
                'multiple': '3',
                'bindLabel': 'label',
                'bindValue': 'id'
            },
        ];
        //    },10000);
    }
    AppComponent.prototype.onEditNext = function (data) {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [
                "\n         :host{\n           display:block;\n         }\n      "
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _routes_develop_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/develop/main.component */ "./src/app/routes/develop/main.component.ts");
/* harmony import */ var _layout_develop_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/develop.page */ "./src/app/layout/develop.page.ts");
/* harmony import */ var _routes_components_simple_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/components/simple-input/input.component */ "./src/app/routes/components/simple-input/input.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _routes_components_operators_input_range_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/components/operators-input/range.component */ "./src/app/routes/components/operators-input/range.component.ts");
/* harmony import */ var _routes_components_operators_input_operators_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/components/operators-input/operators.component */ "./src/app/routes/components/operators-input/operators.component.ts");
/* harmony import */ var _layout_components_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/components.page */ "./src/app/layout/components.page.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_advanced_searchbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-advanced-searchbox */ "./node_modules/ngx-advanced-searchbox/index.js");
/* harmony import */ var _appConfig_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./appConfig.service */ "./src/app/appConfig.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/header.component */ "./src/app/layout/header.component.ts");
/* harmony import */ var _layout_sidenav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/sidenav.component */ "./src/app/layout/sidenav.component.ts");
/* harmony import */ var _routes_components_simple_input_simple_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes/components/simple-input/simple.component */ "./src/app/routes/components/simple-input/simple.component.ts");
/* harmony import */ var _routes_components_simple_input_radioSelectSwitch_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/components/simple-input/radioSelectSwitch.component */ "./src/app/routes/components/simple-input/radioSelectSwitch.component.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var _routes_components_simple_input_checkboxList_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./routes/components/simple-input/checkboxList.component */ "./src/app/routes/components/simple-input/checkboxList.component.ts");
/* harmony import */ var _routes_components_simple_input_inputWithSuggestions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./routes/components/simple-input/inputWithSuggestions.component */ "./src/app/routes/components/simple-input/inputWithSuggestions.component.ts");
/* harmony import */ var _layout_gettingStarted_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layout/gettingStarted.page */ "./src/app/layout/gettingStarted.page.ts");
/* harmony import */ var _routes_getting_started_main_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./routes/getting-started/main.component */ "./src/app/routes/getting-started/main.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _routes_components_simple_input_inputWithMask_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./routes/components/simple-input/inputWithMask.component */ "./src/app/routes/components/simple-input/inputWithMask.component.ts");
/* harmony import */ var _layout_api_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./layout/api.page */ "./src/app/layout/api.page.ts");
/* harmony import */ var _routes_api_main_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./routes/api/main.component */ "./src/app/routes/api/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoutes = [
    {
        path: '',
        redirectTo: '/getting-started',
        pathMatch: 'full'
    },
    {
        path: 'getting-started',
        component: _layout_gettingStarted_page__WEBPACK_IMPORTED_MODULE_22__["GettingStartedComponent"],
        children: [
            { path: '', component: _routes_getting_started_main_component__WEBPACK_IMPORTED_MODULE_23__["GettingStartedMainComponent"], data: { title: 'Getting started' } }
        ]
    },
    {
        path: 'components',
        component: _layout_components_page__WEBPACK_IMPORTED_MODULE_6__["ComponentsComponent"],
        children: [
            { path: '',
                redirectTo: '/components/simple-input',
                pathMatch: 'full',
            },
            { path: 'simple-input', children: [
                    { path: '', component: _routes_components_simple_input_simple_component__WEBPACK_IMPORTED_MODULE_17__["ComponentsSimpleComponent"], data: { title: 'Simple input' } },
                    { path: 'input', component: _routes_components_simple_input_input_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsInputComponent"], data: { title: 'Input' } },
                    { path: 'input-with-mask', component: _routes_components_simple_input_inputWithMask_component__WEBPACK_IMPORTED_MODULE_26__["ComponentsInputWithMaskComponent"], data: { title: 'Input with mask' } },
                    { path: 'radio-select-switch', component: _routes_components_simple_input_radioSelectSwitch_component__WEBPACK_IMPORTED_MODULE_18__["ComponentsRadioSelectSwitchComponent"], data: { title: 'Radio - Select - Switch' } },
                    { path: 'checkboxlist', component: _routes_components_simple_input_checkboxList_component__WEBPACK_IMPORTED_MODULE_20__["ComponentsCheckboxListComponent"], data: { title: 'Checkbox List' } },
                    { path: 'input-with-suggestions', component: _routes_components_simple_input_inputWithSuggestions_component__WEBPACK_IMPORTED_MODULE_21__["ComponentsInputWithSuggestionsComponent"], data: { title: 'Input with suggestions' } },
                ] },
            { path: 'general', component: _routes_components_simple_input_simple_component__WEBPACK_IMPORTED_MODULE_17__["ComponentsSimpleComponent"], data: { title: 'General' } },
            { path: 'operators-input', children: [
                    { path: '', component: _routes_components_operators_input_operators_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsOperatorsInputComponent"], data: { title: 'Operators input' } },
                    { path: 'range', component: _routes_components_operators_input_range_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsRangeComponent"], data: { title: 'Range' } }
                ] }
        ]
    },
    {
        path: 'api',
        component: _layout_api_page__WEBPACK_IMPORTED_MODULE_27__["ApiComponent"],
        children: [
            { path: '', component: _routes_api_main_component__WEBPACK_IMPORTED_MODULE_28__["ApiMainComponent"], data: { title: 'Api' } }
        ]
    },
    {
        path: 'develop',
        component: _layout_develop_page__WEBPACK_IMPORTED_MODULE_1__["DevelopComponent"],
        children: [
            { path: '', component: _routes_develop_main_component__WEBPACK_IMPORTED_MODULE_0__["DevelopMainComponent"], data: { title: 'Develop' } }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _layout_header_component__WEBPACK_IMPORTED_MODULE_15__["LayoutHeaderComponent"],
                _layout_sidenav_component__WEBPACK_IMPORTED_MODULE_16__["LayoutSidenavComponent"],
                _routes_components_simple_input_simple_component__WEBPACK_IMPORTED_MODULE_17__["ComponentsSimpleComponent"],
                _routes_components_simple_input_input_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsInputComponent"],
                _routes_components_simple_input_radioSelectSwitch_component__WEBPACK_IMPORTED_MODULE_18__["ComponentsRadioSelectSwitchComponent"],
                _routes_components_simple_input_checkboxList_component__WEBPACK_IMPORTED_MODULE_20__["ComponentsCheckboxListComponent"],
                _routes_components_simple_input_inputWithSuggestions_component__WEBPACK_IMPORTED_MODULE_21__["ComponentsInputWithSuggestionsComponent"],
                _layout_gettingStarted_page__WEBPACK_IMPORTED_MODULE_22__["GettingStartedComponent"],
                _layout_components_page__WEBPACK_IMPORTED_MODULE_6__["ComponentsComponent"],
                _routes_getting_started_main_component__WEBPACK_IMPORTED_MODULE_23__["GettingStartedMainComponent"],
                _routes_components_operators_input_operators_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsOperatorsInputComponent"],
                _routes_components_operators_input_range_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsRangeComponent"],
                _routes_components_simple_input_inputWithMask_component__WEBPACK_IMPORTED_MODULE_26__["ComponentsInputWithMaskComponent"],
                _layout_api_page__WEBPACK_IMPORTED_MODULE_27__["ApiComponent"],
                _routes_api_main_component__WEBPACK_IMPORTED_MODULE_28__["ApiMainComponent"],
                _layout_develop_page__WEBPACK_IMPORTED_MODULE_1__["DevelopComponent"],
                _routes_develop_main_component__WEBPACK_IMPORTED_MODULE_0__["DevelopMainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                ngx_advanced_searchbox__WEBPACK_IMPORTED_MODULE_12__["AsBoxModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(appRoutes, {
                    useHash: true
                }),
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_19__["HighlightModule"].forRoot({ path: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].assetsPath + '/lib/hljs' }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_25__["ServiceWorkerModule"].register('/ngx-advanced-searchbox/dist/ngsw-worker.js', {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
                })
            ],
            providers: [
                { provide: ngx_advanced_searchbox__WEBPACK_IMPORTED_MODULE_12__["AsConfigService"], useClass: _appConfig_service__WEBPACK_IMPORTED_MODULE_13__["AppConfigService"] },
                _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.getMockCapital = function (term) {
        if (term === void 0) { term = null; }
        var items = getMockCapital();
        if (term) {
            items = items.filter(function (x) { return x.label.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1; });
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            observer.next(items);
        }, 500);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppService);
    return AppService;
}());

function getMockCapital() {
    return [
        { label: 'Rome', value: 1 },
        { label: 'London', value: 2 },
        { label: 'Berlin', value: 3 },
        { label: 'Paris', value: 4 },
        { label: 'Lisbon', value: 5 },
        { label: 'Madrid', value: 6 },
        { label: 'Tirana', value: 7 },
        { label: 'Buenos Aires', value: 8 },
        { label: 'Vienna', value: 9 },
        { label: 'Canberra', value: 10 },
        { label: 'Brussels', value: 11 },
        { label: 'Sarajevo', value: 12 },
        { label: 'Brasilia', value: 13 },
        { label: 'Sofia', value: 14 },
        { label: 'Athens', value: 15 },
        { label: 'Budapest', value: 16 }
    ];
}


/***/ }),

/***/ "./src/app/appConfig.service.ts":
/*!**************************************!*\
  !*** ./src/app/appConfig.service.ts ***!
  \**************************************/
/*! exports provided: AppConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigService", function() { return AppConfigService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_advanced_searchbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-advanced-searchbox */ "./node_modules/ngx-advanced-searchbox/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppConfigService = /** @class */ (function (_super) {
    __extends(AppConfigService, _super);
    function AppConfigService(_http) {
        var _this = _super.call(this, _http) || this;
        _this.customDomainsAsyncFn['youtube'] = function (observable, viewModel, model) {
            return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) {
                return _http.get('https://www.googleapis.com/youtube/v3/search', { params: {
                        q: term,
                        key: 'AIzaSyBafKFrisguQvT3WC20Q972uxS1cZfPvg8',
                        type: 'video',
                        maxResults: '12',
                        part: 'id,snippet'
                    } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return []; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                    var newResponse = { response: [], term: '' };
                    newResponse.response = response.items.map(function (item) {
                        return { label: item.snippet.title };
                    });
                    newResponse.term = term;
                    return newResponse;
                }));
            }));
        };
        _this.customSuggestionsAsyncFn['gmap'] = _this.customDomainsAsyncFn['youtube'];
        _this.formatModelValue = {
            'youtube': function (val) {
                if (val) {
                    return val.label;
                }
                return val;
            },
            'birth.to': function (val) {
                var newVal = Object.assign({}, val);
                var daySplitted = val.value.split('-');
                newVal.value = new Date(parseInt(daySplitted[2]), parseInt(daySplitted[1]) - 1, parseInt(daySplitted[0]), 12);
                return newVal;
            },
            'birth.from': function (val) {
                var newVal = Object.assign({}, val);
                var daySplitted = val.value.split('-');
                newVal.value = new Date(parseInt(daySplitted[2]), parseInt(daySplitted[1]) - 1, parseInt(daySplitted[0]), 12);
                return newVal;
            },
            'city': function (val) {
                if (val) {
                    return val.value;
                }
                return val;
            }
        };
        _this.formatModelViewValue = {
            'youtube': function (val) {
                if (typeof val === 'string') {
                    return { label: val };
                }
                return val;
            },
            'birth.to': function (val) {
                var newVal = Object.assign({}, val);
                newVal.value = new Date(val.value);
                newVal.value = newVal.value.getDate() + "-" + (newVal.value.getMonth() + 1) + "-" + newVal.value.getFullYear();
                return newVal;
            },
            'birth.from': function (val) {
                var newVal = Object.assign({}, val);
                newVal.value = new Date(val.value);
                newVal.value = newVal.value.getDate() + "-" + (newVal.value.getMonth() + 1) + "-" + newVal.value.getFullYear();
                return newVal;
            },
            'city': function (val, template) {
                var domainsFiltered = template.domains.filter(function (par) {
                    return par.value == val;
                });
                if (domainsFiltered.length > 0) {
                    return domainsFiltered[0];
                }
                return val;
            },
            'test': function (val, template) {
                var domainsFiltered = template.domains.filter(function (par) {
                    return par.label == val.value;
                });
                if (domainsFiltered.length > 0) {
                    return domainsFiltered[0].value.id;
                }
                if (val.value) {
                    return val.value;
                }
                return val;
            }
        };
        _this.customDomainsModelFormatter = {
            'test': function (viewModel, val) {
                var current = viewModel.domains.filter(function (item) {
                    if (typeof val === 'object') {
                        return item.id == val.id;
                    }
                    return item.id == val;
                });
                return current[0].label;
            }
        };
        return _this;
    }
    AppConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AppConfigService);
    return AppConfigService;
}(ngx_advanced_searchbox__WEBPACK_IMPORTED_MODULE_2__["AsConfigService"]));



/***/ }),

/***/ "./src/app/layout/api.page.ts":
/*!************************************!*\
  !*** ./src/app/layout/api.page.ts ***!
  \************************************/
/*! exports provided: ApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiComponent", function() { return ApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApiComponent = /** @class */ (function () {
    function ApiComponent() {
    }
    ApiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'div[page-api]',
            template: "\n    <layout-header></layout-header>\n    <div id=\"main-content\" class=\"container-fluid\">\n        <router-outlet></router-outlet>\n    </div>\n    ",
            styles: [
                "\n           \n        "
            ]
        })
    ], ApiComponent);
    return ApiComponent;
}());



/***/ }),

/***/ "./src/app/layout/components.page.ts":
/*!*******************************************!*\
  !*** ./src/app/layout/components.page.ts ***!
  \*******************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.title = event['title'];
            _this.titleService.setTitle(_this.title);
        });
    }
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'div[page-components]',
            template: "\n    <layout-header></layout-header>\n    <div id=\"main-content\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-2 col-xl-3 py-md-4 bd-sidebar\">\n                <layout-sidenav></layout-sidenav>\n            </div>\n            <main class=\"col-12 col-md-10 col-xl-9 py-md-4 pl-md-4\">\n                <h2 class=\"bd-title\">\n                    {{title}}\n                </h2>\n                \n                <router-outlet></router-outlet>\n                    \n            </main>\n        </div>\n    </div>\n    ",
            styles: [
                "\n        .bd-sidebar{\n            position: sticky;\n            top: 4rem;\n            height: calc(100vh - 4rem);\n         }\n        "
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/layout/develop.page.ts":
/*!****************************************!*\
  !*** ./src/app/layout/develop.page.ts ***!
  \****************************************/
/*! exports provided: DevelopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopComponent", function() { return DevelopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DevelopComponent = /** @class */ (function () {
    function DevelopComponent() {
    }
    DevelopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'div[page-develop]',
            template: "\n    <layout-header></layout-header>\n    <div id=\"main-content\" class=\"container-fluid\">\n        <router-outlet></router-outlet>\n    </div>\n    ",
            styles: [
                "\n           \n        "
            ]
        })
    ], DevelopComponent);
    return DevelopComponent;
}());



/***/ }),

/***/ "./src/app/layout/gettingStarted.page.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/gettingStarted.page.ts ***!
  \***********************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GettingStartedComponent = /** @class */ (function () {
    function GettingStartedComponent() {
    }
    GettingStartedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'div[page-getting-started]',
            template: "\n    <layout-header></layout-header>\n    <div id=\"main-content\" class=\"container fill\">\n        <div class=\"row\">\n            <main class=\"col-12 py-md-4 pl-md-4\">\n                <h2 class=\"bd-title\">\n                    \n                </h2>\n                \n                <router-outlet></router-outlet>\n                    \n            </main>\n        </div>\n    </div>\n    ",
            styles: [
                "\n           \n        "
            ]
        })
    ], GettingStartedComponent);
    return GettingStartedComponent;
}());



/***/ }),

/***/ "./src/app/layout/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/header.component.ts ***!
  \********************************************/
/*! exports provided: LayoutHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutHeaderComponent", function() { return LayoutHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutHeaderComponent = /** @class */ (function () {
    function LayoutHeaderComponent() {
        this.theme = 'Default theme';
    }
    LayoutHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LayoutHeaderComponent.prototype, "version", void 0);
    LayoutHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-header',
            template: "\n        <nav class=\"navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-primary\">\n            <a class=\"navbar-brand\" href=\"#\">\n                <img src=\"https://angular.io/assets/images/logos/angular/angular.svg\" width=\"32px\" height=\"32px\"/>\n                ngx-advanced-searchbox{{version}}\n            </a>\n            <button class=\"navbar-toggler\"\n                    type=\"button\"\n                    data-toggle=\"collapse\"\n                    data-target=\"#navbarsExampleDefault\"\n                    aria-controls=\"navbarsExampleDefault\"\n                    aria-expanded=\"false\"\n                    aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n\n            <div class=\"collapse navbar-collapse\">\n                <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/getting-started\" routerLinkActive=\"active\">Getting started</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/components\" routerLinkActive=\"active\">Component</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/api\" routerLinkActive=\"active\">Api</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/develop\" routerLinkActive=\"active\">Develop</a>\n                    </li>\n                </ul>\n\n                <form class=\"form-inline my-2 my-lg-0\">\n                    <iframe src=\"https://ghbtns.com/github-btn.html?user=symrad&repo=ngx-advanced-searchbox&type=star&count=true&size=large\" frameborder=\"0\" scrolling=\"0\" width=\"160px\" height=\"30px\"></iframe>\n                </form>\n            </div>\n        </nav>\n    ",
            styles: [
                "\n        :host{\n            position: sticky;\n            top: 0;\n            z-index: 1071; // over everything in bootstrap  \n        }\n        "
            ]
        })
    ], LayoutHeaderComponent);
    return LayoutHeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/sidenav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/sidenav.component.ts ***!
  \*********************************************/
/*! exports provided: LayoutSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSidenavComponent", function() { return LayoutSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutSidenavComponent = /** @class */ (function () {
    function LayoutSidenavComponent() {
    }
    LayoutSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-sidenav',
            template: "\n        <h6>\n            <a class=\"nav-link\" routerLink=\"/components/simple-input\" routerLinkActive=\"active\">Simple input</a>\n        </h6>\n        <ul class=\"nav nav-pills flex-column\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" routerLink=\"/components/simple-input/input\" routerLinkActive=\"active\">Input</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" routerLink=\"/components/simple-input/input-with-mask\" routerLinkActive=\"active\">Input with mask</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" routerLink=\"/components/simple-input/radio-select-switch\" routerLinkActive=\"active\">Radio / Select / Switch</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" routerLink=\"/components/simple-input/checkboxlist\" routerLinkActive=\"active\">Checkbox List</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" routerLink=\"/components/simple-input/input-with-suggestions\" routerLinkActive=\"active\">Input with suggestions</a>\n            </li>\n        </ul>\n        <br/>\n        <h6>\n            <a class=\"nav-link\" routerLink=\"/components/operators-input\" routerLinkActive=\"active\">Operators input</a>\n        </h6>\n        <ul class=\"nav nav-pills flex-column\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" routerLink=\"/components/operators-input/range\" routerLinkActive=\"active\">Range</a>\n            </li>\n        </ul>\n    ",
            styles: [
                "\n           .nav {\n              margin-left:15px;\n           }\n           \n        "
            ]
        })
    ], LayoutSidenavComponent);
    return LayoutSidenavComponent;
}());



/***/ }),

/***/ "./src/app/routes/api/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/api/main.component.ts ***!
  \**********************************************/
/*! exports provided: ApiMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiMainComponent", function() { return ApiMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApiMainComponent = /** @class */ (function () {
    function ApiMainComponent() {
        this.codeJsOperatorsEnum = "\n        export enum OperatorsEnum {\n            eq = '=',\n            lt = '<',\n            le = '\u2264',\n            ne = '\u2260',\n            gt = '>',\n            ge = '\u2265',\n            startsWith = '[...',\n            endsWith = '...]',\n            contains = '[...]'\n        }\n    ";
        this.codeJsMaskInterface = "\n        export interface MaskInterface {\n            mask: any;\n            specialCharacters:any;\n            patterns:any;\n            dropSpecialCharacters:boolean;\n            clearIfNotMatch:boolean;\n        }\n    ";
        this.codeJsTemplateModelInterface = "\n        export interface TemplateModelInterface {\n            _templateUuid: string;\n            bindLabel:any;\n            bindValue:any;\n            model: string;\n            type: TypesFilterEnum;\n            inputType: string;\n            position: number;\n            label: string;\n            multiple: any;\n            date: boolean;\n            suggestions: any;\n            domains: any;\n            operators: Array<OperatorsEnum>;\n            mask: MaskInterface;\n        }\n    ";
        this.codeJsViewModelInterface = "\n        export interface ViewModelInterface extends TemplateModelInterface{\n            value: any;\n            uuid: string;\n        }\n    ";
    }
    ApiMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'div[class="row flex-xl-nowrap"][id="api-main-component"]',
            template: "\n    <div class=\"col-12 col-md-3 col-xl-3 sidebar\">\n        <nav class=\"collapse bd-links\">\n            <h6>Annotation</h6>\n            <ul class=\"nav\">\n                <li>\n                    <a href=\"#input\">@Input</a>\n                </li>\n                <li>\n                    <a href=\"#output\">@Output</a>\n                </li>\n            </ul>\n            <h6>Enum</h6>\n            <ul class=\"nav\">\n                <li>\n                    <a href=\"#operatorsEnum\">OperatorsEnum</a>\n                </li>\n            </ul>\n            <h6>interface</h6>\n            <ul class=\"nav\">\n                <li>\n                    <a href=\"#maskInterface\">MaskInterface</a>\n                </li>\n                <li>\n                    <a href=\"#templateModelInterface\">TemplateModelInterface</a>\n                </li>\n                <li>\n                    <a href=\"#viewModelInterface\">ViewModelInterface</a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n    <div class=\"col-12 col-md-9 col-xl-9 py-md-4 pl-md-4\">\n        <h2 class=\"bd-title\" id=\"input\">@Input</h2>\n        <table class=\"table table-bordered table-striped\">\n            <thead>\n                <tr>\n                    <th>Input</th>\n                    <th>Type</th>\n                    <th>Default</th>\n                    <th>Required</th>\n                    <th>Description</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>[form]</td>\n                    <td><code>FormGroup</code></td>\n                    <td><code>new FormGroup()</code></td>\n                    <td>false</td>\n                    <td>\n                    if you want to use the events of the form you have to pass a instance of it throught form attribute.\n                    </td>\n                </tr>\n                <tr>\n                    <td>[model]</td>\n                    <td><code>Object</code></td>\n                    <td>none</td>\n                    <td>true</td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>[openOnLoad]</td>\n                    <td><code>Boolean</code></td>\n                    <td><code>false</code></td>\n                    <td>false</td>\n                    <td>open dropdown of filters when the component is loaded</td>\n                </tr>\n                <tr>\n                    <td>[template]</td>\n                    <td><code>Array[<a href=\"#templateModelInterface\">TemplateModelInterface</a>]</code></td>\n                    <td>none</td>\n                    <td>true</td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>[validators]</td>\n                    <td><code>{{'{'}}[validatorName:string]:Validator}</code></td>\n                    <td>none</td>\n                    <td>false</td>\n                    <td>no add value of input to model if the form control is invalid</td>\n                </tr>\n            </tbody>\n        </table>\n        <br/><br/>\n        <h2 class=\"bd-title\" id=\"output\">@Output</h2>\n        <table class=\"table table-bordered table-striped\">\n            <thead>\n                <tr>\n                    <th style=\"width:20%\">Output</th>\n                    <th style=\"width:80%\">Description</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>(editNext)</td>\n                    <td>Fired when navigate to next filter</td>\n                </tr>\n                <tr>\n                    <td>(editPrev)</td>\n                    <td>Fired when navigate to prev filter</td>\n                </tr>\n                <tr>\n                    <td>(onChangeViewModel)</td>\n                    <td>Fired when view model change</td>\n                </tr>\n            </tbody>\n        </table>\n        <br/><br/>\n        <h2 class=\"bd-title\" id=\"operatorsEnum\">OperatorsEnum</h2>\n        <pre><code highlight [code]=\"codeJsOperatorsEnum\"></code></pre>\n        <br/><br/>\n        <h2 class=\"bd-title\" id=\"viewModelInterface\">ViewModelInterface</h2>\n        <pre><code highlight [code]=\"codeJsViewModelInterface\"></code></pre>\n        <table class=\"table table-bordered table-striped\">\n            <thead>\n                <th>Attribute</th>\n                <th>Description</th>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>value</td>\n                    <td>the value of the filter</td>\n                </tr>\n                <tr>\n                    <td>uuid</td>\n                    <td>unique id</td>\n                </tr>\n            </tbody>\n        </table>\n        <br/><br/>\n        <h2 class=\"bd-title\" id=\"templateModelInterface\">TemplateModelInterface</h2>\n        <pre><code highlight [code]=\"codeJsTemplateModelInterface\"></code></pre>\n        <table class=\"table table-bordered table-striped\">\n            <thead>\n                <th>Attribute</th>\n                <th>Type</th>\n                <th>Description</th>\n            </thead>    \n            <tbody>\n                <tr>\n                    <td>bindLabel</td>\n                    <td><code>String</code></td>\n                    <td>Object property to use for label. Default label</td>\n                </tr>\n                <tr>\n                    <td>bindValue</td>\n                    <td><code>String</code></td>\n                    <td>Object property to use for selected model. By default binds to whole object.</td>\n                </tr>\n                <tr>\n                    <td>date</td>\n                    <td><code>Boolean</code></td>\n                    <td>true if input of filter is to deal as a date</td>\n                </tr>\n                <tr>\n                    <td>domains</td>\n                    <td><code>Array{{'<'}}Object{{'>'}} | String (URL for async call)</code></td>\n                    <td>List of options rendered under filter input, user can select only one of these options</td>\n                </tr>\n                <tr>\n                    <td>inputType</td>\n                    <td><code>String</code></td>\n                    <td>type of input</td>\n                </tr>\n                <tr>\n                    <td>label</td>\n                    <td><code>String</code></td>\n                    <td>label of filter</td>\n                </tr>\n                <tr>\n                    <td>mask</td>\n                    <td><code><a href=\"#maskInterface\">MaskInterface</a></code></td>\n                    <td>mask applied to filter input</td>\n                </tr>\n                <tr>\n                    <td>model</td>\n                    <td><code>String</code></td>\n                    <td>Object property to use for save model</td>\n                </tr>\n                <tr>\n                    <td>multiple</td>\n                    <td><code>String | Boolean | Number | '*'</code></td>\n                    <td>the instances of filters that user can create</td>\n                </tr>\n                <tr>\n                    <td>operators</td>\n                    <td><code>Array{{'<'}}<a href=\"#operatorsEnum\">OperatorsEnum</a>{{'>'}}</code></td>\n                    <td>List of operators rendered on the left of filter input</td>\n                </tr>\n                <tr>\n                    <td>position</td>\n                    <td><code>Number</code></td>\n                    <td>position of filter inside main dropdown</td>\n                </tr>\n                <tr>\n                    <td>suggestions</td>\n                    <td><code>Array{{'<'}}Object{{'>'}} | String (URL for async call)</code></td>\n                    <td>List of suggestions rendered under filter input, user can select a suggestion or insert a custom string</td>\n                </tr>\n                <tr>\n                    <td>type</td>\n                    <td><code>TypesFilterEnum</code></td>\n                    <td>type of filter</td>\n                </tr>\n            </tbody>\n        </table>\n        <br/><br/>\n        <h2 class=\"bd-title\" id=\"maskInterface\">MaskInterface</h2>\n        <pre><code highlight [code]=\"codeJsMaskInterface\"></code></pre>\n    </div>",
            styles: [
                "\n         .nav{\n             flex-direction:column;\n         }  \n         .nav li{\n            padding: .25rem 1.5rem;\n         }\n         .sidebar{\n            position: sticky;\n            top: 4rem;\n            height: calc(100vh - 4rem);\n         }\n         nav h6{\n             padding:10px;\n             margin-bottom:0;\n         }\n        "
            ]
        })
    ], ApiMainComponent);
    return ApiMainComponent;
}());



/***/ }),

/***/ "./src/app/routes/components/operators-input/operators.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/routes/components/operators-input/operators.component.ts ***!
  \**************************************************************************/
/*! exports provided: ComponentsOperatorsInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsOperatorsInputComponent", function() { return ComponentsOperatorsInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsOperatorsInputComponent = /** @class */ (function () {
    function ComponentsOperatorsInputComponent() {
        this.model = {};
        this.template = [];
        this.model = {};
        this.template = [
            {
                'model': 'birth.from',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 4,
                'label': 'Birth from',
                'operators': ['ge', 'gt', 'eq'],
                'multiple': false,
                'mask': {
                    mask: '99-99-9999'
                }
            },
            {
                'model': 'birth.to',
                'type': 'OPERATORS',
                'inputType': 'TEXT',
                'position': 5,
                'label': 'Birth to',
                'operators': ['le', 'lt'],
                'multiple': false,
                'mask': {
                    mask: '99-99-9999'
                }
            },
            {
                'model': 'youtube',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 2147483647,
                'label': 'Youtube users',
                'operators': ['startsWith', 'contains', 'eq', 'ne', 'endsWith'],
                'domains': 'https://api.github.com/search/users',
                'required': false,
                'multiple': '3',
                'bindLabel': 'label'
            }
        ];
        this.codeJs = "\n    constructor(){\n\n      this.model = {};\n      this.template = [\n        {\n          'model' : 'birth.from',\n          'type' : 'OPERATORS',\n          'inputType' : 'TEXT',\n          'position' : 4,\n          'label' : 'Birth from',\n          'operators' : [ 'ge','gt','eq'],\n          'multiple' : false,\n          'mask':{\n            mask:'99-99-9999'\n          }\n        },\n        {\n          'model' : 'birth.to',\n          'type' : 'OPERATORS',\n          'inputType' : 'TEXT',\n          'position' : 5,\n          'label' : 'Birth to',\n          'operators' : [ 'le', 'lt'],\n          'multiple' : false,\n          'mask':{\n            mask:'99-99-9999'\n          }\n        },\n        {\n          'model' : 'youtube',\n          'type' : 'INPUT',\n          'inputType' : 'TEXT',\n          'position' : 2147483647,\n          'label' : 'Youtube users',\n          'operators' : [ 'startsWith', 'contains', 'eq', 'ne', 'endsWith' ],\n          'domains': 'https://api.github.com/search/users',\n          'required' : false,\n          'multiple' : '3',\n          'bindLabel' : 'label'\n          \n        }\n      ];\n    }\n    ";
        this.codeHtml = "\n      <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n      </advanced-searchbox>\n    ";
    }
    ComponentsOperatorsInputComponent.prototype.onEditNext = function (data) {
    };
    ComponentsOperatorsInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'components-operators',
            template: "\n    <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n    </advanced-searchbox>\n    <br/>\n    <div>\n      <code>\n        {{model | json}}\n      </code>\n      <br/>\n      <br/>\n      <h5>Code</h5>\n      <ngb-tabset>\n        <ngb-tab title=\"Ts\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeJs\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Html\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeHtml\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n    ",
            styles: [
                "\n           .overflow-box {\n               widht: 300px;\n               padding: 5px;\n               height: 100px;\n               border: 1px solid #999;\n               overflow: hidden;\n           }\n        "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsOperatorsInputComponent);
    return ComponentsOperatorsInputComponent;
}());



/***/ }),

/***/ "./src/app/routes/components/operators-input/range.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/routes/components/operators-input/range.component.ts ***!
  \**********************************************************************/
/*! exports provided: ComponentsRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRangeComponent", function() { return ComponentsRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsRangeComponent = /** @class */ (function () {
    function ComponentsRangeComponent() {
        this.model = {};
        this.template = {};
        this.model = { "isEnabled": [{ "label": "Yes", "value": true }] };
        this.template = [
            {
                'model': 'birth.from',
                'type': 'OPERATORS',
                'label': 'Birth from',
                'operators': ['ge', 'gt', 'eq'],
                'multiple': false,
                'mask': {
                    mask: '99-99-9999'
                }
            },
            {
                'model': 'birth.to',
                'type': 'OPERATORS',
                'label': 'Birth to',
                'operators': ['le', 'lt'],
                'multiple': false,
                'mask': {
                    mask: '99-99-9999'
                }
            }
        ];
        this.codeJs = "\n      public model = {};\n      public template = {};\n\n      constructor(_config:AsConfigService){\n        this.model = { \"isEnabled\": [ { \"label\": \"Yes\", \"value\": true } ]};\n        this.template = [\n          {\n            'model' : 'birth.from',\n            'type' : 'OPERATORS',\n            'label' : 'Birth from',\n            'operators' : [ 'ge','gt','eq'],\n            'multiple' : false,\n            'mask':{\n              mask:'99-99-9999'\n            }\n          },\n          {\n            'model' : 'birth.to',\n            'type' : 'OPERATORS',\n            'label' : 'Birth to',\n            'operators' : [ 'le', 'lt'],\n            'multiple' : false,\n            'mask':{\n              mask:'99-99-9999'\n            }\n          }\n        ];\n        this.formatModelValue = {\n            'birth.to':function(val){\n                const newVal = Object.assign({},val);\n                const daySplitted = val.value.split('-');\n                newVal.value = new Date(\n                  parseInt(daySplitted[2]),\n                  parseInt(daySplitted[1])-1,\n                  parseInt(daySplitted[0])\n                  ,12);\n                return newVal;\n            },\n            'birth.from':function(val){\n                const newVal = Object.assign({},val);\n                const daySplitted = val.value.split('-');\n                newVal.value = new Date(\n                  parseInt(daySplitted[2]),\n                  parseInt(daySplitted[1])-1,\n                  parseInt(daySplitted[0]),\n                  12);\n                return newVal;\n            }\n        };\n\n        this.formatModelViewValue = {\n            'birth.to':function(val){\n                const newVal = Object.assign({},val);\n                newVal.value = new Date(val.value);\n                newVal.value = newVal.value.getDate()  \n                               + \"-\" \n                               + (newVal.value.getMonth()+1) \n                               + \"-\" \n                               + newVal.value.getFullYear();\n                return newVal;\n            },\n            'birth.from':function(val){\n                const newVal = Object.assign({},val);\n                newVal.value = new Date(val.value);\n                newVal.value = newVal.value.getDate()  \n                               + \"-\" \n                               + (newVal.value.getMonth()+1) \n                               + \"-\" \n                               + newVal.value.getFullYear();\n                return newVal;\n            }\n        };\n      }";
        this.codeHtml = "\n      <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n      </advanced-searchbox>\n    ";
    }
    ComponentsRangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'range',
            template: "\n    <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n    </advanced-searchbox>\n    <br/>\n    <div>\n      <h5>Model</h5>\n      <code>\n        {{model | json}}\n      </code>\n      <br/>\n      <br/>\n      <h5>Code</h5>\n      <ngb-tabset>\n        <ngb-tab title=\"Ts\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeJs\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Html\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeHtml\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n    ",
            styles: [
                "\n           .overflow-box {\n               widht: 300px;\n               padding: 5px;\n               height: 100px;\n               border: 1px solid #999;\n               overflow: hidden;\n           }\n        "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsRangeComponent);
    return ComponentsRangeComponent;
}());



/***/ }),

/***/ "./src/app/routes/components/simple-input/checkboxList.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/routes/components/simple-input/checkboxList.component.ts ***!
  \**************************************************************************/
/*! exports provided: ComponentsCheckboxListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsCheckboxListComponent", function() { return ComponentsCheckboxListComponent; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_advanced_searchbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-advanced-searchbox */ "./node_modules/ngx-advanced-searchbox/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComponentsCheckboxListComponent = /** @class */ (function () {
    function ComponentsCheckboxListComponent(_config, _http, service) {
        var _this = this;
        this.service = service;
        this.model = {};
        this.template = {};
        this.modelAsync = {};
        this.templateAsync = {};
        this.model = { "cities": ['Milan', 'Paris'] };
        this.template = [
            {
                'model': 'cities',
                'type': 'INPUT',
                'domains': ['Milan', 'Paris', 'Madrid', 'London'],
                'multiple': '4',
                'label': 'City'
            }
        ];
        this.codeHtml = "\n      <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n      </advanced-searchbox>\n    ";
        this.codeJs = "\n      public model = {};\n      public template = {};\n\n      constructor(_config:AsConfigService){\n        this.model = {\"cities\": ['Milan','Paris']};\n        this.template = [\n          {\n            'model': 'cities',\n            'type' : 'INPUT',\n            'domains': ['Milan','Paris','Madrid','London'],\n            'multiple' : '4',\n            'label': 'City'\n          }\n        ];\n    ";
        this.templateAsync = [
            {
                'model': 'capital',
                'type': 'INPUT',
                'domains': 'domains',
                'multiple': '4',
                'label': 'capital',
                'bindLabel': 'label'
            }
        ];
        this.codeHtmlAsync = "\n      <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n      </advanced-searchbox>\n    ";
        this.codeJsAsync = "\n      public model = {};\n      public template = {};\n\n      constructor(_config:AsConfigService, _http:HttpClient, public service:AppService){\n        this.template = [\n          {\n            'model': 'capital',\n            'type' : 'INPUT',\n            'domains': 'domains',\n            'multiple' : '4',\n            'bindLabel' : 'label',\n            'label': 'capital'\n          }\n\n          _config.customDomainsAsyncFn['capital'] = (observable, viewModel, model) => {\n            return observable\n            .switchMap((term) => {\n                return this.service.getMockCapital(term,'capital')\n                .map((response:any) => {\n                  let newResponse = {response:response, term:term};\n                  return newResponse;\n                });\n              }\n            );\n          }\n        ];\n    ";
        _config.customDomainsAsyncFn['capital'] = function (observable, viewModel, model) {
            return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) {
                return _this.service.getMockCapital(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                    var newResponse = { response: response, term: term };
                    return newResponse;
                }));
            }));
        };
    }
    ComponentsCheckboxListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'checkbox-list',
            template: "\n    <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n    </advanced-searchbox>\n    <br/>\n    <div>\n      <h5>Model</h5>\n      <code>\n        {{model | json}}\n      </code>\n      <br/>\n      <br/>\n      <h5>Code</h5>\n      <ngb-tabset>\n        <ngb-tab title=\"Ts\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeJs\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Html\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeHtml\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n    <h4 class=\"bd-title\">\n      With remote data source\n    </h4>\n    <advanced-searchbox [template]=\"templateAsync\" [model]=\"modelAsync\" [openOnLoad]=\"false\">\n    </advanced-searchbox>\n    <br/>\n    <div>\n      <h5>Model</h5>\n      <code>\n        {{modelAsync | json}}\n      </code>\n      <br/>\n      <br/>\n      <h5>Code</h5>\n      <ngb-tabset>\n        <ngb-tab title=\"Ts\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeJsAsync\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Html\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeHtmlAsync\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n    ",
            styles: [
                "\n           .overflow-box {\n               widht: 300px;\n               padding: 5px;\n               height: 100px;\n               border: 1px solid #999;\n               overflow: hidden;\n           }\n        "
            ]
        }),
        __metadata("design:paramtypes", [ngx_advanced_searchbox__WEBPACK_IMPORTED_MODULE_2__["AsConfigService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"]])
    ], ComponentsCheckboxListComponent);
    return ComponentsCheckboxListComponent;
}());



/***/ }),

/***/ "./src/app/routes/components/simple-input/input.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/components/simple-input/input.component.ts ***!
  \*******************************************************************/
/*! exports provided: ComponentsInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsInputComponent", function() { return ComponentsInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsInputComponent = /** @class */ (function () {
    function ComponentsInputComponent() {
        this.model = {};
        this.template = [
            {
                'model': 'vatNumber',
                'type': 'INPUT',
                'multiple': false,
                'label': 'VAT number'
            }
        ];
        this.codeHtml = "\n            <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n            </advanced-searchbox>\n        ";
        this.codeJs = "\n            public model;\n            public template;\n\n            constructor(){\n                this.model = {};\n                this.template = [\n                    {\n                    'model': 'vatNumber',\n                    'type' : 'INPUT',\n                    'multiple' : false,\n                    'label': 'VAT number'\n                    }\n                ];\n            }\n        ";
    }
    ComponentsInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'free-input',
            template: "\n    <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n    </advanced-searchbox>\n    <br/>\n    <div>\n      <h5>Model</h5>\n      <code>\n        {{model | json}}\n      </code>\n      <br/>\n      <br/>\n      <h5>Code</h5>\n      <ngb-tabset>\n        <ngb-tab title=\"Ts\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeJs\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Html\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeHtml\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>",
            styles: [
                "\n           .overflow-box {\n               widht: 300px;\n               padding: 5px;\n               height: 100px;\n               border: 1px solid #999;\n               overflow: hidden;\n           }\n        "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsInputComponent);
    return ComponentsInputComponent;
}());



/***/ }),

/***/ "./src/app/routes/components/simple-input/inputWithMask.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/routes/components/simple-input/inputWithMask.component.ts ***!
  \***************************************************************************/
/*! exports provided: ComponentsInputWithMaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsInputWithMaskComponent", function() { return ComponentsInputWithMaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsInputWithMaskComponent = /** @class */ (function () {
    function ComponentsInputWithMaskComponent() {
        this.model = {};
        this.template = [
            {
                'model': 'dateOfBirth',
                'type': 'INPUT',
                'multiple': false,
                'label': 'Date of birth',
                'mask': {
                    mask: '99-99-9999'
                }
            },
            {
                'model': 'phone',
                'type': 'INPUT',
                'multiple': false,
                'label': 'Phone',
                'mask': {
                    mask: '(000) 000-000'
                }
            }
        ];
        this.codeHtml = "\n            <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n            </advanced-searchbox>\n        ";
        this.codeJs = "\n            public model;\n            public template;\n\n            constructor(){\n                this.model = {};\n                this.template = [\n                    {\n                      'model': 'dateOfBirth',\n                      'type' : 'INPUT',\n                      'multiple' : false,\n                      'label': 'Date of birth',\n                      'placeholder':'99-99-9999',\n                      'mask':{\n                        mask:'99-99-9999'\n                      }\n                    },\n                    {\n                      'model': 'phone',\n                      'type' : 'INPUT',\n                      'multiple' : false,\n                      'label': 'Phone',\n                      'placeholder':'(000) 000-000',\n                      'mask':{\n                        mask:'(000) 000-000'\n                      }\n                    }\n                ];\n            }\n        ";
    }
    ComponentsInputWithMaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mask-input',
            template: "\n    <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n    </advanced-searchbox>\n    <br/>\n    <div>\n      <h5>Model</h5>\n      <code>\n        {{model | json}}\n      </code>\n      <br/>\n      <br/>\n      <h5>Code</h5>\n      <ngb-tabset>\n        <ngb-tab title=\"Ts\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeJs\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Html\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeHtml\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>",
            styles: [
                "\n           .overflow-box {\n               widht: 300px;\n               padding: 5px;\n               height: 100px;\n               border: 1px solid #999;\n               overflow: hidden;\n           }\n        "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsInputWithMaskComponent);
    return ComponentsInputWithMaskComponent;
}());



/***/ }),

/***/ "./src/app/routes/components/simple-input/inputWithSuggestions.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/routes/components/simple-input/inputWithSuggestions.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ComponentsInputWithSuggestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsInputWithSuggestionsComponent", function() { return ComponentsInputWithSuggestionsComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_advanced_searchbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-advanced-searchbox */ "./node_modules/ngx-advanced-searchbox/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComponentsInputWithSuggestionsComponent = /** @class */ (function () {
    function ComponentsInputWithSuggestionsComponent(_config, _http) {
        this.model = {};
        this.template = {};
        this.modelAsync = {};
        this.templateAsync = {};
        this.model = { "name": ["pippo"] };
        this.template = [
            {
                'model': 'name',
                'type': 'INPUT',
                'suggestions': ['pippo', 'pluto', 'paperino'],
                'multiple': '*',
                'label': 'Name'
            }
        ];
        this.codeJs = "\n      public model = {};\n      public template = {};\n\n      constructor(_config:AsConfigService){\n        this.model = {\"name\": [ \"pippo\" ]};\n        this.template = [\n          {\n            'model': 'name',\n            'type' : 'INPUT',\n            'suggestions': ['pippo', 'pluto', 'paperino'],\n            'multiple' : '*',\n            'label': 'Name'\n          }\n        ];\n      }";
        this.codeHtml = "\n      <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n      </advanced-searchbox>\n    ";
        this.templateAsync = [
            {
                'model': 'youtube',
                'type': 'INPUT',
                'suggestions': 'https://www.googleapis.com/youtube/v3/search',
                'multiple': '*',
                'label': 'Youtube video'
            }
        ];
        this.codeJsAsync = "\n      public model = {};\n      public template = {};\n\n      constructor(_config:AsConfigService){\n        this.template = [\n          {\n            'model': 'youtube',\n            'type' : 'INPUT',\n            'suggestions': 'https://www.googleapis.com/youtube/v3/search',\n            'multiple' : '*',\n            'bindLabel':'label',\n            'label': 'Youtube video'\n          }\n        ];\n\n        _config.customSuggestionsAsyncFn['youtube'] = (observable, viewModel, model) => {\n          return observable\n          .switchMap((term) => {\n              return _http.get('https://www.googleapis.com/youtube/v3/search', {params:{\n                  q:term,\n                  key: '{your key}',\n                  type: 'video',\n                  maxResults: '12',\n                  part: 'id,snippet'\n                  }})\n                  .catch(()=>[])\n                  .map((response:any) => {\n                      let newResponse = {response:[], term:''};\n                      newResponse.response = response.items.map((item)=>{\n                          return item.snippet.title;\n                      });\n                      newResponse.term = term;\n                      return newResponse;\n                  })\n              }\n          );\n        }\n      }";
        this.codeHtmlAsync = "\n      <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n      </advanced-searchbox>\n    ";
        _config.customSuggestionsAsyncFn['youtube'] = function (observable, viewModel, model) {
            return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) {
                return _http.get('https://www.googleapis.com/youtube/v3/search', { params: {
                        q: term,
                        key: 'AIzaSyBafKFrisguQvT3WC20Q972uxS1cZfPvg8',
                        type: 'video',
                        maxResults: '12',
                        part: 'id,snippet'
                    } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return []; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                    var newResponse = { response: [], term: '' };
                    newResponse.response = response.items.map(function (item) {
                        return item.snippet.title;
                    });
                    newResponse.term = term;
                    return newResponse;
                }));
            }));
        };
    }
    ComponentsInputWithSuggestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'input-with-suggestions',
            template: "\n    <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n    </advanced-searchbox>\n    <br/>\n    <div>\n      <h5>Model</h5>\n      <code>\n        {{model | json}}\n      </code>\n      <br/>\n      <br/>\n      <h5>Code</h5>\n      <ngb-tabset>\n        <ngb-tab title=\"Ts\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeJs\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Html\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeHtml\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n    <h4 class=\"bd-title\">\n      With remote data source\n    </h4>\n    <advanced-searchbox [template]=\"templateAsync\" [model]=\"modelAsync\" [openOnLoad]=\"false\">\n    </advanced-searchbox>\n    <br/>\n    <div>\n      <h5>Model</h5>\n      <code>\n        {{modelAsync | json}}\n      </code>\n      <br/>\n      <br/>\n      <h5>Code</h5>\n      <ngb-tabset>\n        <ngb-tab title=\"Ts\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeJsAsync\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Html\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeHtmlAsync\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n\n    ",
            styles: [
                "\n           .overflow-box {\n               widht: 300px;\n               padding: 5px;\n               height: 100px;\n               border: 1px solid #999;\n               overflow: hidden;\n           }\n        "
            ]
        }),
        __metadata("design:paramtypes", [ngx_advanced_searchbox__WEBPACK_IMPORTED_MODULE_1__["AsConfigService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ComponentsInputWithSuggestionsComponent);
    return ComponentsInputWithSuggestionsComponent;
}());



/***/ }),

/***/ "./src/app/routes/components/simple-input/radioSelectSwitch.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/components/simple-input/radioSelectSwitch.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ComponentsRadioSelectSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRadioSelectSwitchComponent", function() { return ComponentsRadioSelectSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsRadioSelectSwitchComponent = /** @class */ (function () {
    function ComponentsRadioSelectSwitchComponent() {
        this.model = {};
        this.template = {};
        this.model = { "isEnabled": [{ "label": "Yes", "value": true }] };
        this.template = [
            {
                'model': 'isEnabled',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 1,
                'label': 'Enabled',
                'domains': [{ label: 'Yes', value: true }, { label: 'No', value: false }],
                'multiple': '1',
                'bindLabel': 'label'
            }
        ];
        this.codeJs = "\n      public model = {};\n      public template = {};\n\n      constructor(){\n        this.model = { \"isEnabled\": [ { \"label\": \"Yes\", \"value\": true } ]};\n        this.template = [\n          {\n            'model' : 'isEnabled',\n            'type' : 'INPUT',\n            'position' : 1,\n            'label' : 'Enabled',\n            'domains': [{label:'Yes', value:true}, {label:'No', value:false}],\n            'multiple' : '1',\n            'bindLabel': 'label'\n          }\n        ];\n      }";
        this.codeHtml = "\n    <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n    </advanced-searchbox>\n    ";
    }
    ComponentsRadioSelectSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-switch-radio',
            template: "\n    <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n    </advanced-searchbox>\n    <br/>\n    <div>\n      <h5>Model</h5>\n      <code>\n        {{model | json}}\n      </code>\n      <br/>\n      <br/>\n      <h5>Code</h5>\n      <ngb-tabset>\n        <ngb-tab title=\"Ts\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeJs\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Html\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeHtml\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n    ",
            styles: [
                "\n           .overflow-box {\n               widht: 300px;\n               padding: 5px;\n               height: 100px;\n               border: 1px solid #999;\n               overflow: hidden;\n           }\n        "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsRadioSelectSwitchComponent);
    return ComponentsRadioSelectSwitchComponent;
}());



/***/ }),

/***/ "./src/app/routes/components/simple-input/simple.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/routes/components/simple-input/simple.component.ts ***!
  \********************************************************************/
/*! exports provided: ComponentsSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsSimpleComponent", function() { return ComponentsSimpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsSimpleComponent = /** @class */ (function () {
    function ComponentsSimpleComponent() {
        this.model = {};
        this.template = [];
        this.model =
            { "isEnabled": [{ "label": "Yes", "value": true }], "cities": ['Milan', 'Paris'] };
        this.template = [
            {
                'model': 'isEnabled',
                'type': 'INPUT',
                'inputType': 'TEXT',
                'position': 1,
                'label': 'Enabled',
                'domains': [{ label: 'Yes', value: true }, { label: 'No', value: false }],
                'multiple': '1',
                'bindLabel': 'label'
            },
            {
                'model': 'cities',
                'type': 'INPUT',
                'domains': ['Milan', 'Paris', 'Madrid', 'London'],
                'multiple': '4',
                'label': 'City'
            },
            {
                'model': 'names',
                'type': 'INPUT',
                'suggestions': ['pippo', 'pluto', 'paperino'],
                'multiple': '*',
                'label': 'Name'
            }
        ];
        this.codeJs = "\n    constructor(){\n\n      this.model = \n      { \"isEnabled\": [ { \"label\": \"Yes\", \"value\": true } ], \"cities\": [ 'Milan','Paris' ]};\n  \n      this.template = [\n        {\n          'model' : 'isEnabled',\n          'type' : 'INPUT',\n          'inputType' : 'TEXT',\n          'position' : 1,\n          'label' : 'Enabled',\n          'domains': [{label:'Yes', value:true}, {label:'No', value:false}],\n          'multiple' : '1',\n          'bindLabel': 'label'\n        },\n        {\n          'model': 'cities',\n          'type' : 'INPUT',\n          'domains': ['Milan','Paris','Madrid','London'],\n          'multiple' : '4',\n          'label': 'City'\n        },\n        {\n          'model': 'names',\n          'type' : 'INPUT',\n          'suggestions': ['pippo', 'pluto', 'paperino'],\n          'multiple' : '*',\n          'label': 'Name'\n        }\n      ];\n    }\n    ";
        this.codeHtml = "\n      <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n      </advanced-searchbox>\n    ";
    }
    ComponentsSimpleComponent.prototype.onEditNext = function (data) { };
    ComponentsSimpleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'components-simple',
            template: "\n    <advanced-searchbox [template]=\"template\" [model]=\"model\" [openOnLoad]=\"true\">\n    </advanced-searchbox>\n    <br/>\n    <div>\n      <code>\n        {{model | json}}\n      </code>\n      <br/>\n      <br/>\n      <h5>Code</h5>\n      <ngb-tabset>\n        <ngb-tab title=\"Ts\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeJs\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Html\">\n          <ng-template ngbTabContent>\n            <pre><code highlight [code]=\"codeHtml\"></code></pre>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n    ",
            styles: [
                "\n           .overflow-box {\n               widht: 300px;\n               padding: 5px;\n               height: 100px;\n               border: 1px solid #999;\n               overflow: hidden;\n           }\n        "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsSimpleComponent);
    return ComponentsSimpleComponent;
}());



/***/ }),

/***/ "./src/app/routes/develop/main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/routes/develop/main.component.ts ***!
  \**************************************************/
/*! exports provided: DevelopMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopMainComponent", function() { return DevelopMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DevelopMainComponent = /** @class */ (function () {
    function DevelopMainComponent() {
        this.codeJsValidators = "\n    import { FormGroup, FormControl, Validators } from '@angular/forms';\n    ...\n    class component{\n        public validators:{[key:string]:Validators};\n        \n        constructor(){\n            this.validators = {\n                isEnabled:[Validators.required],\n                email:[Validators.email]\n            };\n        }\n    }\n    ";
        this.codeHtmlValidators = "\n    <advanced-searchbox [template]=\"template\" [model]=\"model\" [validators]=\"validators\"></advanced-searchbox>\n    ";
        this.codeJsForm = "\n    import { FormGroup, FormControl, Validators } from '@angular/forms';\n    ...\n    class component{\n        public validators:{[key:string]:Validators};\n        public form:FormGroup;\n\n        constructor(){\n            this.validators = {\n                isEnabled:[Validators.required],\n                email:[Validators.email]\n            };\n\n            this.form = new FormGroup({});\n\n            this.form.valueChanges.subscribe((res)=>{\n                console.log(res);\n            });\n            this.form.statusChanges.subscribe((res)=>{\n                console.log(res);\n            });\n        }\n    }\n    ";
        this.codeHtmlForm = "\n    <advanced-searchbox [template]=\"template\" [model]=\"model\" [form]=\"form\" [validators]=\"validators\"></advanced-searchbox>\n    ";
    }
    DevelopMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'div[class="row flex-xl-nowrap"][id="develop-main-component"]',
            template: "\n    <div class=\"col-12 col-md-3 col-xl-3 sidebar\">\n        <nav class=\"collapse bd-links\">\n            <ul class=\"nav\">\n                <li>\n                    <a href=\"#validation\">Validation</a>\n                </li>\n                <li>\n                    <a href=\"#format\">Format value / label</a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n    <div class=\"col-12 col-md-9 col-xl-9 py-md-4 pl-md-4\">\n        <h2 class=\"bd-title\" id=\"validation\">Validation</h2>\n        <div>\n        Advanced searchbox (AS) gives the possibility of manage validation, if single filter is not valid its value is not write on AS model.\n        To do this we can use an object pass through [validations] attribute, where keys are models of filters and values are arrays of validators.\n        <pre><code highlight [code]=\"codeHtmlValidators\"></code></pre>\n        <pre><code highlight [code]=\"codeJsValidators\"></code></pre>\n        If you want to intercept the events of Form, used inside AS, is necessary pass a new instance of Form through [form] attribute.\n        <pre><code highlight [code]=\"codeHtmlForm\"></code></pre>\n        <pre><code highlight [code]=\"codeJsForm\"></code></pre>\n        </div>\n        <h2 class=\"bd-title\" id=\"format\">Format value / label</h2>\n    </div>",
            styles: [
                "\n         .nav{\n             flex-direction:column;\n         }  \n         .nav li{\n            padding: .25rem 1.5rem;\n         }\n         .sidebar{\n            position: sticky;\n            top: 4rem;\n            height: calc(100vh - 4rem);\n         }\n         nav h6{\n             padding:10px;\n             margin-bottom:0;\n         }\n        "
            ]
        })
    ], DevelopMainComponent);
    return DevelopMainComponent;
}());



/***/ }),

/***/ "./src/app/routes/getting-started/main.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/getting-started/main.component.ts ***!
  \**********************************************************/
/*! exports provided: GettingStartedMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedMainComponent", function() { return GettingStartedMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GettingStartedMainComponent = /** @class */ (function () {
    function GettingStartedMainComponent() {
        this.codeJsImport = "\n    import {AsBoxModule} from 'ngx-advanced-searchbox';\n\n    @NgModule({\n        declarations: [AppComponent, ...],\n        imports: [AsBoxModule.forRoot(), ...],\n        bootstrap: [AppComponent]\n    })\n    export class AppModule {\n    }";
        this.codeJsInstall = "\n    npm install --save ngx-advanced-searchbox\n    ";
    }
    GettingStartedMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'getting-started-main',
            template: "\n    <p>\n        A directive for Angular providing a advanced visual search box, inspired to <a href=\"http://dnauck.github.io/angular-advanced-searchbox/\">angular-advanced-searchbox</a> for AngularJs\n    </p>\n    <h3>\n        Dependencies\n    </h3>\n    <p>\n        The required dependencies are:\n    </p>\n    <ul>\n        <li>\n            <a href=\"https://angular.io\" target=\"_blank\">Angular</a> (<em>requires</em> Angular version 5.2 or higher, tested with 5.2.6)\n        </li>\n        <li>\n            <a href=\"https://www.getbootstrap.com\" target=\"_blank\">Bootstrap CSS</a> (tested with 4.0.0)\n        </li>\n        <li>\n            <a href=\"https://ng-bootstrap.github.io\" target=\"_blank\">Ng-bootstrap</a> (tested with 1.0.0)\n        </li>\n        <li>\n            <a href=\"https://ng-select.github.io/ng-select\" target=\"_blank\">Ng-select</a> (tested with 0.21.0)\n        </li>\n        <li>\n            <a href=\"http://reactivex.io\" target=\"_blank\">RxJs</a> (<em>requires</em> RxJs 5.5 or higher, tested with 5.5)\n        </li>\n    </ul>\n    <h3>\n        Installation\n    </h3>\n    <div>\n        After installing the above dependencies (if they are not in your project, npm install them automatically), \n        install ngx-advanced-searchbox via npm: \n        <pre><code highlight [code]=\"codeJsInstall\"></code></pre>\n    \n        <p>\n        Once installed you need to import our main module.\n        </p>\n        \n        <pre><code highlight [code]=\"codeJsImport\"></code></pre>\n        \n    </div>\n    ",
            styles: [
                "\n           \n        "
            ]
        })
    ], GettingStartedMainComponent);
    return GettingStartedMainComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    assetsPath: 'assets'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/simoneradice/Projects/searchbox/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map