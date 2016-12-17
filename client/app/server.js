import {readDocument, writeDocument} from './database.js';

/**
* Emulates a REST call to get the feed data for a particular user.
* @param user The ID of the user whose feed we are requesting.
* @param cb A Function object, which we will invoke when the Feed's data is available.
*/

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

export function searchForSpot(query, cb) {
  sendXHR('POST', '/search', query, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function getUserData(user, cb) {
  sendXHR('GET', '/user/000000000000000000000004', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}
export function getTopData(user, cb) {
  sendXHR('GET', '/top', undefined, (xhr) => {
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

// export function getTopData(spot, cb) {
//   sendXHR('GET', '/top/' + spot, undefined, (xhr) => {
//     cb(JSON.parse(xhr.responseText));
//   });
// }


export function getFavFeedData(user, cb) {
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
