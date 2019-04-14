# pollNow

## How to Run

1. cd pollNow
2. npm install
3. node index
4. Go to http://localhost:3000/

## Working features

Click the "Join" button in the join presention form in one tab and then go to http://localhost:3000/ in another tab and click the "create" button on the create a poll form. When a poll is created, it is displayed to all 'pollers' but both pages need to be opened at the same time. 

## Code Explanation

```javascript
io.on('connection', (socket) => {
    socket.on('message', (data) => {
    socket.broadcast.emit('info', data);
   });
});
```
When the server begins running, if there is connection to the webSocket then we enter the function. In this function, 
we listen for a message from the client, in this case called 'message'. When we receive the message then we can use the data that we get anyway we want. In my application, the message is the information from the create a poll page. When the server gets this message then I'm sending that message to every client page in my application. All I would have to do is listen for the message by it's name. I'm using this as a way to send data between pages. 

```javascript
socket.on('info', (data) => {
    //Code goes here
});
```

Example of listening of message. 

## Plan going forward

My next iteration is for the question to be there for the pollers even if they didn't join the same time the question was being created. Maybe this can be acheived through databases to save the questions. I also want to implement a feature where the person who creates a poll can create a poll with a specific username and then pollers can join to answer with a username. 

I'm planning to look into MongoDB for a database. 

