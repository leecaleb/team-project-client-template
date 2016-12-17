import React from 'react';
import RightPost from './rightposts';

export default class RightSidebar extends React.Component {

render() {

  var arr = ["000000000000000000000001",
   "000000000000000000000002",
   "000000000000000000000003",
   "000000000000000000000007",
   "000000000000000000000005",
   "000000000000000000000006"];
//var newarr = arr.sort(function(a,b){return b[1]-a[1]}).reverse();

var num = Math.floor((Math.random() * 5) + 0);
var id1 = arr[num];
arr.splice(num, 1);
num = Math.floor((Math.random() * 4) + 0);
var id2 = arr[num];
arr.splice(num, 1);
num = Math.floor((Math.random() * 3) + 0);
var id3 = arr[num];






    return(
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
            <div className="col-md-12">
            <div className="row topspots-title">
            <div className="col-md-12">

              Spots to Try
            </div>
            </div>
               <RightPost spot= {id1} />
               <RightPost spot= {id2} />
               <RightPost spot= {id3} />
             </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

  // getFeedData("000000000000000000000001", (feedData) => {this.setState({spot1: feedData.contents.latest_score})});
  // getTopData(1, (feedData) => {this.setState({spots: feedData, yes:true})});



  // getFeedData("000000000000000000000002", (feedData) => {this.setState({spot2: feedData.contents.latest_score})});
  // getFeedData("000000000000000000000003", (feedData) => {this.setState({spot3: feedData.contents.latest_score})});
  // getFeedData("000000000000000000000004", (feedData) => {this.setState({spot4: feedData.contents.latest_score})});
  // getFeedData("000000000000000000000005", (feedData) => {this.setState({spot5: feedData.contents.latest_score})});
  // getFeedData("000000000000000000000006", (feedData) => {this.setState({spot6: feedData.contents.latest_score})});




// var topSpots = [];
//
//
//   console.log("spots")
//   var hi = this.state.spots;
//     console.log(hi)
//   if(this.state.yes){
//     console.log(this.state.spots)
//
//       topSpots.push(
//         <div>
//         // <RightPost spot= {this.state.spots[0]._id} key =  {this.state.spot[0].comments+ this.state.spot[0].comtents.rating }/>
//         // <RightPost spot= {this.state.spots[1]._id} key = {this.state.spot[1].comment + this.state.spot[1].contents } />
//         // <RightPost spot= {this.state.spots[2]._id} key = {this.state.spot[2].comment + this.state.spot[2].comment.rating} />
//         </div>
//       )
//   }

// var arr = [
//    ["000000000000000000000001", this.state.spot1],
//    ["000000000000000000000002", this.state.spot2],
//    ["000000000000000000000003", this.state.spot3],
//    ["000000000000000000000004", this.state.spot4],
//    ["000000000000000000000005", this.state.spot5],
//    ["000000000000000000000006", this.state.spot6]
// ];
//var newarr = arr.sort(function(a,b){return b[1]-a[1]}).reverse();
