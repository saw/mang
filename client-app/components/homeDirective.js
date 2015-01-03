module.exports = function(app) {

	app.directive('homeDirective', function() {

		return {
			restrict: 'AE',
			replace: 'true',
			template: require('./../shared/templates/home.html'),
			link: function(scope, elem, attrs) {
				scope.title = scope.ctrl.title;
			}
		};
	});
};

