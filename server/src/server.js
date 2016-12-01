// Implement your server in this file.
// We should be able to run your server with node src/server.js

// create express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('./database.js');
var readDocument = database.readDocument;

app.use(express.static('../client/build'));
app.use(bodyParser.text());

app.get('/', function (req, res) { res.send('Hello World!');
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});

app.get('/user/:userid/feed', function(req, res) {
var userid = req.params.userid;
  res.send(getFeedData(userid));
});

app.get('/user/:userid', function(req, res) {
  var userid = req.params.userid;
  res.send(getUserData(userid));
});

function getFeedItemSync(feedItemId) {
  var feedItem = readDocument('feedItems', feedItemId);
  feedItem.contents.author =
    readDocument('users', feedItem.contents.author);
  feedItem.comments.forEach((comment) => {
    comment.author = readDocument('users', comment.author);
  });

  return feedItem;
}

function getFeedData(user) {
  var userData = readDocument('users', user);
  var feedData = readDocument('feeds', userData.feed);
  feedData.contents = feedData.contents.map(getFeedItemSync);

  return (feedData);
}

function getUserData(user) {
  var userData = readDocument('users', user);

  return(userData);
}
