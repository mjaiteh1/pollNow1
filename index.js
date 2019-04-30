const express = require('express');
const app = express();
const path = require('path');
const server = require("http").Server(app);
const io = require("socket.io")(server);
const bodyParser = require('body-parser')
const port = 3000;

//database connection
const Poll = require("./models/Poll");
const PollAnswers = require("./models/PollAnswers");
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

//Request data in database
app.get('/getPolls', (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  //Getting data & sending to client
  Poll.find({}, (err, polls) => {
    res.send(polls[polls.length-1]);
  });
});

//Update Question with Votes
app.put('/updatePoll/:question', (req, res, next) => {
  let question = req.params.question;
  let choice = req.body.answer;
  pollChoice.findOneAndUpdate({question : question}, {$inc : {choice : 1}});

});
// Error Handler for 404 Pages
app.use(function(req, res, next) {
    let error404 = new Error('Route Not Found');
    error404.status = 404;
    next(error404);
});



io.on('connection', (socket) => {
  socket.on('message', (data) => {
    socket.broadcast.emit('info', data);

    //save chat to the database
    connect.then(db  =>  {
    let  newPoll  =  new Poll(data);
    newPoll.save();

    let pollChoice = new PollAnswers({question: data.question, answer1: 0, answer2: 0, answer3: 0, answer4: 0 });
    pollChoice.save();


    //Poll.deleteMany({}, function (err) {
  //if (err) return handleError(err);
  // deleted at most one tank document
//});


  });
});
});
