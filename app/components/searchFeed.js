import React from 'react';
import SearchEntry from './searchEntry'
import SearchFeedItem from './searchFeedItem';
import {getSearchResult} from '../server';

export default class SearchFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Empty searchFeedItem.
      contents: []
    };
  }
  onSearch(searchText) {
    getSearchResult(searchText, (searchResult) => {this.setState(searchResult)});
  }
  render() {
    return (
      <div>
        <SearchEntry onSearch={(searchText) => this.onSearch(searchText)} />
        <ul className="media-list">
          {this.state.contents.map((searchFeedItem) => {
            return (
              <SearchFeedItem key={searchFeedItem._id} data={searchFeedItem} />
            )
          })}
        </ul>
      </div>
    )
  }
}
