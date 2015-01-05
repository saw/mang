module.exports = function(app) {

	app.directive('homeDirective', function() {
		console.log(require('./test.html'));
		return {
			restrict: 'AE',
			replace: 'true',
			template: require(__dirname + '/../shared/templates/home.html'),
			link: function(scope, elem, attrs) {
				console.log(scope.ctrl.addresses);
				scope.title = scope.ctrl.title;
			}
		};
	});
};

