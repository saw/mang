//loads all the available templates into memory.
//Also serves as a white list for templates

var fs = require('fs');
var express = require('express');
var router = express.Router();

var templateList = fs.readdirSync(__dirname + '/../client-app/shared/templates');
var templates = {};

templateList.forEach(function(template) {
	var name = template.replace('.html', '');
	templates[name] = fs.readFileSync(__dirname + '/../client-app/shared/templates/' + template, 'utf-8');

});

function templateLoader(req, res, next) {
	var template = req.params.template;
	if(templates[template]) {
		res.end(templates[template]);
	} else {
		res.status(404);
		res.end('Sorry');
	}
}

module.exports = templateLoader;