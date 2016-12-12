import React from 'react';
import {getSpotData} from '../server';
import {getFeedData} from '../server';
import {getUserData} from '../server';
import {favoriteSpot} from '../server';
import {unfavoriteSpot} from '../server';
import {unixTimeToString} from '../util';
import Post from './post';
import {Link} from 'react-router'
import {fave} from '../server';
import {unfave} from '../server';
export default class LocationFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: props.array,
      user: [],
      spot: [],
      feed: [],
      value: "",
      favorites: []
    };
    getUserData(this.props.user, (userData) => {this.setState({user: userData})});
        getUserData(this.props.user, (users) => {this.setState({favorites: users.favoriteSpots})});
     getFeedData(this.props.spot, (feedData) => {this.setState({feed: feedData.comments})});

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
  // unfave(this.props.user, spotD, (faveData) => {this.setState({user: faveData})});



      var callbackFunction = (updatedFavorites) => {
        // setState will overwrite the 'likeCounter' field on the current
        // state, and will keep the other fields in-tact.
        // This is called a shallow merge:
        // https://facebook.github.io/react/docs/component-api.html#setstate
        this.setState({user: updatedFavorites});
        this.setState({favorites: updatedFavorites});
      };


        // User clicked 'unlike' button.
        unfave(this.props.user, spotD, callbackFunction);


  // }
  // if(buttonPressed == true){unfavoriteSpot(4, spotD)}
 // Reset status update.

 }


handleUnClick(e) {
var spotD = this.props.spot;
 e.preventDefault();


var callbackFunction = (updatedFavorites) => {
  // setState will overwrite the 'likeCounter' field on the current
  // state, and will keep the other fields in-tact.
  // This is called a shallow merge:
  // https://facebook.github.io/react/docs/component-api.html#setstate
  this.setState({user: updatedFavorites});
  this.setState({favorites: updatedFavorites});
};


  // User clicked 'unlike' button.
  fave(this.props.user, spotD, callbackFunction);


}





  render() {
var comments = this.state.feed;
var spotData = this.state.spot;
var spotD = this.props.spot;
    var buttonPressed = true;
    var favorites =  this.state.favorites;
      // if(spotD in favorites){
      //   buttonPressed = true;
      // }
      console.log(favorites);
      // buttonPressed = favorites.indexOf(parseInt(spotD))> -1


    var faveButton = [];
    if(buttonPressed){
    faveButton.push(<button type="button" className="btn btn-default btn-clicked" key={this.props.user} onClick={(e) => this.handleClick(e)}>
        <span className="glyphicon glyphicon-star"> Unfavorite </span>
      </button>)
    }
    else{

      faveButton.push(<button type="button" className="btn btn-default" key={this.props.user} onClick={(e) => this.handleUnClick(e)}>
          <span className="glyphicon glyphicon-star"> Favorite </span>
        </button>)
      }
  // var feed = getFeed(spotD);
    var i = spotD;

    var score = 0;
      // for(var k = 0;  k < comments.length; k++){
      //   score = commend[k].rating + score
      // }
      //  score = parseFloat(score / k).toFixed(1);


// author = this.state.comments[j].author;



        // spotdata = getSpotData(i);

        return(
        <div>
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

              {comments.map((comment) =>{
                return(
                <div className="panel panel-default" key = {comment.contents}>
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-10">


                        <div className="media">
                          <div className="media-left media-top">
                             {comment.author}
                          </div>

                          <div className="media-body">

                            IMAGES
                            <br /> {comment.rating}
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />

                    <div className="row">
                      <div className="col-md-12">
                        {comment.contents}
                      </div>
                      <div className="col-md-12">
                      {unixTimeToString(comment.postDate)}
                      </div>
                    </div>
                  </div>
                </div>)
              })}
          </div>
        </div>
      </div>
    )
  }
}
