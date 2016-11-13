import React from 'react';
import {getSpotData} from '../server';
import {getUserData} from '../server';
export default class RightSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = getUserData(this.props.user);
  }

  refresh() {
    this.state = getUserData(this.props.user);
  }

  componentDidMount() {
    this.refresh();
  }




  render() {
    var spotdata = [];
    for (var i = 0; i < this.state.favoriteSpots.length; i++){
      spotdata[i] = getSpotData(this.state.favoriteSpots[i]);
   }
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="row topspots-title">
              <div className="col-md-12">
                Spots to Try
              </div>
            </div>

            <div className="row topspots-pics">
              <div className="col-md-12">
                <img src="img/berk.jpg"/>
              </div>
            </div>
            <div className="row topspots-desc">
              <div className="col-md-12">
                <a href="#">{spotdata[0].name}</a>
                <br />
                Current Status: Busy
                <br />
                Hours of Operation:
                <br />
                Monday - Sunday
                <br />
                11:00 AM - 11:59 PM
                <br />
                <div className="topspots-topposts">"Way to crowded here, but you'll eat here and you'll like it!"</div><div className="topspots-username">- FoodLover6969</div>
              </div>
            </div>




          </div>
        </div>
      </div>
    );
  }
}
