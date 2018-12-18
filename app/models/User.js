var bookshelf = require('./bookshelf');
var User = bookshelf.Model.extend({
	tableName: 'users',
	hasSecurePassword: true 
});

module.exports = User;
