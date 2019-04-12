# pollNow

## How to Run

1. cd pollNow
2. npm install

## Working features


## Code Explanation

```javascript
io.on('connection', (socket) => {
    socket.on('message', (data) => {
    socket.broadcast.emit('info', data);
   });
});
```

```javascript
socket.on('info', (data) => {
    //Code goes here
});
```

## Plan going forward


