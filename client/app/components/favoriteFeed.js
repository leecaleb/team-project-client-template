import React from 'react';
import FavFeedItem from './favFeedItem';
import {getFavFeedData} from '../server';

export default class FavoriteFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
  getFavFeedData(this.props.user, (faves) => {this.setState({favorites: faves.contents})});
}
  refresh() {
getFavFeedData(this.props.user, (faves) => {this.setState({favorites: faves.contents})});

  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div>
              <h4>My favorite spots
              <span className="glyphicon glyphicon-ok"></span>
              </h4>
            </div>
          </div>
          <div className="panel-footer">
            {this.state.favorites.map((favFI) => {
              return(
                <FavFeedItem key = {favFI} data = {favFI} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

FavoriteFeed.contextTypes = {
    router: React.PropTypes.object.isRequired
};
