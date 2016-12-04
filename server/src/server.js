// Implement your server in this file.
// We should be able to run your server with node src/server.js

// create express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('./database.js');
var readDocument = database.readDocument;
var CommentSchema = require('./schemas/comment.json');
var validate = require('express-jsonschema').validate;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;

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

function postComment(user, spotId, contents, rating) {
  var spot = readDocument('feedItems', spotId);
  spot.comments.push({
      "author": user,
      "postDate": new Date().getTime(),
      "contents": contents,
      "rating": rating
    });
  writeDocument('feedItems', spot);
  return spot;
}

//POST
app.post('/feeditem/',
  validate({ body: CommentSchema }), function(req, res) {
    var body = req.body;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if(fromUser === body.userId) {
      var newComment = postComment(body.userId, body.spotId, body.contents, body.rating);
      res.status(201);
      // res.set('Location', '/feeditem/' + newComment._id);
      res.send(newComment);
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
    var token = authorizationLine.slice(7);    var regularString = new Buffer(token, 'base64').toString('utf8');    var tokenObj = JSON.parse(regularString);    var id = tokenObj['id'];    if (typeof id === 'number') {      return id;    } else {      return -1;    }  } catch (e) {    return -1;  }
}

app.use(function(err, req, res, next) {
  if (err.name === 'JsonSchemaValidation') {
    res.status(400).end();
  } else {
    next(err);
  }
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
