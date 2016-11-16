import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = 'Jujube';

// Put your mock objects here, as in Workshop 4
var initialData = {

  // users
  "users": {
    "1": {
      "_id": 1,
      "name": "Jujube",
      "favoriteSpots": [2, 1, 3],
      "bio": "CS326 fall 2016",
      "joinDate": "2016-09-06",
      "institution": "University of Massachusetts"
    },
    "2": {
<<<<<<< HEAD
      "id": 2,
<<<<<<< HEAD
      "name": "MarkyMark",
=======
      "_id": 2,
      "name": "user2",
<<<<<<< HEAD
<<<<<<< HEAD
      "favoriteSpots": [],
      "bio": "",
      "joinDate": "",
      "institution": ""
=======
=======
>>>>>>> master
>>>>>>> cal
      "favoriteSpots": [],
      "bio": "",
      "joinDate": "",
      "institution": "",
      "image": "img/foodlover.jpg"

<<<<<<< HEAD
>>>>>>> 0f8986da18dba15fac26bc65a788c885beeae5c7
=======
>>>>>>> master
    },
    "3": {
<<<<<<< HEAD
      "id": 3,
      "name": "Guwop",
=======
<<<<<<< HEAD
      "name": "user2",
      "favoriteSpots": [],
      "bio": "",
      "joinDate": "",
      "institution": ""
    },
    "3": {
      "id": 3,
      "name": "user3",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> SkylakeL
>>>>>>> master
=======
      "_id": 3,
      "name": "user3",
>>>>>>> cal
>>>>>>> 0f8986da18dba15fac26bc65a788c885beeae5c7
      "favoriteSpots": [],
      "bio": "",
      "joinDate": "",
      "institution": ""
    },
    "4": {
<<<<<<< HEAD
<<<<<<< HEAD
      "id": 4,
      "name": "Du Bois Falcon",
      "favoriteSpots": [],
=======
=======
>>>>>>> master
      "_id": 4,
      "name": "Du Bois Falcon",
<<<<<<< HEAD
      "favoriteSpots": [3,2, 1],
<<<<<<< HEAD
>>>>>>> 0f8986da18dba15fac26bc65a788c885beeae5c7
=======
=======
      "favoriteSpots": [],
>>>>>>> SkylakeL
>>>>>>> master
      "bio": "The Peregrine Falcon is the fastest bird on earth, capable of diving from great heights at speeds of up to 242 miles per hour. It is a beautiful raptor with long, pointed wings and a long, slightly rounded tail.",
      "joinDate": "2016-10-02",
      "institution": "University of Massachusetts"
    }
  },

  // spots are our "users" actually!!
  "spots": {
    "1": {
      "_id": 1,
      "name": "Library",
      "feeds": 1,
      "businessHours": "24/7",
      "image": "img/library.jpg",
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
          "rating": 4
        },
        {
          "author": 3,
          "vote": 1,
          "contents": "Fuck.. no people here! cool!",
          "postDate": 1453690800000,
          "rating": 3
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
          "postDate": 1453690800000
        },
        {
          "author": 3,
          "vote": 1,
          "contents": "A little bit busy now",
          "postDate": 1453690800000
        }
      ]
    }
  }
};

var data = JSON.parse(localStorage.getItem(startupName));
if (data === null) {
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
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem(startupName, JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
  localStorage.setItem(startupName, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.
 */
class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}
/** commnet out since it crushes the page
ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);
*/
