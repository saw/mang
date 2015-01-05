module.exports = function(app) {
	
	var ctrl = app.controller('homeController', ['addressModel', function(addressModel) {
		this.title = 'hello world';
		this.addresses = addressModel.listAddresses();
	}]);
};