module.exports = function(app) {
	var template = require('./../shared/templates/home.html');
	app.directive('homeDirective', function() {
		return {
			template: template,
			link: function(scope, el, attr) {
				console.log(scope);
			}
		};
	});
};

