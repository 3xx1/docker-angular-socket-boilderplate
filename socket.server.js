var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Opening Port at :3000
http.listen(3000, function() {
  console.log('[socket-server] Listening on :3000');
});

// Upon Connection
io.on('connection', function(socket) {
  // Client Connection Acq
  console.log('[socket-server] A User Connected.');

  // Remote Action Dispatcher
  socket.on('action.dispatch', function(msg) {
    socket.broadcast.emit('action.dispatch', msg);
  });

  // Refreshing All Screens
  socket.on('refresh', function(msg) {
    io.emit('refresh', true);
  });
});
