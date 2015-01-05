module.exports = function(app) {

	app.directive('addressListDirective', function() {

		return {
			restrict: 'AE',
			replace: 'true',
			template: '<i>{{title}}</i>',
			link: function(scope, elem, attrs) {
				console.log(scope.ctrl.addresses);
				scope.title = scope.ctrl.title;
			}
		};
	});
};

