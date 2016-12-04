import React from 'react';
import {getSpotData} from '../server';
import {getFeed} from '../server';
import {getFeedData} from '../server';
import {getUserData} from '../server';
import {favoriteSpot} from '../server';
import {unfavoriteSpot} from '../server';
import {resetDatabase} from '../database';
import {readDocument} from '../database';
import Post from './post';
import {Link} from 'react-router'
export default class LocationFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< .merge_file_RedNIK
      value: props.array
    };
  }

  //getUserData(this.props.user, (userData) => {this.setState(userData)});
=======
      user: [],
      spot: [],
      feed: []
    };
    getUserData(this.props.user, (userData) => {this.setState({user: userData})});
     getFeedData(this.props.spot, (feedData) => {this.setState({feed: feedData})});

    getSpotData(this.props.spot, (spotData) => {this.setState({spot: spotData})});

  }
>>>>>>> .merge_file_g3NSCe

  handleClick(e) {
  var spotD = this.props.spot;
    e.preventDefault();
    unfavoriteSpot(4, parseInt(spotD))
    this.setState({value: ""});
 }

 handleReset(e) {
   resetDatabase();
   e.preventDefault();
  this.setState({value: ""});
}

handleUnClick(e) {
  var spotD = this.props.spot;
  e.preventDefault();
  favoriteSpot(4, parseInt(spotD))
  this.setState({value: ""});
}

handleReset(e) {
  resetDatabase();
  e.preventDefault();
  this.setState({value: ""});
}

render() {
  var feeds = readDocument('feeds', this.props.spot);
  var contents = feeds.contents;
  var feedItem = readDocument('feedItems', contents[0]);
  var comments = feedItem.comments;

  var spotData = getSpotData(this.props.spot)

  return(

<<<<<<< .merge_file_RedNIK
    <div>
      <div classNameName="col-md-6">
        <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <Link to={"/"}> Back to Front Page </Link>
              </div>
=======
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
>>>>>>> .merge_file_g3NSCe
            </div>
        </div>
      </div>

<<<<<<< .merge_file_RedNIK
=======


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
>>>>>>> .merge_file_g3NSCe
      <div classNameName="col-md-6">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-12">
                <div className="media">
                  <div className="media-left media-top">
<<<<<<< .merge_file_RedNIK
=======
                    <img src={this.state.spot.image}/>
                  </div>
>>>>>>> .merge_file_g3NSCe

                  </div>
                  <div className="media-body">
<<<<<<< .merge_file_RedNIK
                    <br /> 8 AM -9 AM
=======
                    <h4>{this.state.spot.name}   {faveButton}</h4>

                    <br /> {this.state.spot.businessHours}
>>>>>>> .merge_file_g3NSCe
                  </div>
                  <div className="media-right">
                    Current Average Score  {}
                    <button type="button" onClick={(reset) => this.handleReset(reset)}>
                      ResetDB
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-12">
<<<<<<< .merge_file_RedNIK
              {spotData.description}
=======
              {this.state.spot.description}
>>>>>>> .merge_file_g3NSCe
              </div>
            </div>
            <br />

            {comments.map((comment) => {
              return(
                <div className="panel panel-default" key={comment.contents}>
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-10">
                        <div className="media">
                          <div className="media-left media-top">
                            {this.state.name}
                          </div>
                          <div className="media-body">
                            IMAGE
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
                        {comment.postDate}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })};

          </div>
        </div>
      </div>
    </div>
    )
  }
}
