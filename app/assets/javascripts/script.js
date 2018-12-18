
$(document).ready(function(){
	$('.sidenav').sidenav();    
	$('.modal').modal();
	$(".dropdown-trigger").dropdown();
});


if(Notification.permission === 'default'){
	Notification.requestPermission(function(){
		console.log('permission denied')
	})
}

var notify = function(data){
	var notification = new Notification('Usuário online', {
		body: data.session.nome,
		icon: '/upload/' + data.session.image
	});
}

var notify2 = function(data){
	var notification = new Notification(data.user + ' sended a message', {
		body: data.message,
		icon: '/upload/' + data.image
	});
}

var socket = io('http://localhost:3001');

socket.on('connect', function(){
	console.log('Conected')	;		
});

socket.emit('login');

socket.on('disconnect', function(){
	console.log('Disconnected')	;
});

socket.on('onLine', function (data) {
	notify(data);
	socket.emit('getRoom', 'room#' + data.session.cod)
	console.log('User online: ', data)
});

socket.on('toClient', function (data) {
	var chat = document.getElementById('chat');
	chat.innerHTML += data;
	

});

socket.on('notifyMsg', function (data) {
	notify2(data);	
});

var sendMsg = function(id, name, image) {
	
	var msg = document.getElementById('msg');
	socket.emit('toServer', {
		room: 'room#' + id, 
		message: msg.value,
		user: name, 
		image: image
	});
};

var getRoom = function() {
	var msg = document.getElementById('msg');
	socket.join('toServer', msg.value);
};
