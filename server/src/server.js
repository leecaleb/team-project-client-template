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


  function sendDatabaseError(res, err) {
    res.status(500).send("A database error occurred: " + err);
  }
  // //POST
  // app.post('/comment', function(req, res) {
  //   var body = req.body;
  //   var userId = body.userId;
  //   var spotId = body.spotId;
  //   var contents = body.contents;
  //   var rating = body.rating;
  //   // var fromUser = getUserIdFromToken(req.get('Authorization'));
  //   // if(fromUser === userId) {
  //   var newComment = postComment(userId, spotId, contents, rating);
  //   res.status(201);
  //   // res.set('Location', '/feeditem/' + newComment._id);
  //   res.send(newComment);
  //   // } else {
  //   //   res.status(401).end();
  //   // }
  // });
  app.post('/comment',validate({ body: CommentSchema }), function(req, res) {

    var fromUser = getUserIdFromToken(req.get('Authorization'));

    var comment = req.body;
    var userId = comment.user;
    var spotId = comment.spotId;
    var contents = comment.contents;
    var rating = comment.rating;
    var data= [];
    getFeedData(new ObjectID(spotId), function(err, feedData) {
      if (err) {
        res.status(500).send("Database error: " + err);
      } else if (feedData === null) {
        res.status(400).send("Could not look up feed for spot " + spotId);
      } else {

      data = feedData;


    var length = data.comments.length;
    var score = data.contents.latest_score *  length;
  if (parseInt(rating) >= 0 && parseInt(rating) <= 10) {
    var newScore = score + parseInt(rating)

    length = (length + 1);

     newScore = newScore / length;

    newScore = parseFloat( newScore.toFixed(1) )
  } else {
    var newScore = score;
    newScore = newScore / length;
    newScore = parseFloat( newScore.toFixed(1) );
    console.log("Invalid rating");
  }
    if (fromUser === userId) {

      // postComment(new ObjectID(userId), new ObjectID(spotId), contents, rating, function(err, newComment) {

      var newComment = {
        "author": new ObjectID(userId),
        "postDate": new Date().getTime(),
        "contents": contents,
        "rating": rating
      }

      db.collection('feedItems').updateOne({ _id: new ObjectID(spotId) },
        {
          // Add `userId` to the likeCounter if it is not already
          // in the array.
          $addToSet: {
            comments: newComment

      }, $set: {
        "contents.latest_score": newScore
      }},function(err, result) {
        if (err) {
            res.status(500).send("Database error: " + err);
        }else if (result.modifiedCount === 0) {
           // Could not find the specified feed item. Perhaps it does not exist, or
           // is not authored by the user.
           // 400: Bad request.
console.log("data.comments");
           return res.status(400).end();
         }
        // Second, grab the feed item now that we have updated it.
        getFeedData(new ObjectID(spotId), function(err, userData) {
          if (err) {
            res.status(500).send("Database error: " + err);
          } else if (userData === null) {
            res.status(400).send("Could not look up feed for spot " + spotId);
          } else {
            console.log("data.comments");
            res.send(userData);
          }
        });
     });
   }
        else {
          console.log("data.comments");
         res.status(403).end();
       }
     }
   });
     });


  // Reset the database.
  app.post('/resetdb', function(req, res) {
    console.log("Resetting database...");
    ResetDatabase(db, function() {
      res.send();
    });
  });

  // Handle search request
  app.post('/search', function(req, res) {
    var query = req.body.trim().toLowerCase();
    //var result = [];
    var contents = [];
    for (var i=1; i<=6; i++) {
      contents.push(new ObjectID("00000000000000000000000" + i.toString()));
    }
    db.collection('spots').find({
      $or: contents.map((id) => { return { _id: id  }}),
      $text: {
        $search: query
      }
    }).toArray(function(err, items) {
      if (err) {
        return sendDatabaseError(res, err);
      }
      res.send(items);
    })
  })


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
  function compare(a,b) {
if (a.contents.latest_score > b.contents.latest_score)
  return -1;
if (a.contents.latest_score < b.contents.latest_score)
  return 1;
return 0;
}

  app.get('/top', function(req, res) {
    var feedid1 = "000000000000000000000001";
    var feedid2 = "000000000000000000000002";
    var feedid3 = "000000000000000000000003";
    var feedid7 = "000000000000000000000007";
    var feedid5 = "000000000000000000000005";
    var feedid6 = "000000000000000000000006";


    // var fromUser = getUserIdFromToken(req.get('Authorization'));
    // var useridNumber = parseInt(userid, 10);
    getFeedData(new ObjectID("000000000000000000000001"), function(err, feedData) {
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (feedData === null) {
        // Couldn't find the feed in the database.
        res.status(400).send("Could not look up info for spot " + feedid1);
      } else {
        console.log(feedData)
      var feeddata1 = feedData
      console.log(feeddata1)


    getFeedData(new ObjectID(feedid2), function(err, feedData) {
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (feedData === null) {
        // Couldn't find the feed in the database.
        res.status(400).send("Could not look up info for spot " + feedid2);
      } else {
    var feeddata2 = feedData
    getFeedData(new ObjectID(feedid3), function(err, feedData) {
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (feedData === null) {
        // Couldn't find the feed in the database.
        res.status(400).send("Could not look up info for spot " + feedid3);
      } else {
    var  feeddata3 = feedData

    getFeedData(new ObjectID(feedid5), function(err, feedData) {
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (feedData === null) {
        // Couldn't find the feed in the database.
        res.status(400).send("Could not look up info for spot " + feedid5);
      } else {
    var  feeddata5 = feedData

    getFeedData(new ObjectID(feedid6), function(err, feedData) {
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (feedData === null) {
        // Couldn't find the feed in the database.
        res.status(400).send("Could not look up info for spot " + feedid6);
      } else {
    var  feeddata6 = feedData

    getFeedData(new ObjectID(feedid7), function(err, feedData) {
      if (err) {
        // A database error happened.
        // Internal Error: 500.
        res.status(500).send("Database error: " + err);
      } else if (feedData === null) {
        // Couldn't find the feed in the database.
        res.status(400).send("Could not look up info for spot " + feedid7);
      } else {
    var   feeddata7 = feedData

    var spots = [feeddata1, feeddata2, feeddata3, feeddata5, feeddata6, feeddata7 ]


      spots.sort(compare);
      spots.splice(3,3);
  console.log("spots")
    console.log(spots)
    res.send(spots)

      }
    });
  }
});
}
});
}
});
}
});
}
});



  });


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

  app.put('/fave/:userid/:spotid', function(req, res) {

    var fromUser = getUserIdFromToken(req.get('Authorization'));

    // Convert params from string to number.
    var userid = req.params.userid;
    var spotid = new ObjectID(req.params.spotid);
    if (fromUser === userid) {
      // getFavFeedData(userid, function(err, faveData) {
      //   if (err) {
      //     res.status(500).send("Database error: " + err);
      //   } else if (userData === null) {
      //     res.status(400).send("Could not look up favorite feed for user " + userid);
      //   } else {
      //     res.send(userData);
      //   }
      // });
      // First, we can update the like counter.
 db.collection('favFeeds').updateOne({ _id: new ObjectID(userid) },
   {
     // Add `userId` to the likeCounter if it is not already
     // in the array.
     $addToSet: {
       contents: spotid
     }
   }, function(err, result) {
     if (err) {
         res.status(500).send("Database error: " + err);
     }else if (result.modifiedCount === 0) {
        // Could not find the specified feed item. Perhaps it does not exist, or
        // is not authored by the user.
        // 400: Bad request.

        return res.status(400).end();
      }
     // Second, grab the feed item now that we have updated it.
     getFavFeedData(new ObjectID(userid), function(err, userData) {
       if (err) {
         res.status(500).send("Database error: " + err);
       } else if (userData === null) {
         res.status(400).send("Could not look up favorite feed for user " + userid);
       } else {
         res.send(userData);
       }
     });
  });
}
     else {
      res.status(403).end();
    }
  });

  app.delete('/unfave/:userid/:spotid', function(req, res) {
  //   var fromUser = getUserIdFromToken(req.get('Authorization'));
  //   // Convert params from string to number.
  //   var spotid = parseInt(req.params.spotid, 10);
  //   var userid = parseInt(req.params.userid, 10);
  //
  //   if (fromUser === userid) {
  //     var userData = readDocument('users', userid);
  //     var favFeedData = readDocument('favFeeds', userData.favFeeds);
  //     var faveindex = favFeedData.contents.indexOf(spotid);
  //     // Remove from likeCounter if present
  //     if (faveindex !== -1) {
  //       favFeedData.contents.splice(faveindex, 1);
  //       writeDocument('favFeeds', favFeedData);
  //     }
  //     res.send(favFeedData.contents.map((spotid) =>
  //     readDocument('spots', spotid)));
  //   } else {
  //     // 401: Unauthorized.
  //     res.status(401).end();
  //   }
  // });
  //
  // app.use(function(err, req, res, next) {
  //   if (err.name === 'JsonSchemaValidation') {
  //     res.status(400).end();
  //   } else {
  //     next(err);
  //   }

  var fromUser = getUserIdFromToken(req.get('Authorization'));

  // Convert params from string to number.
  var userid = req.params.userid;
  var spotid = new ObjectID(req.params.spotid);
  if (fromUser === userid) {
    // getFavFeedData(userid, function(err, faveData) {
    //   if (err) {
    //     res.status(500).send("Database error: " + err);
    //   } else if (userData === null) {
    //     res.status(400).send("Could not look up favorite feed for user " + userid);
    //   } else {
    //     res.send(userData);
    //   }
    // });
    // First, we can update the like counter.
db.collection('favFeeds').updateOne({ _id: new ObjectID(userid) },
 {
   // Add `userId` to the likeCounter if it is not already
   // in the array.
   $pull: {
     contents: spotid
   }
 }, function(err, result) {
   if (err) {
       res.status(500).send("Database error: " + err);
   }else if (result.modifiedCount === 0) {
      // Could not find the specified feed item. Perhaps it does not exist, or
      // is not authored by the user.
      // 400: Bad request.

      return res.status(400).end();

    }
   // Second, grab the feed item now that we have updated it.
   getFavFeedData(new ObjectID(userid), function(err, userData) {
     if (err) {
       res.status(500).send("Database error: " + err);
     } else if (userData === null) {
       res.status(400).send("Could not look up favorite feed for user " + userid);
     } else {
       res.send(userData);
     }
   });
});
}
   else {
    res.status(403).end();
  }
  });

  // GET favFeedData
  app.get('/user/:userid/favfeed', function(req, res) {

    var userid = req.params.userid;
    var fromUser = getUserIdFromToken(req.get('Authorization'));


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

  // function postComment(user, spotId, contents, rating) {
  //   var spot = readDocument('feedItems', spotId);
  //   var currentScore = spot.contents.latest_score;
  //   var score = parseInt(currentScore, 10);
  //   var myScore = parseInt(rating, 10);
  //   var newScore = (score + myScore) / 2;
  //   var strScore = newScore + '';
  //   spot.contents.latest_score = strScore;
  //   spot.comments.push({
  //     "author": user,
  //     "postDate": new Date().getTime(),
  //     "contents": contents,
  //     "rating": rating
  //   });
  //
  //   writeDocument('feedItems', spot);
  //   return spot;
  // }
  function postComment(user, spotId, contents, rating, callback) {
    var newComment = {
      "author": user,
      "postDate": new Date().getTime(),
      "contents": contents,
      "rating": rating
    }
    db.collection('feedItems').updateOne({ _id: user },
      {
        // Add `userId` to the likeCounter if it is not already
        // in the array.
        $addToSet: {
          comments: newComment

    }},
      function(err, result) {
        if (err) {
          return callback(err);
        }else if (result.modifiedCount === 0) {
           // Could not find the specified feed item. Perhaps it does not exist, or
           // is not authored by the user.
           // 400: Bad request.

           return res.status(400).end();
         }
        getFeedData(user, function(err, userData) {
          if (err) {
            return callback(err);
          } else if (userData === null) {
            return callback(err);
          } else {
            return callback(null, userData);
          }
        });

        // newComment._id = result.insertedId;

      }
    );
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

  function getFavFeedData(user, callback) {
    db.collection('favFeeds').findOne({
      _id: user
    }, function(err, userData) {
      if (err) {
        return callback(err);
      } else if (userData === null) {
        return callback(null, null);
      }

      callback(null, userData);
    });
  }

  // function getFavFeed(user) {
  //   var userData = readDocument('users', user);
  //   var feedData = readDocument('favFeeds', userData.favFeeds);
  //   return feedData;
  // }

  function getUserIdFromToken(authorizationLine) {
    try {
      var token = authorizationLine.slice(7);
      var regularString = new Buffer(token, 'base64').toString('utf8');
      var tokenObj = JSON.parse(regularString);
      var id = tokenObj['id'];

      if (typeof id === 'string') {
        return id;
      } else {
        return "";
      }
    } catch (e) {
      return -1;
    }
  }

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

});
