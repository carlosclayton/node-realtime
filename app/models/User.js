var bookshelf = require('./bookshelf');
var Chat = require('./Chat');
var User = bookshelf.Model.extend({
	tableName: 'users',
	hasSecurePassword: true, 
	chats: function() {
		return this.hasMany(Chat);
	}

});

module.exports = User;
