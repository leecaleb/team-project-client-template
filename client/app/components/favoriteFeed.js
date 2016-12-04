import React from 'react';
import {getFavoriteSpotsArray} from '../server';
import {getFavoriteSpotsData} from '../server';
import {getUserData} from '../server';
import Modal from './modal';
import {Link} from 'react-router';
import {resetDatabase} from '../database';
import {readDocument} from '../database';
export default class FavoriteFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    getUserData(this.props.user, (userData) => {this.setState(userData.favoriteSpots)});
  }

// onClick(postContents) {
//     // Send to server.
//     // We could use geolocation to get a location, but let's fix it to Amherst
//     // for now.
//     postStatusUpdate(4, "Amherst, MA", postContents, () => {
//       // Database is now updated. Refresh the feed.
//       this.refresh();
//     });
//   }

handleClick(e) {
  e.preventDefault();
  this.setState({value: ""});
}

handleReset(e) {
  resetDatabase();
  e.preventDefault();
  this.setState({value: ""});
}


  render() {
    var favoriteSpotsIdArray = this.state;
    return (
      <div className="bot">
        <div>
          <h4>My favorite spots
          <span> </span><span className="glyphicon glyphicon-ok"></span>
          </h4>
          <button type="button" onClick={(reset) => this.handleReset(reset)}>
             ResetDB
          </button>
        </div>

        <hr />

      <ul className="media-list">

        {favoriteSpotsIdArray.map((ele) => {
          var FavoriteSpotsData = readDocument('spots', ele);
          var spotName = FavoriteSpotsData.name
          var businessHours = FavoriteSpotsData.businessHours
          var index = FavoriteSpotsData._id;

          return (
            <div key = {ele}>
              <li className="media">
                <a className="media-left media-top" href="#">
                  <img src="img\hamp.jpg" className="media-object" alt="Generic placeholder image" />
                </a>

                <div className="media-body">

                  <h4 className="media-heading" value={index}><Link to={"/loc/" + index}> {spotName} </Link> <span> </span>



                    <span className="glyphicon glyphicon-fire"></span> <span> </span>
                    <span className="glyphicon glyphicon-fire"></span>
                  </h4>

                  <p>{businessHours}</p>

                  <div>
                    <div className="row">
                      {/*
                      <button type="button" className="btn btn-default navbar-right btn-lg"
                        data-toggle="modal" data-target= {"#"+spotName}>
                        <span className="glyphicon glyphicon-arrow-down"></span>
                      </button>
                      <button type="button" className="btn btn-default navbar-right btn-lg"
                        data-toggle="modal" data-target= {"#"+spotName}>
                        <span className="glyphicon glyphicon-arrow-up"></span>
                      </button>
                      */}

                      <button type="button" data-toggle="modal" data-target={'#' + ele}>
                        <span className="glyphicon glyphicon-pencil"></span> Post
                      </button>

                      <Modal id = {ele} spotName = {spotName}/>
                    </div>
                  </div>

                </div>

              </li>
              <hr />
            </div>
          );
        })}
        </ul>
      </div>
    )
  }
}
