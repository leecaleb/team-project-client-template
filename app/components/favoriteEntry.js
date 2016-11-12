import React from 'react';
import FavoriteFeedItem from './favoriteFeedItem'
import {readDocument} from './database.js';

export default class FavoriteEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteSpots: []
    }
  }
  render() {
    var userData = readDocument('users', this.props.user);
    var favoriteSpotsData = userData.favoriteSpots;
    var spotsFeedData = readDocument('feeds', favoriteSpotsData.feed);
    return (
      <div className="bot">
        <div>
            <h4>My favorate spots
            <span> </span><span className="glyphicon glyphicon-ok"></span>
            </h4>
        </div>
        <hr />

        {this.state.favoriteSpots.map((favoriteSpots) => {
          var favoriteSpots_id
          return (
            <FavoriteFeedItem key={favoriteSpots.id} data = {favoriteSpots} />
          );
        })}

      </div>
    )
  }
}
