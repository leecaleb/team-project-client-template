import React from 'react';
import {getSpotData} from '../server';
import {getFeedData} from '../server';



export default class RightPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      feed: []
    }
    getSpotData(this.props.spot, (spotData) => {this.setState({spots: spotData})});
    getFeedData(this.props.spot, (feedData) => {this.setState({feed: feedData})});
  }

  render() {




    return (
      <div>

      <div className="row topspots-pics">
          <div className="col-md-12">
            <img src={this.state.spots.image}/>
          </div>
        </div>
        <div className="row topspots-desc">
          <div className="col-md-12">

            <div className="place-title">{this.state.spots.name}</div>


            Location Rating: {10}
            <br />
            Hours of Operation:
            <br />
            {this.state.spots.businessHours}
            <br />
            <div className="topspots-topposts">{this.state.spots.likeCounter}</div><div className="topspots-username"></div>
          </div>
        </div>
      </div>
    );
  }
}
