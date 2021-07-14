const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const cors = require("cors");
app.use(cors());
app.get('/', (req, res) => {
	res.send('Running');
});
const socketToRoom = {}
const users = {};
io.on('connection', socket => {

	console.log('User Online');

      socket.on('canvas-data', (data)=> {
            socket.broadcast.emit('canvas-data', data);
            
    })

	socket.on('join room',roomId => {
		if (users[roomId]) {
			users[roomId].push(socket.id)
		} else {
			users[roomId] = [socket.id]
		}
		socket.join(roomId)
		socketToRoom[socket.id]=roomId
		const usersConnected = users[roomId].filter(id => id != socket.id);
		socket.emit("users present", usersConnected)
	})

    socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		const roomId = socketToRoom[socket.id];
		let room = users[roomId];
		if (room) {
			room = room.filter(user => user.id != socket.id)
			users[roomId] = room;
		}
		socket.broadcast.emit("callEnded", socket.id)
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});

	socket.on('message', ({ name, message }) => {
		socket.broadcast.to(socketToRoom[socket.id]).emit('message', { name, message })
	  })

})

http.listen(process.env.PORT || 4000, function() {
  console.log('listening on port 4000')
})