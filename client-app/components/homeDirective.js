module.exports = function(app) {
	var template = require('./../shared/templates/home.html');
	app.directive('homeDirective', function() {
		return {
			template: template,
			link: function(scope, el, attr) {
				//nothing for now
				scope.bananas = {};
				scope.options = [
					{
						name:'face',
						value: 1
					},
					{
						name: 'froot',
						value: 2
					}
				];

				scope.doStuff = function() {
					scope.bananas.foo = 'bar';
				}

				scope.selectedItem = scope.options[0];
				scope.$watch(scope.bananas, function() {
					scope.cake = scope.bananas.foo;
				})
			}
		};
	});
};

