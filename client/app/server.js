import {readDocument, writeDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

/**
* Given a feed item ID, returns a FeedItem object with references resolved.
* Internal to the server, since it's synchronous.
*/

/**
* Emulates a REST call to get the feed data for a particular user.
* @param user The ID of the user whose feed we are requesting.
* @param cb A Function object, which we will invoke when the Feed's data is available.
*/
// export function getFeedData(user, cb) {
//   // // Get the User object with the id "user".
//   // var userData = readDocument('users', user);
//   // // Get the Feed object for the user.
//   // var feedData = readDocument('feeds', userData.feed);
//   // // Map the Feed's FeedItem references to actual FeedItem objects.
//   // // Note: While map takes a callback function as an argument, it is
//   // // synchronous, not asynchronous. It calls the callback immediately.
//   // feedData.contents = feedData.contents.map(getFeedItemSync);
//   // // Return FeedData with resolved references.
//   // // emulateServerReturn will emulate an asynchronous server operation, which
//   // // invokes (calls) the "cb" function some time in the future.
//   // emulateServerReturn(feedData, cb);
//   sendXHR('GET', '/user/4/feed', undefined, (xhr) => {
//     cb(JSON.parse(xhr.responseText));
//   });
// }

export function postComment(user, spotId, contents, rating, cb) {
  sendXHR('POST', '/comment' ,{
    user: user,
     spotId: spotId,
     contents:contents,
      rating: rating
  }

   ,(xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function saveEditProfile(user, changedName, about) {
  var updatedUser = readDocument('users', user);
  updatedUser.name = changedName;
  updatedUser.bio = about;
  writeDocument('users', updatedUser);
}

export function getSearchResult(query, cb) {
  var searchResult = ['000000000000000000000001', '000000000000000000000003', '000000000000000000000003'];
  searchResult = searchResult.map((id) => getSpotData(id));
  emulateServerReturn(searchResult, cb);
}

export function getUserData(user, cb) {
  sendXHR('GET', '/user/000000000000000000000004', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function getSpotData(spot, cb) {
  sendXHR('GET', '/spot/' + spot, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function fave(userid, spotid, cb) {
  sendXHR('PUT', '/fave/' + userid + '/' + spotid,
  undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function unfave(userid, spotid, cb) {
  sendXHR('DELETE', '/unfave/' + userid+ '/' + spotid,
  undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function getFeedData(spot, cb) {
  sendXHR('GET', '/feed/' + spot, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function getTopData(spot, cb) {
  sendXHR('GET', '/top/' + spot, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}


export function getFavFeedData(user, cb) {
  console.log(user);
  console.log(cb);
  sendXHR('GET', '/user/'+ user + '/favfeed', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function getFavFeed(user, cb) {
  sendXHR('GET', '/user/'+ user + '/favfeed', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function getFeed(feed) {
  var spotData = readDocument('feedItems', feed);
  return(spotData);
}

export function getFavoriteSpotsIdArray(user) {
  var userData = readDocument('users', user);
  return (userData.favoriteSpots);
}

export function getFavoriteSpotsData(spotID) {
  var spotData = readDocument('spots', spotID);
  return spotData;
}

var token = 'eyJpZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNCJ9';

function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource); xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      cb(xhr);
    } else {
      var responseText = xhr.responseText;
      Error('Could not ' + verb + " " + resource + ": Received " +
      statusCode + " " + statusText + ": " + responseText);
    }
  });
  xhr.timeout = 10000;
  xhr.addEventListener('error', function() { Error('Could not ' + verb + " " + resource + ": Could not connect to the server.");
});
xhr.addEventListener('timeout', function() { Error('Could not ' + verb + " " + resource +
": Request timed out.");
});
switch (typeof(body)) {
  case 'undefined':
  xhr.send();
  break;
  case 'string':
  xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  xhr.send(body);
  break;
  case 'object':
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(body));
  break;
  default:
  throw new Error('Unknown body type: ' + typeof(body));
}
}
