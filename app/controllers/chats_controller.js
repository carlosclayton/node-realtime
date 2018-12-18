var User = require('./../models/User');

var { check, validationResult } = require('express-validator/check');
module.exports = {
	index: function(req,res) {								
		User		    
		.fetchPage({page: req.query.page, pageSize: 5})
		.then(function(users) {;	    	
			res.render('chats/index', { users: users, socket: req.io });
		}).catch(function(err) {			

		});				
	}, 	
	show: function(req,res) {
		User
		.forge({id: req.params.id})
		.fetch()
		.then(function(user) {
			console.log(user);	    	
			res.render('chats/show', { user: user });
		}).catch(function(err) {
			res.render('chats/show', { error: err });
		});		
	},
	new: function(req,res) {
		User
		.forge({id: req.params.id})
		.fetch()
		.then(function(user) {
			console.log(user);	    	
			res.render('chats/show', { user: user });
		}).catch(function(err) {
			res.render('chats/show', { error: err });
		});		
	},

}