const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer((req, res) => {
  res.end('Chat server is running');
});

const io = socketIo(server, {
  cors: {
    origin: "*", // For development, allow all origins
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Emitting message to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 8081;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
