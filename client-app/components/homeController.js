module.exports = function(app) {
	
	var ctrl = app.controller('homeController', ['$scope', 'addressModel', function($scope, addressModel) {
		$scope.title = 'hello world';
		$scope.loading = true;
		addressModel.loadAddresses().then(function() {
			console.log('loaded');
			$scope.loading = false;
		});
		$scope.addresses = addressModel;
	}]);

	require('./homeDirective.js')(ctrl);
};