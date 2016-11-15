import React from 'react';
import FavoriteFeedItem from './favoriteFeedItem';
import {getFeedData} from './server'



export default class FavoriteFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = getFeedData(this.props.user)
  }

  render() {
    return (
      <div className="bot">
        <div>
          <h4>My favorate spots
          <span> </span><span className="glyphicon glyphicon-ok"></span>
          </h4>
        </div>

        <hr />


      </div>
    )
  }
}
