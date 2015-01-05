module.exports = function(app) {
	var template = require('./../templates/address.html');
	app.directive('address', function() {

		return {
			restrict: 'AE',
			// transclude:true,
			scope: {data:'='},
			template: template,
			link: function(scope, elem, attrs) {
				console.log('yay', scope);
			}
		};
	});
};

