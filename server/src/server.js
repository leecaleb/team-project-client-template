var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('./resetdatabase');
var readDocument = database.readDocument;
var CommentSchema = require('./schemas/comment.json');
var validate = require('express-jsonschema').validate;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var mongo_express = require('mongo-express/lib/middleware');
var mongo_express_config = require('mongo-express/config.default.js');
var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var url = 'mongodb://localhost:27017/Jujube';

MongoClient.connect(url, function(err, db) {
  app.use(bodyParser.text());
  app.use(bodyParser.json());
  app.use('/mongo_express', mongo_express(mongo_express_config));
  app.use(express.static('../client/build'));

  app.get('/user/:userid', function(req, res) {
    var userid = req.params.userid;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (fromUser === userid) {
      getUserData(new ObjectID(userid), function(err, userData) {
        if (err) {
          res.status(500).send("Database error: " + err);
        } else if (userData === null) {
          res.status(400).send("Could not look up feed for user " + userid);
        } else {
          res.send(userData);
        }
      });
    } else {
      res.status(403).end();
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
      console.log(favFeedData.contents.indexOf(spotid));
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
      var favFeedData = readDocument('favFeeds', userData.favFeeds);
      var faveindex = favFeedData.contents.indexOf(spotid);
      // Remove from likeCounter if present
      if (faveindex !== -1) {
        favFeedData.contents.splice(faveindex, 1);
        writeDocument('favFeeds', favFeedData);
      }
      res.send(favFeedData.contents.map((spotid) =>
      readDocument('spots', spotid)));
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

  //POST
  app.post('/comment', function(req, res) {
    var body = req.body;
    var userId = body.userId;
    var spotId = body.spotId;
    var contents = body.contents;
    var rating = body.rating;
    // var fromUser = getUserIdFromToken(req.get('Authorization'));
    // if(fromUser === userId) {
    var newComment = postComment(userId, spotId, contents, rating);
    res.status(201);
    // res.set('Location', '/feeditem/' + newComment._id);
    res.send(newComment);
    // } else {
    //   res.status(401).end();
    // }
  });

  app.post('/resetdb', function(req, res) {
    console.log("Resetting database...");
    database.resetDatabase();
    res.send();
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

  app.use(function(err, req, res, next) {
    if (err.name === 'JsonSchemaValidation') {
      res.status(400).end();
    } else {
      next(err);
    }
  });

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

  function resolveUserObjects(userList, callback) {
    // Special case: userList is empty.
    // It would be invalid to query the database with a logical OR
    // query with an empty array.
    if (userList.length === 0) {
      callback(null, {});
    } else {
      // Build up a MongoDB "OR" query to resolve all of the user objects
      // in the userList.
      var query = {
        $or: userList.map((id) => { return {_id: id } })
      };
      // Resolve 'like' counter
      db.collection('users').find(query).toArray(function(err, users) {
        if (err) {
          return callback(err);
        }
        // Build a map from ID to user object.
        // (so userMap["4"] will give the user with ID 4)
        var userMap = {};
        users.forEach((user) => {
          userMap[user._id] = user;
        });
        callback(null, userMap);
      });
    }
  }

  function postComment(user, spotId, contents, rating) {
    var spot = readDocument('feedItems', spotId);
    var currentScore = spot.contents.latest_score;
    var score = parseInt(currentScore, 10);
    var myScore = parseInt(rating, 10);
    var newScore = (score + myScore) / 2;
    var strScore = newScore + '';
    spot.contents.latest_score = strScore;
    spot.comments.push({
      "author": user,
      "postDate": new Date().getTime(),
      "contents": contents,
      "rating": rating
    });

    writeDocument('feedItems', spot);
    return spot;
  }

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

  function getUserData(userId, callback) {
    // var userData = readDocument('users', user);
    //
    // return(userData);

    db.collection('users').findOne({
      _id: userId
    }, function(err, userData) {
      if (err) {
        return callback(err);
      } else if (userData === null) {
        return callback(null, null);
      }

      callback(null, userData);
    });
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

  function getFavFeed(user) {
    var userData = readDocument('users', user);
    var feedData = readDocument('favFeeds', userData.favFeeds);
    return feedData;
  }

  function getUserIdFromToken(authorizationLine) {
    try {
      var token = authorizationLine.slice(7);      var regularString = new Buffer(token, 'base64').toString('utf8');      var tokenObj = JSON.parse(regularString);      var id = tokenObj['id'];      if (typeof id === 'string') {        return id;      } else {        return "";      }    } catch (e) {      return -1;    }
  }

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
});
