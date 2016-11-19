var express = require('express');
var app = express();
var port = 9000;
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){

});

io.on('connection', function(socket){
  console.log('user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    if(msg === 'hi'){
        socket.emit('server response', 'hello');
    }else if(msg === 'how are you?'){
        socket.emit('server response', 'i am fine.. how about you');
    }else if(msg === 'what is your name?'){
        socket.emit('server response', 'hi i am chatbox');
    } else{
        socket.emit('server response', msg +' ?. Sorry i am not that intelligent yet!');
    }
  });
});

http.listen(9000, function(){
  console.log('listening on *:9000');
});
