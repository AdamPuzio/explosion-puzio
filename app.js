var express = require('express'),
	app = express(),
	adaro = require('adaro'),
	engine = require('./engine'),
	routes = engine.routes('routes', app);
	//routes = require('./routes')(app);

var options = {
	
	helpers: []
}

app.use(express.static('public'));
app.set('views', './views');
app.engine('dust', adaro.dust(options));
app.set('view engine', 'dust');

app.get('/', function (req, res) {
	//res.send('Hello World!')
	res.render('pages/home')
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})