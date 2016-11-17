import React from 'react';
import SearchEntry from './searchEntry';
import SearchFeedItem from './searchFeedItems';
import {getSpotData} from '../server';

export default class SearchFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Empty searchFeedItem.
      contents: []
    };
  }
  onClick(searchText) {
    var newContents_id = [1, 2, 3];
    var newContents = newContents.map((id) => getSpotData(id));
    {this.setState(newContents)};
  }
  render() {
    return (
      <div>
        <SearchEntry onClick{(searchText) => this.onClick(searchText)}/>
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
