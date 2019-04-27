const express = require('express');
const app = express();
const path = require('path');
const server = require("http").Server(app);
const io = require("socket.io")(server);
const bodyParser = require('body-parser')
const port = 3000;

//database connection
const Poll = require("./models/Poll");
const connect = require("./dbconnect");

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
//Use to serve up static files
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/main.html");
});

app.get('/create', (req, res) => {
  res.sendFile(__dirname + "/public/create.html");
});

app.get('/question', (req, res) => {
  res.sendFile(__dirname + "/public/question.html");
});

app.get('/results', (req,res) => {
    res.sendFile(__dirname + "/public/results.html");
});

app.get('/getPolls', (req, res, next) => {

  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  Poll.find({}, (err, polls) => {
    res.send(polls);
  });

});

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    socket.broadcast.emit('info', data);

    //save chat to the database
    connect.then(db  =>  {
    let  newPoll  =  new Poll(data);
    newPoll.save();


  });
});
});
