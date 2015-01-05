"use strict";

//building this could totally be automated, but
//this was quicker than a gulp task for this, this
//file must exist to require a directory
module.exports = function(app) {
	require('./addressListDirective.js')(app);
};