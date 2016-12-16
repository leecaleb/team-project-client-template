import React from 'react';
import FavFeedItem from './favFeedItem';
import {getFavFeedData} from '../server';

export default class FavoriteFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  refresh() {
    getFavFeedData(this.props.user, (feedData) => {
      this.setState(feedData);
    });
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
            {this.state.contents.map((favFI) =>{
              return(
                <FavFeedItem key = {favFI._id} data = {favFI} />
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
