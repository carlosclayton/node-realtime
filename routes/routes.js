var express = require('express')
var router = express.Router()
var { check, validationResult } = require('express-validator/check');

var authenticated = require('../app/middlewares/authenticated');
var socketio = require('../app/middlewares/socketio');

var users = require('../app/controllers/users_controller')
var index = require('../app/controllers/index_controller')
router.get('/', users.login)
router.get('/new', index.new)

router.get('/users/new', authenticated, users.new)


router.post('/users/save', [
	check('name').isLength({ min: 1 }).withMessage('Name is required'),
	check('email').isEmail().withMessage("Email isn't correct"),
	check('password').isLength({ min: 1 }).withMessage('Password is required')
	], users.save)

router.get('/users', authenticated,  users.all)
router.get('/users/:id', authenticated, users.show)
router.get('/users/:id/edit', authenticated, users.edit)
router.post('/users/:id/update', authenticated, users.update)
router.get('/users/:id/remove', authenticated, users.remove)
router.post('/users', authenticated, users.search)

router.get('/login', users.login)
router.post('/login', [
	check('email').isEmail().withMessage("Email isn't correct"),
	check('password').isLength({ min: 1 }).withMessage('Password is required')
	], users.validation)
router.get('/logout', users.logout)

var chats = require('../app/controllers/chats_controller')
router.get('/chats', authenticated, chats.index)
router.get('/chats/:id', authenticated ,chats.show)
router.post('/chats', authenticated, chats.save)

module.exports = router