 import React from 'react';
//import ReactDOM from 'react-dom';

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
        "favoriteSpots": [1,3],
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
        "image": "img/frank.jpg",
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
            "contents": "no people here! cool!",
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
          "latest_score": 7,
          "latest_update_time": 14536684846500
        },

        // lastest comments
        "comments": [
          {
            "_id":1,
            "author": 3,
            "contents": "Not crowded at all!",
            "postDate": 1453690800000,
            "rating": 9
          },
          {
            "_id":2,
            "author": 2,
            "contents": "Do not come here!",
            "postDate": 1453690800000,
            "rating": 2
          },
          {
            "_id":3,
            "author": 4,
            "contents": "You should come!",
            "postDate": 1453690800000,
            "rating": 10

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
          "latest_score": 8,
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
        "contents": [1,2]
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
// export function resetDatabase() {
//   localStorage.setItem(startupName, JSON.stringify(initialData));
//   data = JSONClone(initialData);
// }

/**
 * Reset database button.
 */
 export class ResetDatabase extends React.Component {
   render() {
     return (
       <button className="btn btn-default" type="button" onClick={() => {
         var xhr = new XMLHttpRequest();
         xhr.open('POST', '/resetdb');
         xhr.addEventListener('load', function() {
           window.alert("Database reset! Refreshing the page now...");
           document.location.reload(false);
         });
         xhr.send();
       }}>Reset Mock DB</button>
     );
   }
 }
// commnet out since it crushes the page
// ReactDOM.render(
//   <ResetDatabase />,
//   document.getElementById('db-reset')
// );
