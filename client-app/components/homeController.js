module.exports = function(app) {
	
	var ctrl = app.controller('homeController', ['$scope', 'addressModel', function($scope, addressModel) {
		$scope.title = 'hello world';
		$scope.loading = true;
		addressModel.loadAddresses().then(function() {
			$scope.loading = false;
			$scope.addresses = addressModel.listAddresses();
		});
		$scope.$on('addressModel:loaded', function() {
			$scope.addresses = addressModel.listAddresses();
		})
		
	}]);
	require('./createAddressController.js')(ctrl);
	require('./homeDirective.js')(ctrl);
};