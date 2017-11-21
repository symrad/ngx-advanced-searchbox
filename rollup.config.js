let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies || {});

export default {
  input: 'dist/index.js',
  output:{
    file:'dist/bundles/searchbox.umd.js',
    format: 'umd'
  },
  external:[
  'rxjs/add/operator/do',
  'rxjs/Subject', 
  '@angular/core', 
  'ts-keycode-enum/*',
  'rxjs/Observable/*', 
  '@ng-bootstrap/ng-bootstrap', 
  '@angular/forms', 
  'angular2-uuid',
  '@angular/common/http',
  'rxjs/ReplaySubject', 
  'rxjs/BehaviorSubject', 
  'rxjs/Subscription', 
  '@angular/common', 
  'ngx-input-autosize'
  ],
  sourceMap: false,
  name: 'ng.searchbox'
}