import React from 'react';
import {getSpotData} from '../server';
import {getUserData} from '../server';
import {getFeed} from '../server';
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
    var spotdata;
    var author;
    var feed;
    var rightbar = [];
    for (var i = 0; i < this.state.favoriteSpots.length; i++){


      spotdata = getSpotData(this.state.favoriteSpots[i]);
      feed = getFeed(this.state.favoriteSpots[i]);
      author = getUserData(feed.comments[feed.comments.length-1].author)
      rightbar.push(
        <div>
          <div className="row topspots-pics">
          <div className="col-md-12">
            <img src={spotdata.image}/>
          </div>
        </div>
        <div className="row topspots-desc">
          <div className="col-md-12">
            <a href="#">{spotdata.name}</a>
            <br />
            Current Status: Busy
            <br />
            Hours of Operation:
            <br />
            {spotdata.businessHours}
            <br />
            <div className="topspots-topposts">{feed.comments[feed.comments.length-1].contents}</div><div className="topspots-username">- {author.name}</div>
          </div>
        </div>
      </div>
      )
    }

    return (

      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="row topspots-title">
              <div className="col-md-12">
                Favorite Spots
              </div>
            </div>
            {rightbar}



          </div>
        </div>
      </div>
    );
  }
}
