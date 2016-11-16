import {readDocument, writeDocument, addDocument} from './database.js';

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
function getFeedItemSync(feedItemId) {
  var feedItem = readDocument('feedItems', feedItemId);
  feedItem.contents.author =
    readDocument('users', feedItem.contents.author);
  feedItem.comments.forEach((comment) => {
    comment.author = readDocument('users', comment.author);
  });
  return feedItem;
}

/**
* Emulates a REST call to get the feed data for a particular user.
* @param user The ID of the user whose feed we are requesting.
* @param cb A Function object, which we will invoke when the Feed's data is available.
*/
export function getFeedData(user, cb) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  // Get the Feed object for the user.
  var feedData = readDocument('feeds', userData.feed);
  // Map the Feed's FeedItem references to actual FeedItem objects.
  // Note: While map takes a callback function as an argument, it is
  // synchronous, not asynchronous. It calls the callback immediately.
  feedData.contents = feedData.contents.map(getFeedItemSync);
  // Return FeedData with resolved references.
  // emulateServerReturn will emulate an asynchronous server operation, which
  // invokes (calls) the "cb" function some time in the future.
  emulateServerReturn(feedData, cb);
}

export function postComment(spotId, user, contents, cb) {
  var spot = readDocument('feedItems', spotId);
  spot.comments.push({
      "author": user,
      "postDate": new Date().getTime(),
      "contents": contents
    });
  writeDocument('feedItems', spot);
  emulateServerReturn(getFeedItemSync(spotId), cb);
}


export function getUserData(user) {
  var userData = readDocument('users', user);

  return(userData);
}

export function getSpotData(spot) {
  var spotData = readDocument('spots', spot);

  return(spotData);
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
