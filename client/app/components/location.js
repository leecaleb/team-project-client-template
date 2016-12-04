import React from 'react';
import {getSpotData} from '../server';
import {getFeed} from '../server';
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
      value: props.array
    };
  }

  //getUserData(this.props.user, (userData) => {this.setState(userData)});

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

    <div>
      <div classNameName="col-md-6">
        <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <Link to={"/"}> Back to Front Page </Link>
              </div>
            </div>
        </div>
      </div>

      <div classNameName="col-md-6">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-12">
                <div className="media">
                  <div className="media-left media-top">

                  </div>
                  <div className="media-body">
                    <br /> 8 AM -9 AM
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
              {spotData.description}
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
