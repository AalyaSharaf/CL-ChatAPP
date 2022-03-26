let express = require('express');
let http = require('http');
let io = require('socket.io');

let app = express();
let server = http.createServer(app);
io = new io.Server(server); 

app.use('/', express.static('public'));

// when a socket connects, display their id
io.sockets.on('connect', (socket) => {
  console.log("we have a new client: ", socket.id);

  //creating a message component within the socket element
  socket.on("message", (data) => {
      socket.broadcast.emit("message", data)
  })

  //display a message on the server when the socket disconnects
  socket.on('disconnect', ()=> {
    console.log('socket has been disconnected: ', socket.id);
  })

})

// server listening on port 
server.listen(8000, () => {
  console.log("server is up and running")
})