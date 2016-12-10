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
var favFeedData = readDocument('favFeeds', userData.favFeeds);

if (favFeedData.contents.indexOf(spotid) === -1) {
favFeedData.contents.push(spotid);
writeDocument('favFeeds', favFeedData);
}
res.send(favFeedData.contents.map((spotid) =>
readDocument('spots', spotid)));
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

function getFavFeedItemSync(favFeedItemId) {
  var feedItem = readDocument('favFeedItems', favFeedItemId);
  feedItem.spot = readDocument('spots', feedItem.spot);
  // Resolve comment author.
  return feedItem;
}

function getFavFeedData(user) {
  var userData = readDocument('users', user);
  var feedData = readDocument('favFeeds', userData.favFeeds);
  // While map takes a callback, it is synchronous, not asynchronous.
  // It calls the callback immediately.
  feedData.contents = feedData.contents.map(getFavFeedItemSync);
  // Return FeedData with resolved references.
  return feedData;
}

// GET favFeedData
app.get('/user/:userid/favfeed', function(req, res) {
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var useridNumber = parseInt(userid, 10);
  if (fromUser === useridNumber) {
    res.send(getFavFeedData(userid));
  } else {
    res.status(401).end();
  }
});

function getFavFeed(user) {
  var userData = readDocument('users', user);
  var feedData = readDocument('favFeeds', userData.favFeeds);
  return feedData;
}

app.get('/user/:userid/favfeed', function(req, res) {
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  var useridNumber = parseInt(userid, 10);
  if (fromUser === useridNumber) {
    res.send(getFavFeed(userid));
  } else {
    res.status(401).end();
  }
});

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
