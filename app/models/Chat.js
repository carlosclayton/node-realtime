
var bookshelf = require('./bookshelf');
var User = require('./User');

var Chat = bookshelf.Model.extend({
	tableName: 'chats',
	user: function() {
		return this.belongsTo(User);
	}
});

module.exports = Chat;
