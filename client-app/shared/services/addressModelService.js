"use strict";

module.exports = function(app) {
   //this style is so code can be minified
   app.service('addressModel', ['$rootScope', '$http', function($rootScope, $http) {
      var testData = {
         'abc': {
            firstname: 'bob',
            lastname: 'jones',
            email: 'bob@gmail.com'
         }
      };

      this.getAddress = function() {
         return testData;
      };

      this.listAddresses = function() {
         return [testData];
      };
      
   }]);
}