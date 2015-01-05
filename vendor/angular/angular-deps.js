//this bizarro syntax is to deal with angular not being a proper commonJS module (no exports)
// so these includes will just slap the deps at the top of the rollup
require('./angular.js');
require('./angular-route.js');s