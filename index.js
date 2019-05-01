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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
//Use to serve up static files
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.static(__dirname));

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
    res.send(polls);
  });
});

app.get('/getPollAnswers', (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  //Getting data & sending to client
  PollAnswers.find({}, (err, polls) => {
    res.send(polls[polls.length-1]);
  });

})
//Update Question with Votes
app.put('/updatePoll', (req, res, next) => {
  let name = req.body.name;
  let query = { _id: req.body.id};
  PollAnswers.findOneAndUpdate(query,
    { $inc: {answer4: 1000} },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .then(doc => {
    console.log(doc);
    console.log("hello");
  })
  .catch(err => {
    console.error(err);
  });



PollAnswers.find({}, (err, polls) => {
  res.send(polls);
});
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
    window.data;
    const getData = async () => {
      let response = await fetch('getPolls');
      window.data = await response.json();
    }
    getData();
    let pollChoice = new PollAnswers({question: data.question});
    pollChoice.save();


    //Poll.deleteMany({}, function (err) {
  //if (err) return handleError(err);
  // deleted at most one tank document
//});


  });
});
});
