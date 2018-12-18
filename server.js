const KEY = 'realtime-cookie';
const SECRET = '98a7sd98as9daakjshd9a8s7d98ad';

var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();

var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
var cookie = cookieParser(SECRET);
var store = new session.MemoryStore()


// Compartilhando a sessão válida do Express no Socket.IO
 io.use(function(socket, next) {
   var data = socket.request;
   cookie(data, {}, function(err) {
     var sessionID = data.signedCookies[KEY];
     store.get(sessionID, function(err, session) {
       if (err || !session) {
         return next(new Error('Acesso negado!'));
       } else {
         socket.handshake.session = session;
         return next();
       }
     });
   });
 });

// Iniciando uma conexão com Socket.IO.
 io.sockets.on('connection', function (client) {
   // Recuperando uma sessão Express.
   var session = client.handshake.session;
   console.log('User conected')
   client.on('toServer', function (msg) {
     msg = "<b>" + session.nome + ":</b> " + msg + "<br>";
     client.emit('toClient', msg);
     client.broadcast.emit('toClient', msg);
   });
 });


 server.listen(3001, function(){
   console.log("Web Server Socket run at port: 3001");
   
 });
