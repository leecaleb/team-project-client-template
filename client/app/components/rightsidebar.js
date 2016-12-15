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

  getFeedData("000000000000000000000001", (feedData) => {this.setState({spot1: feedData.contents.latest_score})});
  getFeedData("000000000000000000000002", (feedData) => {this.setState({spot2: feedData.contents.latest_score})});
  getFeedData("000000000000000000000003", (feedData) => {this.setState({spot3: feedData.contents.latest_score})});
  getFeedData("000000000000000000000004", (feedData) => {this.setState({spot4: feedData.contents.latest_score})});
  getFeedData("000000000000000000000005", (feedData) => {this.setState({spot5: feedData.contents.latest_score})});
  getFeedData("000000000000000000000006", (feedData) => {this.setState({spot6: feedData.contents.latest_score})});

}
render() {
var arr = [
   ["000000000000000000000001", this.state.spot1],
   ["000000000000000000000002", this.state.spot2],
   ["000000000000000000000003", this.state.spot3],
   ["000000000000000000000004", this.state.spot4],
   ["000000000000000000000005", this.state.spot5],
   ["000000000000000000000006", this.state.spot6]
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

            <RightPost spot= {arr["000000000000000000000004"]["000000000000000000000000"]} />
            <RightPost spot= {arr["000000000000000000000002"]["000000000000000000000000"]} />
            <RightPost spot= {arr["000000000000000000000005"]["000000000000000000000000"]} />



            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
