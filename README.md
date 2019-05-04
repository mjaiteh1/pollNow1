# pollNow

## How to Run

```
cd pollNow
npm install 
node index
```

## Technologies Used

1. Node
2. Express
3. MongoDB 
4. Socket.io

## Project Details 

For this project, I wanted to build a polling application. I got the idea when I remembered that we used Poll Everywhere in one of the classes and I was interested in figuring in out how it worked. When you open the application you have an option of whether you want to create a poll or join a current poll. As of now, you can't join/create a poll with a username -- you'll be just joining a general poll for everyone. To see how this works, open local host and create a poll. Once you've created a poll, open another tab to local host and join a poll. 

Once you create a poll, you'll be redirected to the results page which pulls up a graph. On your other tab, you'll see a question and 4 answer choices. Currently I've been trying to get the graph to update everytime there is a new click event to the answer choices but that doesn't seem to be working. Some possible solutions: sending a message (using socket)  to the server when a user clicks and then from there update. Refreshing the graph/ figuiring out a way to only update the data so the graph doesn't have to re draw every component. I really wished I had more time to work on this part. 

*** I've noticed that when I started off with an empty dataset and I have both tabs open (create and join) the first answer that I click doesn't get outputted to the graph. I would have to reload the page. But if there are multiple things in the database this doesn't seem to be a problem. ( I probably have to await a resource). 

## Things I've learned

1. Make sure that all your resources are loaded before using them. I found that using ASYNC/AWAIT was helpful with this. There are somethings that the event loop processes faster (like console.log) so if console.log is executed and your resource is not ready then you might run into errors. 

2.  REST API development. I didn't really think that this would be apart of the project but since I was using a database to store my questions, I needed a way to get the data between pages. In this case, websockets alone werent helpful 
3. Node, Express, MongoDB, Socket.io -- This was my first time using all of these resources. It was a big learning curve, there were moments where I wasn't sure what to do to move forward. From all the issues, I've encountered 


## Plans for next time

1. Work on updating the graph everytime another vote comes in.
2. Work on how resources are loaded. Look for places where I'm calling the API multiple times and see if it can be reduced. 
3. Join a poll based on user name -- I can store the username in the database and whenever I am presenting a new question on a page determine if that question is from the username the user requested. 


