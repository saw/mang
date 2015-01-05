module.exports = function(app) {
	var template = require('./../templates/addressList.html');
	app.directive('addressList', function() {

		return {
			restrict: 'AE',
			replace: 'true',
			// transclude:true,
			scope: {addresses:'='},
			template: template,
			link: function(scope, elem, attrs) {
				console.log(scope);
			}
		};
	});
};

