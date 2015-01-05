module.exports = function(app) {
	var template = require('./../shared/templates/home.html');
	console.log(template);
	app.directive('homeDirective', function() {
		
		return {
			restrict: 'AE',
			replace: 'true',
			template: template,
			link: function(scope, elem, attrs) {
				console.log(scope.ctrl.addresses);
				scope.title = scope.ctrl.title;
			}
		};
	});
};

