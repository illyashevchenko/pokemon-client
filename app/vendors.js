const deps = [
  'angular/angular.min.js',
  'angular-resource/angular-resource.min.js',
  'angular-sanitize/angular-sanitize.min.js',
  'angular-cookies/angular-cookies.min.js'
];

const depsFull = [
  'babel-polyfill',
  'angular-ui-router',
  'angular-toastr'
];

module.exports = deps.map(dep => dep.split('/')[0]).concat(depsFull);
