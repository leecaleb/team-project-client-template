var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = "Jujube";
// Put the initial mock objects here.
var initialData = {

    // users
    "users": {
      "1": {
        "_id": new ObjectID("000000000000000000000001"),
        "name": "Jujube",
        "favoriteSpots": [new ObjectID("000000000000000000000002"), new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000003")],
        "favFeeds": new ObjectID("000000000000000000000001"),
        "bio": "CS326 fall 2016",
        "joinDate": "2016-09-06",
        "institution": "University of Massachusetts",
        "image": ""
      },
      "2": {
        "_id": new ObjectID("000000000000000000000002"),
        "name": "user2",
        "favoriteSpots": [],
        "favFeeds": new ObjectID("000000000000000000000002"),
        "bio": "",
        "joinDate": "",
        "institution": "",
        "image": "img/foodlover.jpg"

      },
      "3": {
        "_id": new ObjectID("000000000000000000000003"),
        "name": "user3",
        "favoriteSpots": [],
        "favFeeds": new ObjectID("000000000000000000000003"),
        "bio": "",
        "joinDate": "",
        "institution": "",
        "image": ""
      },
      "4": {
        "_id": new ObjectID("000000000000000000000004"),
        "name": "Du Bois Falcon",
        "favoriteSpots": [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003")],
        "favFeeds": new ObjectID("000000000000000000000004"),
        "bio": "The Peregrine Falcon is the fastest bird on earth, capable of diving from great heights at speeds of up to 242 miles per hour. It is a beautiful raptor with long, pointed wings and a long, slightly rounded tail.",
        "joinDate": "2016-10-02",
        "institution": "University of Massachusetts",
        "image": ""
      }
    },

    // spots are our "users" actually!!
    "spots": {
      "1": {
        "_id": new ObjectID("000000000000000000000001"),
        "name": "Library",
        "feeds": new ObjectID("000000000000000000000001"),
        "businessHours": "24 / 7",
        "image": "img/library.jpeg",
        // list of user id who likes this spot
        "likeCounter": [
          new ObjectID("000000000000000000000002") , new ObjectID("000000000000000000000004")
        ],
        "description": "As the largest public academic research library in Massachusetts, we are a key partner in teaching, learning, and research at UMass Amherst and in the Commonwealth. By combining the latest information technology with excellent public service, the staff builds and maintains a rich information environment, facilitates access to it, and creates a place that functions as a hub of campus and community scholarly activity.",
        "tag": "library du bois study"
      },
      "2": {
        "_id": new ObjectID("000000000000000000000002"),
        "name": "Hampshire Dining",
        "feeds": new ObjectID("000000000000000000000002"),
        "businessHours": "7:00 AM - 10:00 AM",
        "image": "img/hamp.jpg",
        "likeCounter": [
          new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002"), new ObjectID("000000000000000000000004")
        ],
        "description": "We’re excited to announce the grand opening of the newly remodeled Hampshire Dining Commons at the beginning of the 2013 Fall Semester. The newly renovated state-of-the-art facility has a contemporary New England theme with 12 concepts designed around UMass Dining Services’ four guiding principles: Healthy Eating, Sustainability, World Flavors, and Community. The goal of Hampshire DC is to be one of the healthiest and most sustainable dining operations in the nation. This will be done through serving minimally processed foods and more plant-based items at peak season, less red meat, more sustainable seafood and healthier oils, fats, and beverages.",
        "tag": "hampshire dining common eat"
      },
      "3": {
        "_id": new ObjectID("000000000000000000000003"),
        "name": "Blue Wall",
        "feeds": new ObjectID("000000000000000000000003"),
        "businessHours": "7:00 AM - 9:00 PM",
        "image": "img/blueWallUmass.jpg",
        "likeCounter": [
          new ObjectID("000000000000000000000001")
        ],
        "tag": " blue wall dining common eat"
      },
      "7": {
        "_id":  new ObjectID("000000000000000000000007"),
        "name": "Franklin Dining",
        "feeds":  new ObjectID("000000000000000000000007"),
        "businessHours": "7:00 AM - 10:00 PM",
        "image": "img/franklin.jpg",
        "likeCounter": [
          new ObjectID("000000000000000000000001")
        ],
        "tag": "franklin dining common eat"
      },

      "5": {
        "_id": new ObjectID("000000000000000000000005"),
        "name": "Berkshire Dining",
        "feeds": new ObjectID("000000000000000000000005"),
        "businessHours": "11:00 AM - 12:00 AM",
        "image": "img/berkshire.jpg",
        "likeCounter": [
          new ObjectID("000000000000000000000001")
        ],
        "tag": "berkshire dining common eat"
      },

      "6": {
        "_id": new ObjectID("000000000000000000000006"),
        "name": "Recreation Center",
        "feeds": new ObjectID("000000000000000000000006"),
        "businessHours": "5:00 AM - 12:00 AM",
        "image": "img/gym.jpg",
        "likeCounter": [
          new ObjectID("000000000000000000000001")
        ],
        "tag": "swimming dancing recreation parking"
      }
    },



    // feeds for each spot
    "feeds": {
      "1": {
        "_id": new ObjectID("000000000000000000000001"),
        // listing of feedItems in feed
        "contents": [new ObjectID("000000000000000000000001")]
      },
      "2": {
        "_id": new ObjectID("000000000000000000000002"),
        "contents": [new ObjectID("000000000000000000000002")]
      },
      "3": {
        "_id": new ObjectID("000000000000000000000003"),
        "contents": [new ObjectID("000000000000000000000003")]
      },

      "7": {
        "_id": new ObjectID("000000000000000000000007"),
        "contents": [new ObjectID("000000000000000000000007")]
      },

      "5": {
        "_id": new ObjectID("000000000000000000000005"),
        "contents": [new ObjectID("000000000000000000000005")]
      },

      "6": {
        "_id": new ObjectID("000000000000000000000006"),
        "contents": [new ObjectID("000000000000000000000006")]
      }
    },


    // feedItems
    "feedItems": {

      // feed for Library
      "1": {
        "_id": new ObjectID("000000000000000000000001"),

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
            "_id": new ObjectID("000000000000000000000001"),
            "author": new ObjectID("000000000000000000000002"),
            "contents": "Do not come here, it is crowded!",
            "postDate": 1453690800000,
            "rating": 2
          },
          {
            "_id": new ObjectID("000000000000000000000002"),
            "author": new ObjectID("000000000000000000000003"),
            "contents": "Not cool!",
            "postDate": 1453690800000,
            "rating": 0
          }
        ]
      },

      // feed for Hampshire
      "2": {
        "_id": new ObjectID("000000000000000000000002"),

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
            "_id":new ObjectID("000000000000000000000001"),
            "author": new ObjectID("000000000000000000000002"),
            "contents": "Crowded!",
            "postDate": 1453690800000,
            "rating": 2
          },
          {
            "_id":new ObjectID("000000000000000000000002"),
            "author": new ObjectID("000000000000000000000002"),
            "contents": "Just ok!",
            "postDate": 1453690800000,
            "rating": 6
          },
          {
            "_id":new ObjectID("000000000000000000000003"),
            "author": new ObjectID("000000000000000000000004"),
            "contents": "The workers spit in the food here. You shouldn't come!",
            "postDate": 1453690800000,
            "rating": 4

          }
        ]
      },

      // feed for Blue wall
      "3": {
        "_id": new ObjectID("000000000000000000000003"),

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
            "_id":new ObjectID("000000000000000000000001"),
            "author": new ObjectID("000000000000000000000001"),
            "contents": "Come here, not much people for now!",
            "postDate": 1453690800000,
            "rating": 10
          },
          {
            "_id":new ObjectID("000000000000000000000002"),
            "author": new ObjectID("000000000000000000000003"),
            "contents": "Not that busy now",
            "postDate": 1453690800000,
            "rating": 8
          }
        ]
      },

      "7": {
        "_id": new ObjectID("000000000000000000000007"),

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
            "_id":new ObjectID("000000000000000000000001"),
            "author": new ObjectID("000000000000000000000001"),
            "contents": "It is fine",
            "postDate": 1453690800000,
            "rating": 5
          },
          {
            "_id":new ObjectID("000000000000000000000002"),
            "author": new ObjectID("000000000000000000000003"),
            "contents": "It smells like urine",
            "postDate": 1453690800000,
            "rating": 1
          }
        ]
      },

      "5": {
        "_id": new ObjectID("000000000000000000000005"),

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
            "_id":new ObjectID("000000000000000000000001"),
            "author": new ObjectID("000000000000000000000004"),
            "contents": "Come",
            "postDate": 1453690800000,
            "rating": 10
          },
          {
            "_id":new ObjectID("000000000000000000000002"),
            "author": new ObjectID("000000000000000000000002"),
            "contents": "I am hungry",
            "postDate": 1453690800000,
            "rating": 10
          }
        ]
      },

      "6": {
        "_id": new ObjectID("000000000000000000000006"),

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
            "_id":new ObjectID("000000000000000000000001"),
            "author": new ObjectID("000000000000000000000001"),
            "contents": "Ok place to eat",
            "postDate": 1453690800000,
            "rating": 6
          },
          {
            "_id":new ObjectID("000000000000000000000002"),
            "author": new ObjectID("000000000000000000000003"),
            "contents": "It is slightly above average",
            "postDate": 1453690800000,
            "rating": 6
          }
        ]
      }
    },

    "favFeedItems": {
      "6": {
        "_id": new ObjectID("000000000000000000000006"),
        "spot": new ObjectID("000000000000000000000006")
      },
      "5": {
        "_id": new ObjectID("000000000000000000000005"),
        "spot": new ObjectID("000000000000000000000005")
      },
      "7": {
        "_id": new ObjectID("000000000000000000000007"),
        "spot": new ObjectID("000000000000000000000007")
      },
      "3": {
        "_id": new ObjectID("000000000000000000000003"),
        "spot": new ObjectID("000000000000000000000003")
      },
      "2": {
        "_id": new ObjectID("000000000000000000000002"),
        "spot": new ObjectID("000000000000000000000002")
      },
      "1": {
        "_id": new ObjectID("000000000000000000000001"),
        "spot": new ObjectID("000000000000000000000001")
      }
    },

    "favFeeds": {
      "4": {
        "_id": new ObjectID("000000000000000000000004"),
        // Listing of FeedItems in the feed.
        "contents": [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000007")]
      },
      "3": {
        "_id": new ObjectID("000000000000000000000003"),
        "contents": []
      },
      "2": {
        "_id": new ObjectID("000000000000000000000002"),
        "contents": []
      },
      "1": {
        "_id": new ObjectID("000000000000000000000001"),
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
 * Adds any desired indexes to the database.
 */
function addIndexes(db, cb) {
  db.collection('spots').createIndex({ "tag": "text" }, null, cb);
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
      addIndexes(db, cb);
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
