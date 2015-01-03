module.exports = function(app) {
	
	app.controller('homeController', function() {
		this.title = 'hello world';
	});
	console.log('ready');
	require('./homeDirective.js')(app);
};