module.exports = function(app) {
	
	var ctrl = app.controller('homeController', function() {
		this.title = 'hello world';
	});

	require('./homeDirective.js')(ctrl);
};