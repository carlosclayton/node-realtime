
exports.up = function(knex, Promise) {
    return knex.schema.createTable('chats', function(table) {
            table.increments();
            table.string('room').notNullable();
            table.string('message').notNullable();
            table.integer('user_id').unsigned().references('id').inTable('users');
            table.timestamp('created_at').defaultTo(knex.fn.now())
    		table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('chats');
};
