import React from 'react';
import {getSpotData} from '../server';
import {getFeedData} from '../server';
import {getUserData} from '../server';



export default class RightPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      rating: "",
      lastcomment: "",
      author: "",
      user: ""
    }
    getSpotData(this.props.spot, (spotData) => {this.setState({spots: spotData})});
    getFeedData(this.props.spot, (feedData) => {this.setState({rating: feedData.contents.latest_score})});
    getFeedData(this.props.spot, (feedData) => {this.setState({lastcomment: feedData.comments[feedData.comments.length-1].contents})});
    getFeedData(this.props.spot, (feedData) => {this.setState({author: feedData.comments[feedData.comments.length-1].author})});
    getUserData(this.state.author, (userData) => {this.setState({user: userData})});
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


            Location Rating: {this.state.rating}
            <br />
            Hours of Operation:
            <br />
            {this.state.spots.businessHours}
            <br />
            <div className="topspots-topposts">{this.state.lastcomment}</div><div className="topspots-username"> - {this.state.user.name}</div>
          </div>
        </div>
      </div>
    );
  }
}
