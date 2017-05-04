var express = require('express'),
	app = express(),
	adaro = require('adaro'),
	engine = require('./engine'),
	routes = engine.routes('routes', app);

var options = {
	
	helpers: []
}

app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));
app.set('views', './views');
app.engine('dust', adaro.dust(options));
app.set('view engine', 'dust');

app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});