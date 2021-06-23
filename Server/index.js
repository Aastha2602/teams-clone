const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
  console.log(socket.id);
  socket.on('message', ({ name, message }) => {
    console.log(message);
    io.emit('message', { name, message })
  })
})

http.listen(4000, function() {
  console.log('listening on port 4000')
})