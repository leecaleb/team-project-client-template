// Implement your server in this file.
// We should be able to run your server with node src/server.js

// create express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('./database.js');
var readDocument = database.readDocument;
var writeDocument = database.writeDocument;

app.use(express.static('../client/build'));

app.use(bodyParser.text());

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


app.get('/feed/:spotid', function(req, res) {
  var spotid = req.params.spotid;
  // var fromUser = getUserIdFromToken(req.get('Authorization'));
  // var useridNumber = parseInt(userid, 10);

  // if (fromUser === useridNumber) {
    res.send(getFeedData(spotid));
  // else {
  //   res.status(401).end();
  // }
});

app.put('/fave/:userid/:spotid/', function(req, res) {
var fromUser = getUserIdFromToken(req.get('Authorization'));
// Convert params from string to number.
var spotid = parseInt(req.params.spotid, 10);
var userid = parseInt(req.params.userid, 10);
if (fromUser === userid) {
var userData = readDocument('users', userid);

if (userData.favoriteSpots.indexOf(spotid) === -1) {
userData.favoriteSpots.push(spotid);
writeDocument('users', userData);
}
res.send(userData.favoriteSpots.map((userid) =>
readDocument('users', userid)));
} else {
// 401: Unauthorized.
res.status(401).end();
}

});

app.delete('/unfave/:userid/:spotid', function(req, res) {
var fromUser = getUserIdFromToken(req.get('Authorization'));
// Convert params from string to number.
var spotid = parseInt(req.params.spotid, 10);
var userid = parseInt(req.params.userid, 10);
if (fromUser === userid) {
var userData = readDocument('users', userid);
var faveindex = userData.favoriteSpots.indexOf(spotid);
// Remove from likeCounter if present
if (faveindex !== -1) {
userData.favoriteSpots.splice(faveindex, 1);
writeDocument('users', userData);
}
res.send(userData.favoriteSpots.map((userid) =>
readDocument('users', userid)));
} else {
// 401: Unauthorized.
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

app.post('/resetdb', function(req, res) {
  console.log("Resetting database...");
  database.resetDatabase();
  res.send();
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

// function getFeedData(user) {
//   var userData = readDocument('users', user);
//   var feedData = readDocument('feeds', userData.feed);
//   feedData.contents = feedData.contents.map(getFeedItemSync);
//
//   return (feedData);
// }

function getUserData(user) {
  var userData = readDocument('users', user);

  return(userData);
}

function getSpotData(spot) {
  var spotData = readDocument('spots', spot);

  return(spotData);
}

function getFeedData(spot) {
  var spotData = readDocument('feedItems', spot);

  return(spotData);
}

function getUserIdFromToken(authorizationLine) {
  try {
    var token = authorizationLine.slice(7);
}

app.use(function(err, req, res, next) {
  if (err.name === 'JsonSchemaValidation') {
    res.status(400).end();
  } else {
    next(err);
  }
});
app.get('/spot/:spotid', function(req, res) {
  var spotid = req.params.spotid;
  // var fromUser = getUserIdFromToken(req.get('Authorization'));
  // var useridNumber = parseInt(userid, 10);

  // if (fromUser === useridNumber) {
    res.send(getSpotData(spotid));
  // else {
  //   res.status(401).end();
  // }
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});