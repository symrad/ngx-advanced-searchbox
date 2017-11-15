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
  globals:{
    '@ng-bootstrap/ng-bootstrap' : 'ngBootstrap',
    '@angular/forms' : 'ng.forms',
    'angular2-uuid' : 'angular2Uuid',
    '@angular/common' : 'ng.common',
    'ngx-input-autosize' : 'ngxInputAutosize',
    '@angular/core' : 'ng.core'
  },
  external:external,
  sourceMap: false,
  name: 'ng.searchbox',
  plugins: [
    resolve(),
    commonjs()
  ]
}