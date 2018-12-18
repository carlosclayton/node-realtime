

const KEY = 'realtime-cookie';
const SECRET = '98a7sd98as9daakjshd9a8s7d98ad';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var routes = require('./routes/routes');
var fileUpload = require('express-fileupload');
var session = require('express-session');
var app = express();

var cookie = cookieParser(SECRET)
var store = new session.MemoryStore()


var server = require('http').createServer(app)
var io = require('socket.io')(server)



app.use(function(req, res, next) {
  req.io = io;
  next();
});

io.sockets.on('connection', function (client) {
  // Recuperando uma sessão Express.
  var session = client.handshake.session;
  
  client.on('login', function(){
    console.log('Login relizado com sucesso');    
    client.emit('onLine', {
      session: session
    });

    client.broadcast.emit('onLine',  {
      session: session
    });  
  });  

  client.on('getRoom', function(data){
    console.log('Sala: ', data)
  })


  //console.log(session);
  client.on('toServer', function (data) {
    console.log(data)
   message = '<div class="barra"><span class="time-left">' + data.message +'</span><span class="time-right">11:00</span></div>';
   message2 = '<div class="barra darker"><span class="time-left">11:00</span><span class="time-right">' + data.message +'</span></div>';
   client.join(data.room)
   
       
       client.emit('toClient', message);
       client.broadcast.to(data.room).emit('toClient', message2);       


       client.emit('notifyMsg', data);
       client.broadcast.to(data.room).emit('notifyMsg', data);       

   
 });
});


io.use(function(socket, next) {
 var data = socket.request; 

 cookie(data, {}, function(err) {
   var sessionID = data.signedCookies[KEY];

   store.get(sessionID, function(err, session) {
     if (err || !session) {
       return next(new Error('Acesso negado!'));
     } else {
       socket.handshake.session = session;
       //console.log(socket)
       return next();
     }
   });
 });
});




var NotificationCenter = require('node-notifier').NotificationCenter;

var notifier = new NotificationCenter({
  withFallback: false, // Use Growl Fallback if <= 10.8
  customPath: void 0 // Relative/Absolute path to binary if you want to use your own fork of terminal-notifier
});


// default options
app.use(fileUpload());

app.use(cookie);
app.use(session({
	name: KEY,
  secret: SECRET,
  resave: true,
  saveUninitialized: true,
  store: store
}))


global.host = window.location.host;

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

server.listen(3001, function(){
 console.log("Web Server Socket run at port: 3001");

});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
