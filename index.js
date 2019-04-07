const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/main.html");
});

app.get('/create', (req, res) => {
  res.sendFile(__dirname + "/public/create.html");
});

app.get('/swift', (req, res) => {
  res.sendFile(__dirname + "/public/swift.html");
});

app.get('/css', (req, res) => {
  res.sendFile(__dirname + "/public/css.html");
});
//tech namespace
const tech = io.of('/tech');

//Start
tech.on('connection', (socket) => {

  socket.on('join', (data) => {
    socket.join(data.room);
    tech.in(data.room).emit("message",`New user joined ${data.room} room!`);
  }); // emit to everyone in room
  socket.on('message', (data) => {
    console.log(`message: ${data.msg}`);
    tech.in(data.room).emit('message', data.msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
    tech.emit('message', 'user disconnected');
  })
});