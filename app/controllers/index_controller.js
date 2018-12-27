
module.exports = {
	index: function(req,res) {								
		res.render('index/home', { title: 'Materialize', text: 'A modern responsvive front-end framework based on Material Design' });
	}, 
	new: function(req,res) {								
		res.render('index/new', {errors: false});	
	}
}



