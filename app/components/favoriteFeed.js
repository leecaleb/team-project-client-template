import React from 'react';
import {getFavoriteSpotsIdArray} from '../server';
import {getFavoriteSpotsData} from '../server';
import Modal from './modal';
import {Link} from 'react-router';
import {resetDatabase} from '../database';
export default class FavoriteFeed extends React.Component {
  handleReset(e) {
  resetDatabase();
  e.preventDefault();

  this.setState({value: ""});
  }

  render() {


    var favoriteSpotsIdArray = getFavoriteSpotsIdArray(this.props.user)
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

          var spotName = getFavoriteSpotsData(ele).name
          var businessHours = getFavoriteSpotsData(ele).businessHours
          var index = getFavoriteSpotsData(ele)._id;

          return (
            <div>
              <li className="media">
                <a className="media-left media-top" href="#">
                  <img src="img\hamp.jpg" className="media-object" alt="Generic placeholder image" />
                </a>

                <div className="media-body">

                  <h4 className="media-heading"><Link to={"/loc/" + index}> {spotName} </Link> <span> </span>


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
