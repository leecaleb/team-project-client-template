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
