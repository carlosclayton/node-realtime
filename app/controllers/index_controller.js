exports.home = function(req,res) {
	res.render('index/home', { title: 'Materialize', text: 'A modern responsvive front-end framework based on Material Design' });
}