module.exports = function(app) {

	app.directive('addressList', function() {

		return {
			restrict: 'AE',
			replace: 'true',
			template: '<i>It worked</i>',
			link: function(scope, elem, attrs) {
				console.log(scope.ctrl.addresses);
				scope.title = scope.ctrl.title;
			}
		};
	});
};

