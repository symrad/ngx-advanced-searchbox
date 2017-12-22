import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';


let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies || {});

export default {
  input: 'dist/index.js',
  output:{
    file:'dist/bundles/searchbox.umd.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs()
  ],
  external:[
    '@angular/core', 
    'ts-keycode-enum/Key.enum',
    '@ng-bootstrap/ng-bootstrap', 
    '@ng-select/ng-select', 
    '@angular/forms', 
    'angular2-uuid',
    '@angular/common/http',
    '@angular/common', 
    'ngx-input-autosize',
    'rxjs/operator/add/*',
    'rxjs/Subject', 
    'rxjs/Observable', 
    'rxjs/observable/fromEvent',
    'rxjs/ReplaySubject', 
    'rxjs/BehaviorSubject', 
    'rxjs/Subscription', 
    'rxjs/add/observable/of',
    'rxjs/add/operator/do',
    'rxjs/add/operator/map',
    'rxjs/add/operator/merge',
    'rxjs/add/operator/share',
    'rxjs/add/operator/startWith',
    'rxjs/add/operator/debounceTime',
    'rxjs/add/operator/distinctUntilChanged',
    'rxjs/add/operator/first',
    'rxjs/add/operator/take',
    'rxjs/add/operator/filter',
    'rxjs/add/operator/merge',
    'rxjs/add/operator/switchMap',
    'rxjs/add/operator/mergeMap',
    'rxjs/add/operator/flatMap',
    'rxjs/add/operator/takeLast',
    'rxjs/Subscription',
    'rxjs/operators/map',
    'rxjs/util/pipe',
    'rxjs/add/operator/let'
  ],
  sourceMap: false,
  name: 'ng.advancedSearchbox',
  onwarn: ( warning ) => {
    const skip_codes = [
        'THIS_IS_UNDEFINED',
        'MISSING_GLOBAL_NAME'
    ];
    if ( skip_codes.indexOf(warning.code) != -1 ) return;
    return warning;
  }
}