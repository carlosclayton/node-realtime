var User = require('./../models/User');


var { check, validationResult } = require('express-validator/check');
var socket = require('socket.io-client')('http://localhost:3001');






module.exports = {
	all: function(req,res) {		
		User		    
		.fetchPage({page: req.query.page, pageSize: 5})
		.then(function(users) {
			//console.log(users);	    	
			res.render('users/index', { users: users });
		}).catch(function(err) {
			res.render('users/index', { error: err });
		});		
	}, 
	show: function(req,res) {
		User
		.forge({id: req.params.id})
		.fetch()
		.then(function(user) {
			console.log(user);	    	
			res.render('users/show', { user: user });
		}).catch(function(err) {
			res.render('users/show', { error: err });
		});		
	},
	new: function(req,res) {
		res.render('users/new', {errors: false});
	},	
	save: function(req,res) { 
		try {
			validationResult(req).throw();
			console.log('Params: ', req.body)    				
			User
			.forge({
				name: req.body.name, 
				email: req.body.email,
				password: req.body.password,
				image: req.files.image.name,
				mime: req.files.image.mimetype,
			})
			.save()
			.then(function(user) {		    	
				if (Object.keys(req.files).length != 0) {
					req.files.image.mv('public/upload/' + req.files.image.name, function(err) {				
					});
				}

				console.log('New User: ', user)
				res.redirect('/users');
			}).catch(function(err) {
				console.log(err)
				res.render('users/new', { errors: err });
			});

		}catch(err){
			console.log(err.array())
			res.render('users/new', { errors: err });
		}	
		
	},
	search: function(req,res) {
		console.log('Search: ', req.body.search)
		User
		.where('name', 'LIKE', '%'+ req.body.search +'%')
		.fetchPage({page: req.query.page, pageSize: 5})
		.then(function(users) {
			console.log(users);	    	
			res.render('users', { users: users });
		}).catch(function(err) {
			res.render('users', { error: err });
		});
		
	},
	edit: function(req,res) {
		User
		.forge({id: req.params.id})
		.fetch()
		.then(function(user) {
			console.log(user);	    	
			res.render('users/edit', { user: user, errors: false });
		}).catch(function(err) {
			res.render('users/edit', { errors: err });
		});		
	},	
	update: function(req,res) {
		if (Object.keys(req.files).length != 0) {
			console.log(req.files)
			req.files.image.mv('public/upload/' + req.files.image.name , function(err) {								
			});
		}
		
		User
		.forge({id: req.params.id})
		.fetch()
		.then(function (user) {
			user.save({
				name: req.body.name || user.get('name'),
				email: req.body.email || user.get('email'),
				password: req.body.password || user.get('password_digest'),
				image: req.files.image.name || user.get('image'),
				mime: req.files.image.mimetype || user.get('mime'),
			})
			.then(function () {				
				res.redirect('/users');
			})
			.catch(function (err) {
				res.render('users/edit', { errors: err });
			});
		})
		.catch(function (err) {
			res.render('users/edit', { errors: err });
		});

	},	
	remove: function(req,res) {
		User
		.forge({id: req.params.id})
		.fetch()
		.then(function (user) {
			user.destroy()
			.then(function () {
				res.redirect('/users');             
			})
			.catch(function (err) {
				res.redirect('/users');
			});
		})
		.catch(function (err) {
			res.redirect('/users');
		});
	},
	login: function(req,res) {		

		res.render('login', {errors: false});
	},	
	validation: function(req,res) {
		var client = req.app.get('client');
		try {
			validationResult(req).throw();
			User.forge({ email: req.body.email })
			.fetch()
			.then(function (user) {
				user.authenticate(req.body.password)
				.then(function () {					
					req.session.cod = user.attributes.id;					
					req.session.nome = user.attributes.name;					
					req.session.image = user.attributes.image;
					req.session.authenticated = true;	

					//console.log(req.io.sockets.emit())
					//req.io.sockets.emit('getRoom', 'room-carlos')

					global.name = user.attributes.name;
					global.email = user.attributes.email;
					global.image = user.attributes.image;
					res.redirect('/users');             
				})		
				.catch(function (err) {
					res.render('login', {errors: 'Login failed'});
				});
			})
		}catch(err){
			console.log(err.array())
			res.render('users/new', { errors: err });
		}
	},
	logout: function(req,res) {
		req.session.destroy()
		global.name = '';
		global.email = '';
		res.redirect('login')
	},	

}