import React from 'react';
import RightPost from './rightposts';
import {getFeedData} from '../server';

export default class RightSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spot1: "",
      spot2: "",
      spot3: "",
      spot4: "",
      spot5: "",
      spot6: ""

    }
  getFeedData(1, (feedData) => {this.setState({spot1: feedData.contents.latest_score})});
  getFeedData(2, (feedData) => {this.setState({spot2: feedData.contents.latest_score})});
  getFeedData(3, (feedData) => {this.setState({spot3: feedData.contents.latest_score})});
  getFeedData(4, (feedData) => {this.setState({spot4: feedData.contents.latest_score})});
  getFeedData(5, (feedData) => {this.setState({spot5: feedData.contents.latest_score})});
  getFeedData(6, (feedData) => {this.setState({spot6: feedData.contents.latest_score})});
}
render() {
var arr = [
   [1, this.state.spot1],
   [2, this.state.spot2],
   [3, this.state.spot3],
   [4, this.state.spot4],
   [5, this.state.spot5],
   [6, this.state.spot6]
];
//var newarr = arr.sort(function(a,b){return b[1]-a[1]}).reverse();





    return(
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
            <div className="col-md-12">
            <div className="row topspots-title">
            <div className="col-md-12">

              Top Spots
            </div>
            </div>
            <RightPost spot= {arr[4][0]} />
            <RightPost spot= {arr[2][0]} />
            <RightPost spot= {arr[5][0]} />


            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
