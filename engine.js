'use strict';

var fs = require('fs'),
	path = require('path');

module.exports = {
	routes: function(folderName, app) {
		fs.readdirSync(folderName).forEach(function(file) {

			var fullName = path.join(folderName, file);
			var stat = fs.lstatSync(fullName);

			if (stat.isDirectory()) {
				recursiveRoutes(fullName);
			} else if (file.toLowerCase().indexOf('.js')) {
				require('./' + fullName)(app);
				console.log("require('" + fullName + "')");
			}
		});
	}
};