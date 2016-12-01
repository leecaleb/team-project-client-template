import React from 'react';
import {getSpotData} from '../server';
import {getFeed} from '../server';
import {getUserData} from '../server';
import {favoriteSpot} from '../server';
import {unfavoriteSpot} from '../server';
import {resetDatabase} from '../database';
import Post from './post';
import {Link} from 'react-router'
export default class LocationFeed extends React.Component {

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
var spotD = this.props.spot;
    var buttonPressed = true;
    var favorites =  getUserData(4).favoriteSpots;
      // if(spotD in favorites){
      //   buttonPressed = true;
      // }
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

    var i = spotD;
    feed = getFeed(i);
    var score = 0;
      for(var k = 0;  k < feed.comments.length; k++){
        score = feed.comments[k].rating + score
      }
       score = parseFloat(score / k).toFixed(1);


      var spotdata;
      var author;
      var feed;
      var commentFeed = [];
for(var j = 0; j < feed.comments.length; j++){
author = getUserData(feed.comments[j].author)
commentFeed.push(
  <div className="panel panel-default">
    <div className="panel-body">
      <div className="row">
        <div className="col-md-10">


          <div className="media">
            <div className="media-left media-top">
               {author.name}
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
        spotdata = getSpotData(i);

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
                    <img src={spotdata.image}/>
                  </div>

                  <div className="media-body">
                    <h4>{spotdata.name}   {faveButton}</h4>

                    <br /> 8 AM -9 AM
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
              {spotdata.description}
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
