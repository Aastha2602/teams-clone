const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const cors = require("cors");
app.use(cors());
app.get('/', (req, res) => {
	res.send('Running');
});

io.on('connection', socket => {


  socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});


  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
})

http.listen(process.env.PORT || 4000, function() {
  console.log('listening on port 4000')
})