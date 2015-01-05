module.exports = function(app) {
   var template = require('./../templates/createAddress.html');
   app.directive('createAddress', function() {

      return {
         restrict: 'AE',
         replace: 'true',
         require: '^form',
         // transclude:true,
         template: template,
         // scope: {s:'=scope'},
         link: function(scope, elem, attrs, ctrl) {

            scope.valid = false;

            scope.$watch(function() { 
               return ctrl.$valid; 
            }, function(validity){
               scope.valid = validity;
            });
         }
      };
   });
};

