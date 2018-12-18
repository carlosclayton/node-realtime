module.exports = function(req, res, next){

	req.io.emit('getRoom', 'room-carlos')
}

