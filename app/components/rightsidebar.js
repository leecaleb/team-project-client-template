import React from 'react';
import {getSpotData} from '../server';
import {getUserData} from '../server';
import {getAllSpots} from '../server';
import {getFeed} from '../server';
import {Link} from 'react-router';
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

  compare(a,b) {
  if (a.rate < b.rate)
    return -1;
  if (a.rate > b.rate)
    return 1;
  return 0;
}




  render() {
    var spotdata;
    var author;
    var feed;
    var rightbar = [];
    var avgscore = [];
    var rating;
    var info;
    for (var j = 0; j<6; j++){
      feed = getFeed(j+1);
      rating = 0;
      for(var t = 0; t<feed.comments.length; t++){
        rating = rating + feed.comments[t].rating;
      }
      rating = rating/feed.comments.length;
      rating = parseFloat(rating).toFixed(1);
      info ={
        "rate": rating,
        "com": feed.comments,
        "index": j+1
      }
      avgscore[j] = info;
    }

  avgscore.sort(function(a, b) {
    return a.rate - b.rate;
  }).reverse();




    for (var i = 0; i < 3; i++){


      spotdata = getSpotData(avgscore[i].index);

      author = getUserData(avgscore[i].com[avgscore[i].com.length-1].author)
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
            Current Status: {avgscore[i].rate}
            <br />
            Hours of Operation:
            <br />
            {spotdata.businessHours}
            <br />
            <div className="topspots-topposts">{avgscore[i].com[avgscore[i].com.length-1].contents}</div><div className="topspots-username">- {author.name}</div>
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
                Top Spots
              </div>
            </div>
            {rightbar}



          </div>
        </div>
      </div>
    );
  }
}
