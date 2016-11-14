import React from 'react';
import {getSpotData} from '../server';
import {getFeed} from '../server';
import {getUserData} from '../server';
import unixTimeToString from '../util';
export default class LocationFeed extends React.Component {




  render() {
    var i = 2
    feed = getFeed(i);
    var score = 10;
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
                    <h4>{spotdata.name}</h4>
                    <br /> 8 AM -9 AM
                  </div>
                  <div className="media-right">
                Current Average Score  {score}
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
    )
  }
}
