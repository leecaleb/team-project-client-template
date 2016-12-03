import React from 'react';
import {getSpotData} from '../server';
import {getFeed} from '../server';
import {getFeedData} from '../server';
import {getUserData} from '../server';
import {favoriteSpot} from '../server';
import {unfavoriteSpot} from '../server';
import {resetDatabase} from '../database';
import Post from './post';
import {Link} from 'react-router'
export default class LocationFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      spot: [],
      feed: []
    };
    getUserData(this.props.user, (userData) => {this.setState({user: userData})});
     getFeedData(this.props.spot, (feedData) => {this.setState({feed: feedData})});

    getSpotData(this.props.spot, (spotData) => {this.setState({spot: spotData})});

  }

  handleClick(e) {
  var spotD = this.props.spot;
    e.preventDefault();
  //
  // var buttonPressed = false;
  // var favorites =  getUserData(4).favoriteSpots;
  //   buttonPressed = favorites.indexOf(parseInt(spotD))> -1
  // if(buttonPressed == false){
    unfavoriteSpot(4, parseInt(spotD))
  // }
  // if(buttonPressed == true){unfavoriteSpot(4, spotD)}
 /* TODO: How do we send the post to the server
 + update the Feed? */
 // Reset status update.
 this.setState({value: ""});
 }

 handleReset(e) {
resetDatabase();
  e.preventDefault();

 // var buttonPressed = true;
 // // var favorites =  getUserData(4).favoriteSpots;
 // if(2 in favorites){
 //   buttonPressed = true;
 // }
 // favoriteSpot(4, 1)

/* TODO: How do we send the post to the server
+ update the Feed? */
// Reset status update.
this.setState({value: ""});
}
handleUnClick(e) {
var spotD = this.props.spot;
 e.preventDefault();

// var buttonPressed = false;
// var favorites =  getUserData(4).favoriteSpots;
//   buttonPressed = favorites.indexOf(parseInt(spotD))> -1
// if(buttonPressed == false){
favoriteSpot(4, parseInt(spotD))
// }
// if(buttonPressed == true){unfavoriteSpot(4, spotD)}
// /* TODO: How do we send the post to the server
// + update the Feed? */
// // Reset status update.
this.setState({value: ""});
}

handleReset(e) {
resetDatabase();
e.preventDefault();

// var buttonPressed = true;
// // var favorites =  getUserData(4).favoriteSpots;
// if(2 in favorites){
//   buttonPressed = true;
// }
// favoriteSpot(4, 1)

/* TODO: How do we send the post to the server
+ update the Feed? */
// Reset status update.
this.setState({value: ""});
}




  render() {
    console.log(this.state.spot.name);
var spotD = this.props.spot;
    var buttonPressed = true;
    var favorites =  this.state.user.favoriteSpots;
      // if(spotD in favorites){
      //   buttonPressed = true;
      // }
      console.log(favorites);
      buttonPressed = favorites.indexOf(parseInt(spotD))> -1


    var faveButton = [];
    if(buttonPressed){
    faveButton.push(<button type="button" className="btn btn-default btn-clicked" onClick={(e) => this.handleClick(e)}>
        <span className="glyphicon glyphicon-star"> Unfavorite </span>
      </button>)
    }
    else{

      faveButton.push(<button type="button" className="btn btn-default" onClick={(e) => this.handleUnClick(e)}>
          <span className="glyphicon glyphicon-star"> Favorite </span>
        </button>)
      }
  var feed = getFeed(spotD);
    var i = spotD;

    var score = 0;
      for(var k = 0;  k < feed.comments.length; k++){
        score = feed.comments[k].rating + score
      }
       score = parseFloat(score / k).toFixed(1);


      var spotdata;
      var author;

      var commentFeed = [];
for(var j = 0; j < feed.comments.length; j++){
// author = this.state.comments[j].author;
commentFeed.push(
  <div className="panel panel-default">
    <div className="panel-body">
      <div className="row">
        <div className="col-md-10">


          <div className="media">
            <div className="media-left media-top">
               {feed.comments[j].author}
            </div>

            <div className="media-body">

              IMAGE
              <br /> {feed.comments[j].rating}
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-md-12">
          {feed.comments[j].contents}
        </div>
        <div className="col-md-12">
        {feed.comments[j].postDate}
        </div>
      </div>
    </div>



  </div>)

}
        // spotdata = getSpotData(i);

        return(
        <div>
          <div classNameName="col-md-6">




            <div className="panel panel-default">
              <div className="panel-body">

                <div className="row">
<Link to={"/"}> Back to Front Page </Link>
                </div>  </div>   </div>   </div>
      <div classNameName="col-md-6">




        <div className="panel panel-default">
          <div className="panel-body">

            <div className="row">
              <div className="col-md-12">
                <div className="media">
                  <div className="media-left media-top">
                    <img src={this.state.spot.image}/>
                  </div>

                  <div className="media-body">
                    <h4>{this.state.spot.name}   {faveButton}</h4>

                    <br /> {this.state.spot.businessHours}
                  </div>

                  <div className="media-right">
                Current Average Score  {score}
                <button type="button" onClick={(reset) => this.handleReset(reset)}>
                   ResetDB
                </button>
                  <Post />

                  </div>
                </div>
              </div>
            </div>

            <br />

            <div className="row">
              <div className="col-md-12">
              {this.state.spot.description}
              </div>
            </div>
            <br />

{commentFeed}
          </div>
        </div>






      </div>
      </div>
    )
  }
}
