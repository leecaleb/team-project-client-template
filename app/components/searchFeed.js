import React from 'react';
import SearchEntry from './searchEntry'
import SearchFeedItem from './searchFeedItems'

export default class SearchFeed extends React.Component {

  render() {
    return (
      <div>
        <SearchEntry />
        <SearchFeedItems />
      </div>
    )
  }
}
