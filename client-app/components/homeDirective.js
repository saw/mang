module.exports = function(app) {

	app.directive('homeDirective', function() {

		return {
			restrict: 'AE',
			replace: 'true',
			template: '<p>Hello!!</p>',
			link: function(scope, elem, attrs) {
				
			}
		};
	});
};

