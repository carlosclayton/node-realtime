var knexfile = require ('./../../knexfile');
var knex = require('knex')(knexfile.development);
var bookshelf = require('bookshelf')(knex);
var securePassword = require('bookshelf-secure-password')
bookshelf.plugin('virtuals')
bookshelf.plugin(securePassword)
bookshelf.plugin('registry'); 
bookshelf.plugin('pagination')
module.exports = bookshelf;
