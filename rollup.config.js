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
    'ngx-mask',
    'rxjs/operators',
    'rxjs'
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