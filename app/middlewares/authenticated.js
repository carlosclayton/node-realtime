module.exports = function(req, res, next){
		
	if(req.session.authenticated){
		next()     
	}else{
		res.render('login', {errors: 'Not authorized'});
	}
}

