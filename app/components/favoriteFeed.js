import React from 'react';
import FavoriteEntry from './FavoriteEntry'
import {getFeedData} from '../server';

export default class FavoriteFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    }
  }

  refresh() {
    getFeedData(this.props.user, (feedData) => {
      this.setState(feedData);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <FavoriteEntry />
        {this.state.contents.map((feedItem) => {
          return (
            <FeedItem key={feedItem._id} data = {feedItem} />
          );
        })}
      </div>
    )
  }
}
