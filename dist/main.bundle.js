webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<advanced-searchbox [template]=\"template\" [model]=\"model\" (editNext)=\"onEditNext($event)\" [openOnLoad]=\"true\">\n  <ng-container *asTemplate=\"let filter\">\n    <ng-container [ngSwitch]=\"filter.type\">\n      <!--<app-as-operators *ngSwitchCase=\"'RANGE'\" [viewModel]=\"filter\" class=\"as-filter\"></app-as-operators>-->\n    </ng-container>\n  </ng-container>\n</advanced-searchbox>\n<br/>\n<div>\n  <code>\n    {{model | json}}\n  </code>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
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
        this.title = 'app';
        this.model = {};
        //model = { "completeName2": "kjhjkhjk", "email2": [ "ewrerw" ], "username2": { "username": { "test": { "test": [ "fdsfdsfsd", "fdsfdfds" ], "username3": [ { "op": "contains", "value": "fdsfsdfsd" }, { "op": "contains", "value": "fdsfsdffdsfsfs" }, { "op": "endsWith", "value": "fdsfssd" }, { "op": "startsWith", "value": "fdsfdsfs" }, { "op": "startsWith", "value": "fdsfsdfsdfsdfsd" }, { "op": "contains", "value": "fdsfdfdsfdsfsdfsd" }, { "op": "contains", "value": "fdsfdsfdsdsfsdfsd" } ] } } } };
        this.template = [];
        this.model =
            { "isEnabled": [{ "label": "Yes", "value": true }], "city": [1, 2, 3, 4], "youtube": ["Marvel Studios' Avengers: Infinity War Official Trailer", "Atalanta vs Juventus 0-1 ● All Goals & Highlights HD ● 30 Jan 2018 - Coppa Italia"] };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_advanced_searchbox__ = __webpack_require__("../../../../ngx-advanced-searchbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appConfig_service__ = __webpack_require__("../../../../../src/app/appConfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_advanced_searchbox__["a" /* AsBoxModule */].forRoot()
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4_ngx_advanced_searchbox__["b" /* AsConfigService */], useClass: __WEBPACK_IMPORTED_MODULE_5__appConfig_service__["a" /* AppConfigService */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/appConfig.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_advanced_searchbox__ = __webpack_require__("../../../../ngx-advanced-searchbox/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppConfigService = /** @class */ (function (_super) {
    __extends(AppConfigService, _super);
    function AppConfigService(_http) {
        var _this = _super.call(this, _http) || this;
        _this.customDomainsAsyncFn['youtube'] = function (observable, viewModel, model) {
            return observable
                .switchMap(function (term) {
                return _http.get('https://www.googleapis.com/youtube/v3/search', { params: {
                        q: term,
                        key: 'AIzaSyBafKFrisguQvT3WC20Q972uxS1cZfPvg8',
                        type: 'video',
                        maxResults: '12',
                        part: 'id,snippet'
                    } })
                    .catch(function () { return []; })
                    .map(function (response) {
                    var newResponse = { response: [], term: '' };
                    newResponse.response = response.items.map(function (item) {
                        return { label: item.snippet.title };
                    });
                    newResponse.term = term;
                    return newResponse;
                });
            });
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
            },
            'test': function (val) {
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
                    return par.value == val;
                });
                if (domainsFiltered.length > 0) {
                    return domainsFiltered[0];
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AppConfigService);
    return AppConfigService;
}(__WEBPACK_IMPORTED_MODULE_4_ngx_advanced_searchbox__["b" /* AsConfigService */]));



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata__ = __webpack_require__("../../../../reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zone_js__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_zone_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");






if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map