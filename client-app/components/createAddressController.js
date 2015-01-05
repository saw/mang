module.exports = function(app) {
	
	var ctrl = app.controller('createAddressController', ['$scope', 'addressModel', function($scope, addressModel) {

		$scope.firstname = '';
		$scope.lastname = '';
		$scope.email = '';


		$scope.onSubmit = function(e) {
			var newAddress = {
				firstname: $scope.firstname,
				lastname: $scope.lastname,
				email: $scope.email
			};

			addressModel.addAddress(newAddress).then(function() {
				
			});
			$scope.firstname = '';
			$scope.lastname = '';
			$scope.email = '';
		};
	}]);

};