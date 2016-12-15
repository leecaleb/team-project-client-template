var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = "Jujube";
// Put the initial mock objects here.
var initialData = {

    // users
    "users": {
      "1": {
        "_id": 1,
        "name": "Jujube",
        "favoriteSpots": [2, 1, 3],
        "favFeeds": 1,
        "bio": "CS326 fall 2016",
        "joinDate": "2016-09-06",
        "institution": "University of Massachusetts",
        "image": ""
      },
      "2": {
        "_id": 2,
        "name": "user2",
        "favoriteSpots": [],
        "favFeeds": 2,
        "bio": "",
        "joinDate": "",
        "institution": "",
        "image": "img/foodlover.jpg"

      },
      "3": {
        "_id": 3,
        "name": "user3",
        "favoriteSpots": [],
        "favFeeds": 3,
        "bio": "",
        "joinDate": "",
        "institution": "",
        "image": ""
      },
      "4": {
        "_id": 4,
        "name": "Du Bois Falcon",
        "favoriteSpots": [1,2,3],
        "favFeeds": 4,
        "bio": "The Peregrine Falcon is the fastest bird on earth, capable of diving from great heights at speeds of up to 242 miles per hour. It is a beautiful raptor with long, pointed wings and a long, slightly rounded tail.",
        "joinDate": "2016-10-02",
        "institution": "University of Massachusetts",
        "image": ""
      }
    },

    // spots are our "users" actually!!
    "spots": {
      "1": {
        "_id": 1,
        "name": "Library",
        "feeds": 1,
        "businessHours": "24 / 7",
        "image": "img/library.jpeg",
        // list of user id who likes this spot
        "likeCounter": [
          2 , 4
        ],
        "description": "As the largest public academic research library in Massachusetts, we are a key partner in teaching, learning, and research at UMass Amherst and in the Commonwealth. By combining the latest information technology with excellent public service, the staff builds and maintains a rich information environment, facilitates access to it, and creates a place that functions as a hub of campus and community scholarly activity."
      },
      "2": {
        "_id": 2,
        "name": "Hampshire Dining",
        "feeds": 2,
        "businessHours": "7:00 AM - 10:00 AM",
        "image": "img/hamp.jpg",
        "likeCounter": [
          1, 2, 4
        ],
        "description": "We’re excited to announce the grand opening of the newly remodeled Hampshire Dining Commons at the beginning of the 2013 Fall Semester. The newly renovated state-of-the-art facility has a contemporary New England theme with 12 concepts designed around UMass Dining Services’ four guiding principles: Healthy Eating, Sustainability, World Flavors, and Community. The goal of Hampshire DC is to be one of the healthiest and most sustainable dining operations in the nation. This will be done through serving minimally processed foods and more plant-based items at peak season, less red meat, more sustainable seafood and healthier oils, fats, and beverages."
      },
      "3": {
        "_id": 3,
        "name": "Blue Wall",
        "feeds": 3,
        "businessHours": "7:00 AM - 9:00 PM",
        "image": "img/blueWallUmass.jpg",
        "likeCounter": [
          1
        ]
      },
      "4": {
        "_id": 4,
        "name": "Franklin Dining",
        "feeds": 4,
        "businessHours": "7:00 AM - 10:00 PM",
        "image": "img/hamp.jpg",
        "likeCounter": [
          1
        ]
      },

      "5": {
        "_id": 5,
        "name": "Berkshire Dining",
        "feeds": 5,
        "businessHours": "11:00 AM - 12:00 AM",
        "image": "img/berkshire.jpg",
        "likeCounter": [
          1
        ]
      },

      "6": {
        "_id": 6,
        "name": "Recreation Center",
        "feeds": 6,
        "businessHours": "5:00 AM - 12:00 AM",
        "image": "img/gym.jpg",
        "likeCounter": [
          1
        ]
      }
    },



    // feeds for each spot
    "feeds": {
      "1": {
        "_id": 1,
        // listing of feedItems in feed
        "contents": [1]
      },
      "2": {
        "_id": 2,
        "contents": [2]
      },
      "3": {
        "_id": 3,
        "contents": [3]
      },

      "4": {
        "_id": 4,
        "contents": [4]
      },

      "5": {
        "_id": 5,
        "contents": [5]
      },

      "6": {
        "_id": 6,
        "contents": [6]
      }
    },


    // feedItems
    "feedItems": {

      // feed for Library
      "1": {
        "_id": 1,

        // tags for search
        "tags": [
          "study",
          "food"
        ],

        // list of user id who likes this spot


        // update
        "contents": {
          "latest_score": 1,
          "latest_update_time": 1453668480000
        },

        // lastest comments
        "comments": [
          {
            "_id": 1,
            "author": 2,
            "contents": "Come here, it is not crowded!",
            "postDate": 1453690800000,
            "rating": 8
          },
          {
            "_id": 2,
            "author": 3,
            "contents": "Fuck.. no people here! cool!",
            "postDate": 1453690800000,
            "rating": 10
          }
        ]
      },

      // feed for Hampshire
      "2": {
        "_id": 2,

        // tags for search
        "tags": [
          "food",
          "breakfast",
          "lunch",
          "dinner"
        ],


        // update
        "contents": {
          "latest_score": 4,
          "latest_update_time": 14536684846500
        },

        // lastest comments
        "comments": [
          {
            "_id":1,
            "author": 2,
            "contents": "Fucking crowded!",
            "postDate": 1453690800000,
            "rating": 3
          },
          {
            "_id":2,
            "author": 2,
            "contents": "Do not come here!",
            "postDate": 1453690800000,
            "rating": 6
          },
          {
            "_id":3,
            "author": 4,
            "contents": "The workers spit in the food here. You should come!",
            "postDate": 1453690800000,
            "rating": 4

          }
        ]
      },

      // feed for Blue wall
      "3": {
        "_id": 3,

        // tags for search
        "tags": [
          "food",
          "breakfast",
          "lunch",
          "dinner"
        ],

        // list of user id who likes this spot

        // update
        "contents": {
          "latest_score": 9,
          "latest_update_time": 1453668480000
        },

        //
        "comments": [
          {
            "_id":1,
            "author": 1,
            "contents": "Come here, not much people for now!",
            "postDate": 1453690800000,
            "rating": 10
          },
          {
            "_id":2,
            "author": 3,
            "contents": "A little bit busy now",
            "postDate": 1453690800000,
            "rating": 10
          }
        ]
      },

      "4": {
        "_id": 4,

        // tags for search
        "tags": [
          "food",
          "breakfast",
          "lunch",
          "dinner"
        ],

        // list of user id who likes this spot

        // update
        "contents": {
          "latest_score": 3,
          "latest_update_time": 1453668480000
        },

        //
        "comments": [
          {
            "_id":1,
            "author": 1,
            "contents": "I hate this place",
            "postDate": 1453690800000,
            "rating": 7
          },
          {
            "_id":2,
            "author": 3,
            "contents": "It smells like urine",
            "postDate": 1453690800000,
            "rating": 1
          }
        ]
      },

      "5": {
        "_id": 5,

        // tags for search
        "tags": [
          "food",
          "lunch",
          "dinner"
        ],

        // list of user id who likes this spot

        // update
        "contents": {
          "latest_score": 10,
          "latest_update_time": 1453668480000
        },

        //
        "comments": [
          {
            "_id":1,
            "author": 4,
            "contents": "Don't come",
            "postDate": 1453690800000,
            "rating": 6
          },
          {
            "_id":2,
            "author": 2,
            "contents": "I am hungry",
            "postDate": 1453690800000,
            "rating": 5
          }
        ]
      },

      "6": {
        "_id": 6,

        // tags for search
        "tags": [
          "food",
          "breakfast"
        ],

        // list of user id who likes this spot

        // update
        "contents": {
          "latest_score": 6,
          "latest_update_time": 1453668480000
        },

        //
        "comments": [
          {
            "_id":1,
            "author": 1,
            "contents": "Great place to eat",
            "postDate": 1453690800000,
            "rating": 10
          },
          {
            "_id":2,
            "author": 3,
            "contents": "It sucks",
            "postDate": 1453690800000,
            "rating": 6
          }
        ]
      }
    },

    "favFeedItems": {
      "6": {
        "_id": 6,
        "spot": 6
      },
      "5": {
        "_id": 5,
        "spot": 5
      },
      "4": {
        "_id": 4,
        "spot": 4
      },
      "3": {
        "_id": 3,
        "spot": 3
      },
      "2": {
        "_id": 2,
        "spot": 2
      },
      "1": {
        "_id": 1,
        "spot": 1
      }
    },

    "favFeeds": {
      "4": {
        "_id": 4,
        // Listing of FeedItems in the feed.
        "contents": [1,2,4]
      },
      "3": {
        "_id": 3,
        "contents": []
      },
      "2": {
        "_id": 2,
        "contents": []
      },
      "1": {
        "_id": 1,
        "contents": []
      }
    }
  };

/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      cb();
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}
