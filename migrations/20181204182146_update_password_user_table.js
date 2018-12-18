
exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
		table.renameColumn('password', 'password_digest');
  	})
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
		return knex.schema.dropColumn ('password_digest');
  	})  
};
