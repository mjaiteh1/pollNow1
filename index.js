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

app.get('/question', (req, res) => {
  res.sendFile(__dirname + "/public/question.html");
});

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    console.log(`message: ${data.question}`);
    socket.broadcast.emit('info', data);
  });

});
