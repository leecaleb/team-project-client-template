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

function getFeedItemSync(feedItemId) {
  var feedItem = readDocument('feedItems', feedItemId);
  return feedItem;
}

export function getFeedData(user, cb) {
  var userData = readDocument('users', user);
  var favoriteSpotsFeedData = readDocument('feeds', userData.favoriteSpotsFeed);
  favoriteSpotsFeedData.contents = favoriteSpotsFeedData.contents.map(getFeedItemSync);
  return(favoriteSpotsFeedData, cb);
}

export function getUserData(user) {
  var userData = readDocument('users', user);
  return(userData);
}
