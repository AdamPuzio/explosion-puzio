
module.exports = function(app){
	
	app.get('/', function(req, res){
		res.render('pages/home', {});
	})
	
	app.get('/team', function(req, res){
		res.render('pages/team', {});
	})
	
	app.get('/schedule', function(req, res){
		res.render('pages/schedule', {});
	})
	
	app.get('/about', function(req, res){
		res.render('pages/about', {});
	})
	
	app.get('/sponsors', function(req, res){
		res.render('pages/sponsors', {});
	})
	
	app.get('/resources', function(req, res){
		res.render('pages/resources', {});
	})
	
	app.get('/training', function(req, res){
		res.render('pages/training', {});
	})
}