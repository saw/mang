module.exports = function(app) {
   app.directive('capitalize', function() {

      return {
         require: 'ngModel',
         link: function(scope, elem, attrs, ngModel) {

            ngModel.$parsers.push(function toModel(input) {
                // do something to format user input
                // to be more "computer-friendly"
                console.log(input);
                return input.toUpperCase();
            });

            ngModel.$formatters.push(function toView(input) {
                // do something to format user input
                // to be more "human-friendly"
                return 'evil';
            });
         }
      };
   });
};

