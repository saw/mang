module.exports = function(app) {
	app.directive('modal', function() {

		return {
			restrict: 'AE',
			templateUrl: '/tmpl/modal'
		};
	});
};

