import React from 'react';
import Modal from './modal';
import {Link} from 'react-router';
import {getFeedData} from '../server';
import {getSpotData} from '../server';

export default class FavFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: '',
      spot: ''}

    getFeedData(props.data, (feedData) => {this.setState({score: feedData.contents.latest_score})});
      getSpotData(props.data, (feedData) => {this.setState({spot: feedData})});
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-4">
                <div className="media">
                  <div className="media-left media-top">
                    <img src={this.state.spot.image} className="media-object" alt="Generic placeholder image" />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="media">
                  <div className="media-body">
                    <Link to={"/loc/" + this.state.spot._id}> {this.state.spot.name} </Link>
                  </div>
                  <p> Current Rating: {this.state.score} </p>
                  <p> {this.state.spot.businessHours} </p>
                  <div>
                    <div className="row">
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-2">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
