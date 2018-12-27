var User = require('./../models/User');
var Chat = require('./../models/Chat');

var { check, validationResult } = require('express-validator/check');
module.exports = {
	index: function(req,res) {								
		User		    
		.fetchPage({page: req.query.page, pageSize: 5, withRelated: ['chats']})
		.then(function(users) {
			console.log(users)	    	
			res.render('chats/index', { users: users, socket: req.io });
		}).catch(function(err) {			

		});				
	}, 	
	show: function(req,res) {
		User
		.forge({id: req.params.id})
		.fetch({withRelated: ['chats']})
		.then(function(user) {			
			res.render('chats/show', { user: user, session: req.session });
		}).catch(function(err) {
			res.render('chats/show', { error: err });
		});		
	},
	save: function(req,res) { 
		try {			
			Chat
			.forge({
				message: req.body.message, 
				room: req.body.room,
				user_id: req.body.user_id				
			})
			.save()
			.then(function(user) {		    	
				console.log('Message ok!')
			}).catch(function(err) {
				console.log(err)
				res.render('users/new', { errors: err });
			});
						   				
		}catch(err){
			console.log(err.array())
		}	
		
	},

}