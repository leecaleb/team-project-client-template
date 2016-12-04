// Your startup's initial mock objects go here
var initialData = {

    // users
    "users": {
      "1": {
        "_id": 1,
        "name": "Jujube",
        "favoriteSpots": [2, 1, 3],
        "bio": "CS326 fall 2016",
        "joinDate": "2016-09-06",
        "institution": "University of Massachusetts",
        "image": ""
      },
      "2": {
        "_id": 2,
        "name": "user2",
        "favoriteSpots": [],
        "bio": "",
        "joinDate": "",
        "institution": "",
        "image": "img/foodlover.jpg"

      },
      "3": {
        "_id": 3,
        "name": "user3",
        "favoriteSpots": [],
        "bio": "",
        "joinDate": "",
        "institution": "",
        "image": ""
      },
      "4": {
        "_id": 4,
        "name": "Du Bois Falcon",
        "favoriteSpots": [1,3],
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
        "likeCounter": [
          1, 2 , 4
        ]
      },
      "2": {
        "_id": 2,
        "name": "Hampshire Dining",
        "feeds": 2,
        "businessHours": "7:00 AM - 10:00 AM",
        "image": "img/hamp.jpg",
        "likeCounter": [
          1, 2
        ],
        "description": "We’re excited to announce the grand opening of the newly remodeled Hampshire Dining Commons at the beginning of the 2013 Fall Semester. The newly renovated state-of-the-art facility has a contemporary New England theme with 12 concepts designed around UMass Dining Services’ four guiding principles: Healthy Eating, Sustainability, World Flavors, and Community. The goal of Hampshire DC is to be one of the healthiest and most sustainable dining operations in the nation. This will be done through serving minimally processed foods and more plant-based items at peak season, less red meat, more sustainable seafood and healthier oils, fats, and beverages."
      },
      "3": {
        "_id": 3,
        "name": "Blue Wall",
        "feeds": 3,
        "businessHours": "7:00 AM - 12:00 AM",
        "image": "img/bluewall.jpg",
        "likeCounter": [
          1
        ]
      },

      "4": {
        "_id": 4,
        "name": "Franklin Dining",
        "feeds": 4,
        "businessHours": "7:00 AM - 10:00 PM",
        "image": "img/frank.jpg",
        "likeCounter": [
          1
        ]
      },

      "5": {
        "_id": 5,
        "name": "Berkshire Dining",
        "feeds": 5,
        "businessHours": "7:00 AM - 12:00 AM",
        "image": "img/berk.jpg",
        "likeCounter": [
          1
        ]
      },

      "6": {
        "_id": 6,
        "name": "Recreation Center",
        "feeds": 6,
        "businessHours": "6:00 AM - 11:00 PM",
        "image": "img/gym.jpeg",
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
          "latest_score": 5,
          "latest_update_time": 1453668480000
        },

        // lastest comments
        "comments": [
          {
            "author": 2,
            "vote": 1,
            "contents": "Come here, it is not crowded!",
            "postDate": 1453690800000,
            "rating": 8
          },
          {
            "author": 3,
            "vote": 1,
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
          "latest_score": 5,
          "latest_update_time": 14536684846500
        },

        // lastest comments
        "comments": [
          {
            "author": 2,
            "vote": 5,
            "contents": "Fucking crowded!",
            "postDate": 1453690800000,
            "rating": 3
          },
          {
            "author": 2,
            "vote": 0,
            "contents": "Do not come here!",
            "postDate": 1453690800000,
            "rating": 6
          },
          {
            "author": 4,
            "vote": 0,
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
          "latest_score": 5,
          "latest_update_time": 1453668480000
        },

        //
        "comments": [
          {
            "author": 1,
            "vote": 1,
            "contents": "Come here, not much people for now!",
            "postDate": 1453690800000,
            "rating": 10
          },
          {
            "author": 3,
            "vote": 1,
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
          "latest_score": 5,
          "latest_update_time": 1453668480000
        },

        //
        "comments": [
          {
            "author": 1,
            "vote": 1,
            "contents": "I hate this place",
            "postDate": 1453690800000,
            "rating": 7
          },
          {
            "author": 3,
            "vote": 1,
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
          "latest_score": 5,
          "latest_update_time": 1453668480000
        },

        //
        "comments": [
          {
            "author": 4,
            "vote": 1,
            "contents": "Don't come",
            "postDate": 1453690800000,
            "rating": 6
          },
          {
            "author": 2,
            "vote": 1,
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
          "latest_score": 5,
          "latest_update_time": 1453668480000
        },

        //
        "comments": [
          {
            "author": 1,
            "vote": 1,
            "contents": "Great place to eat",
            "postDate": 1453690800000,
            "rating": 10
          },
          {
            "author": 3,
            "vote": 1,
            "contents": "It sucks",
            "postDate": 1453690800000,
            "rating": 6
          }
        ]
      }
    }
};

var data;
// If 'true', the in-memory object representing the database has changed,
// and we should flush it to disk.
var updated = false;
// Pull in Node's file system and path modules.
var fs = require('fs'),
  path = require('path');

try {
  // ./database.json may be missing. The comment below prevents ESLint from
  // complaining about it.
  // Read more about configuration comments at the following URL:
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  /* eslint "node/no-missing-require": "off" */
  data = require('./database.json');
} catch (e) {
  // ./database.json is missing. Use the seed data defined above
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  var collectionObj = data[collection];
  if (!collectionObj) {
    throw new Error(`Object collection ${collection} does not exist in the database!`);
  }
  var obj = collectionObj[id];
  if (obj === undefined) {
    throw new Error(`Object ${id} does not exist in object collection ${collection} in the database!`);
  }
  return JSONClone(data[collection][id]);
}
module.exports.readDocument = readDocument;

/**
 * Emulates writing a "document" to a NoSQL database.
 */
function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  if (id === undefined) {
    throw new Error(`You cannot write a document to the database without an _id! Use AddDocument if this is a new object.`);
  }
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  updated = true;
}
module.exports.writeDocument = writeDocument;

/**
 * Adds a new document to the NoSQL database.
 */
function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  if (newDoc.hasOwnProperty('_id')) {
    throw new Error(`You cannot add a document that already has an _id. addDocument is for new documents that do not have an ID yet.`);
  }
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}
module.exports.addDocument = addDocument;

/**
 * Deletes a document from an object collection.
 */
function deleteDocument(collectionName, id) {
  var collection = data[collectionName];
  if (!collection[id]) {
    throw new Error(`Collection ${collectionName} lacks an item with id ${id}!`);
  }
  delete collection[id];
  updated = true;
}
module.exports.deleteDocument = deleteDocument;

/**
 * Returns an entire object collection.
 */
function getCollection(collectionName) {
  return JSONClone(data[collectionName]);
}
module.exports.getCollection = getCollection;

/**
 * Reset the database.
 */
function resetDatabase() {
  data = JSONClone(initialData);
  updated = true;
}
module.exports.resetDatabase = resetDatabase;

// Periodically updates the database on the hard drive
// when changed.
setInterval(function() {
  if (updated) {
    fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(data), { encoding: 'utf8' });
    updated = false;
  }
}, 200);