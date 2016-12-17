import React from 'react';
import {getSpotData} from '../server';
<<<<<<< HEAD
import {getFeed} from '../server';
=======
>>>>>>> origin
import {getFeedData} from '../server';
import {getUserData} from '../server';
import {unixTimeToString} from '../util';
import {fave} from '../server';
import {unfave} from '../server';
import {getFavFeedData} from '../server';
import {postComment} from '../server';
//import {Link} from 'react-router'

export default class LocationFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      user: [],
      spot: [],
      feed: []
    };
    getUserData(this.props.user, (userData) => {this.setState({user: userData})});
     getFeedData(this.props.spot, (feedData) => {this.setState({feed: feedData})});

    getSpotData(this.props.spot, (spotData) => {this.setState({spot: spotData})});

=======

      user: [],
      spot: [],
      feed: [],
      favorites: [],
      value: "",
      score: "",
      textScore: "",
      pressed: false
    };
    getUserData(this.props.user, (userData) => {this.setState({user: userData})});
    getFavFeedData(this.props.user, (faves) => {this.setState({favorites: faves.contents})});
    getFeedData(this.props.spot, (feedData) => {this.setState({feed: feedData.comments.reverse()})});
    getFeedData(this.props.spot, (feedData) => {this.setState({score: feedData.contents.latest_score})});
    getSpotData(this.props.spot, (spotData) => {this.setState({spot: spotData})});
  }

  refresh() {
    getFeedData(this.props.spot, (feedData) => {this.setState({feed: feedData.comments.reverse()})});
  }

  handleCommentPost(e) {
    e.preventDefault();



    postComment("000000000000000000000004", this.props.spot, this.state.value, this.state.textScore,

     (updatedFeedItem) => {

      this.setState({feed: updatedFeedItem.comments.reverse()})
      getFeedData(this.props.spot, (feedData) => {this.setState({score: feedData.contents.latest_score})});
    });

    this.setState({value: ""});
    this.setState({textScore: ""});
    this.refresh();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  handleScoreChange(e) {
    e.preventDefault();
    this.setState({textScore: e.target.value});
>>>>>>> origin
  }

  handleClick(e) {
  var spotD = this.props.spot;
    e.preventDefault();
    var callbackFunction = (updatedFavorites) => {
      this.setState({favorites: updatedFavorites});
    };
    // User clicked 'unlike' button.


    fave(this.props.user, spotD, callbackFunction);
    this.setState({pressed:true});
  }

  handleUnClick(e) {
    var spotD = this.props.spot;
    e.preventDefault();
    var callbackFunction = (updatedFavorites) => {
    this.setState({favorites: updatedFavorites});
    };
    // User clicked 'unlike' button.
    unfave(this.props.user, spotD, callbackFunction);
        this.setState({pressed:false});
  }



  render() {
<<<<<<< HEAD
    console.log(this.state.spot.name);
var spotD = this.props.spot;
    var buttonPressed = true;
    var favorites =  this.state.user.favoriteSpots;
      // if(spotD in favorites){
      //   buttonPressed = true;
      // }
      console.log(favorites);
      buttonPressed = favorites.indexOf(parseInt(spotD))> -1

=======
    var spotD = this.props.spot.toString();
    var buttonPressed = this.state.pressed;
    var favorites =  this.state.favorites;

    var index = 0;
    for (index = 0; index < favorites.length; ++index) {
      if(spotD == favorites[index]){
        buttonPressed = true;
      }
    }
>>>>>>> origin

    // buttonPressed = favorites.indexOf(parseInt(spotD))> -1
    var faveButton = [];
    if(buttonPressed){
    faveButton.push(<button type="button" className="btn btn-default btn-clicked" key={this.props.user} onClick={(e) => this.handleUnClick(e)}>
        <span className="glyphicon glyphicon-star"> Unfavorite </span>
      </button>)
    }
    else{
      faveButton.push(<button type="button" className="btn btn-default btn-clicked" key={this.props.user} onClick={(e) => this.handleClick(e)}>
          <span className="glyphicon glyphicon-star"> Favorite </span>
        </button>)
<<<<<<< HEAD
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



=======
    }
    // var feed = getFeed(spotD);
    //var i = spotD;
    //var score = 0;
>>>>>>> origin

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
<<<<<<< HEAD
                    <h4>{this.state.spot.name}   {faveButton}</h4>

=======
                    <h4>{this.state.spot.name} {faveButton} </h4>
>>>>>>> origin
                    <br /> {this.state.spot.businessHours}
                  </div>

                  <div className="media-right">
                    <font size="5"> Score {this.state.score} </font>
                    <button className="btn-post" type="button" data-toggle="modal" data-target={'#' + this.props.spot}>
                      <span className="glyphicon glyphicon-pencil"> </span> Post
                    </button>

                    <div className="modal fade" id={this.props.spot} role="dialog">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Post an Update</h4>
                          </div>

                          <div className="modal-body">
                            <div className="col-md-3">
                              <p>{this.state.spot.name}</p>
                            </div>

                            <div className="col-md-4">Date: {unixTimeToString(new Date().getTime())}</div>

                            <div className="col-md-5">
                              <textarea className="form-control" rows="1" placeholder="Please give a rating!"
                                value={this.state.textScore}
                                onChange={(e) => this.handleScoreChange(e)}/>
                            </div>

                            <div className="form-group">
                              <textarea className="form-control comment"
                                rows="5"
                                placeholder="Please leave a comment..."
                                value={this.state.value}
                                onChange={(e) => this.handleChange(e)}/>
                            </div>
                          </div>

                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal"
                              onClick={(e) => this.handleCommentPost(e)}>
                              Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
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

            {this.state.feed.map((comment) => {
              return(

                <div className="panel panel-default" key = {comment.contents + comment.rating + comment.postDate}>

                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-10">
                        <div className="media">
                          <div className="media-left media-top">
                            User:{comment.author}
                          </div>
                          <div className="media-body">
                            <br />Rating: {comment.rating}
                              <br />
                            {comment.contents}
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />

                    <div className="row">
                      <div className="col-md-12"> </div>
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
