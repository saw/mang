require('./vendor/angular/angular-deps.js');

var angular = require('angular');

var app = angular.module('bookApp', ['ngRoute']);

//this is a little odd, but the angular injection and
//commonJS require fight a little bit, this seems to be the cleanest way to do things
//obviously this could be automated

require('./client-app/shared/directives')(app);
require('./client-app/shared/services')(app);
require('./client-app/components/homeController.js')(app);




