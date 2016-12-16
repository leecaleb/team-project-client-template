var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var ResetDatabase = require('./resetdatabase.js');


var CommentSchema = require('./schemas/comment.json');
var validate = require('express-jsonschema').validate;

var mongo_express = require('mongo-express/lib/middleware');
var mongo_express_config = require('mongo-express/config.default.js');

var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var url = 'mongodb://localhost:27017/Jujube';

MongoClient.connect(url, function(err, db) {



  // Put everything that uses `app` into this callback function.
  // from app.use(bodyParser.text());
  // all the way to
  // app.listen(3000, ...
  app.use(bodyParser.text());
  app.use(bodyParser.json());
  app.use('/mongo_express', mongo_express(mongo_express_config));
  app.use(express.static('../client/build'));





  app.get('/feed/:spotid', function(req, res) {
    var spotid = req.params.spotid;

    // var fromUser = getUserIdFromToken(req.get('Authorization'));
    // var useridNumber = parseInt(userid, 10);

    // if (fromUser === useridNumber) {
    getFeedData(new ObjectID(spotid), function(err, feedData) {
   if (err) {
     // A database error happened.
     // Internal Error: 500.

     res.status(500).send("Database error: " + err);

   } else if (feedData === null) {
     // Couldn't find the feed in the database.


     res.status(400).send("Could not look up feed for spot " + spotid);
   } else {
     // Send data.

     res.send(feedData);
   }
 });


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

  // Reset the database.
  app.post('/resetdb', function(req, res) {
    console.log("Resetting database...");
    ResetDatabase(db, function() {
      res.send();
    });
  });









  app.get('/spot/:spotid', function(req, res) {
    var spotid = req.params.spotid;
    // var fromUser = getUserIdFromToken(req.get('Authorization'));
    // var useridNumber = parseInt(userid, 10);
    getSpotData(new ObjectID(spotid), function(err, spotData) {
         if (err) {
           // A database error happened.
           // Internal Error: 500.
           res.status(500).send("Database error: " + err);
         } else if (spotData === null) {
           // Couldn't find the feed in the database.
           res.status(400).send("Could not look up info for spot " + spotid);
         } else {
           // Send data.
           res.send(spotData);
         }
       });

   });



  // Also put all of the helper functions that use mock database
  // methods like readDocument, writeDocument, ...

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







  app.use(function(err, req, res, next) {
    if (err.name === 'JsonSchemaValidation') {
      res.status(400).end();
    } else {
      next(err);
    }
  });

  // GET favFeedData
  app.get('/user/:userid/favfeed', function(req, res) {
    console.log("jere");
    var userid = req.params.userid;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    console.log(fromUser);
    console.log(userid);

    if (fromUser === userid) {
      getFavFeedData(new ObjectID(userid), function(err, userData) {
        if (err) {
          res.status(500).send("Database error: " + err);
        } else if (userData === null) {
          res.status(400).send("Could not look up favorite feed for user " + userid);
        } else {
          res.send(userData);
        }
      });
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




  // function getFeedData(user) {
  //   var userData = readDocument('users', user);
  //   var feedData = readDocument('feeds', userData.feed);
  //   feedData.contents = feedData.contents.map(getFeedItemSync);
  //
  //   return (feedData);
  // }


  function getSpotData(spot, callback) {
    db.collection('spots').findOne({
   _id: spot
 }, function(err, spotData) {
   if (err) {
     return callback(err);
   } else if (spotData === null) {
     // User not found.
     return callback(null, null);
   }else{
     callback(null, spotData);
   }

 });
 }

  function getFeedData(spot, callback) {

    db.collection('feedItems').findOne({
   _id: spot
 }, function(err, feedData) {
   if (err) {
     return callback(err);
   } else if (feedData === null) {
     // User not found.

     return callback(null, null);
   }
   callback(null, feedData);

 });


    // var spotData = readDocument('feedItems', spot);

    // return(feedData);
  }


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




  function getFavFeedItem(favFeedItemId) {
    var feedItem = readDocument('favFeedItems', favFeedItemId);
    feedItem.spot = readDocument('spots', feedItem.spot);
    // Resolve comment author.
    return feedItem;
  }

  function getFavFeedData(user, callback) {
    db.collection('favFeeds').findOne({
      _id: user
    }, function(err, userData) {
      if (err) {
        return callback(err);
      } else if (userData === null) {
        return callback(null, null);
      }
      console.log(userData);
      callback(null, userData);
    });
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
