
exports.up = function(knex, Promise) {
	return knex.schema.table('users', function(table) {
		table.string('image').nullable();
		table.string('mime').nullable();
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.table('users', function(table) {
		knex.schema.dropColumn ('image');
		knex.schema.dropColumn ('mime');
	})  

};
