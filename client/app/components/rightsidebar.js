

import React from 'react';
import RightPost from './rightposts';


export default class rightSidebar extends React.Component {


  render() {
    return(
      <div className="row">
      <div className="col-md-12">
      <div className="row topspots-title">
      <div className="col-md-12">
        Top Spots
      </div>
      </div>
    <RightPost spot={Math.floor((Math.random() * 6) + 1)} />
    <RightPost spot={Math.floor((Math.random() * 6) + 1)} />
    <RightPost spot={Math.floor((Math.random() * 6) + 1)} />
    </div>
  </div>
    )
  }
}
