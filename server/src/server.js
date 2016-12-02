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

app.get('/user/:userid', function(req, res) {
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var useridNumber = parseInt(userid, 10);

  if (fromUser === useridNumber) {
    res.send(getUserData(userid));
  } else {
    res.status(401).end();
  }
});

app.get('/user/:userid/feed', function(req, res) {
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var useridNumber = parseInt(userid, 10);

  if (fromUser === useridNumber) {
    res.send(getFeedData(userid));
  } else {
    res.status(401).end();
  }
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

function getUserIdFromToken(authorizationLine) {
  try {
    var token = authorizationLine.slice(7);    var regularString = new Buffer(token, 'base64').toString('utf8');    var tokenObj = JSON.parse(regularString);    var id = tokenObj['id'];    if (typeof id === 'number') {      return id;    } else {      return -1;    }  } catch (e) {    return -1;  }
}
