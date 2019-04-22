const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = 3000;

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'pollNow';

let db;
(async function() {
  const client = new MongoClient(url,{ useNewUrlParser: true });

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Insert a single document
    let r = await db.collection('inserts').insertOne({s:1});
    assert.equal(1, r.insertedCount);

    // Insert multiple documents
    r = await db.collection('inserts').insertMany([{a:2}, {b:3}]);
    assert.equal(2, r.insertedCount);
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();

let r =  db.collection('inserts').insertOne({s:1});
assert.equal(2, r.insertedCount);




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

app.get('/results', (req,res) => {
    res.sendFile(__dirname + "/public/results.html");
});

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    socket.broadcast.emit('info', data);
  });
});
