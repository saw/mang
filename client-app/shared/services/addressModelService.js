"use strict";

module.exports = function(app) {
   //this style is so code can be minified
   app.service('addressModel', ['$rootScope', '$http', function($rootScope, $http) {
      var data;

      this.loadAddresses = function() {
         var promise = $http.get('/api/address').then(function(response) {
            data = response.data;
            $rootScope.$broadcast('addressModel:loaded');
         });

         return promise;
      }


      this.getAddress = function(key) {
         return false;
      };

      this.foo = 'bar';

      this.listAddresses = function() {
         return data;
      };

      this.addAddress = function(address) {
         address.pending = true;
         var index = data.push(address) - 1;
         var promise = $http.post('/api/address', address).then(function(response) {
            data[index].pending = false;
            $rootScope.$broadcast('addressModel:loaded');
         });
         
         
         return promise;
      }
      
   }]);
}