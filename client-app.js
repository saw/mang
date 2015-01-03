require('angular');

var app = angular.module('bookApp', []);
require('./client-app/components/homeController.js')(app);
console.log('ok');

