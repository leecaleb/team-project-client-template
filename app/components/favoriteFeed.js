import React from 'react';
import FavoriteFeedItem from './favoriteFeedItem';
import {getFavoriteSpots} from './server'

export default class FavoriteFeed extends React.Component {

  render() {
    var favoriteSpotsData = getFavoriteSpots(this.props.user)
    return (
      <div className="bot">
        <div>
          <h4>My favorate spots
          <span> </span><span className="glyphicon glyphicon-ok"></span>
          </h4>
        </div>

        <hr />

        {favoriteSpotsData.map((spotData) => {
          return (
            <FavoriteFeedItem key={spotData.id} data = {spotData} />
          );
        })}

      </div>
    )
  }
}
