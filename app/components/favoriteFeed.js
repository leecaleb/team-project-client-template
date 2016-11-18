import React from 'react';
import {getFavoriteSpotsIdArray} from '../server';
import {getFavoriteSpotsData} from '../server';
import Modal from './modal';

export default class FavoriteFeed extends React.Component {

  render() {

    var favoriteSpotsIdArray = getFavoriteSpotsIdArray(this.props.user)
    return (
      <div className="bot">
        <div>
          <h4>My favorate spots
          <span> </span><span className="glyphicon glyphicon-ok"></span>
          </h4>
        </div>

        <hr />

      <ul className="media-list">

        {favoriteSpotsIdArray.map((ele) => {

          var spotName = getFavoriteSpotsData(ele).name

          var businessHours = getFavoriteSpotsData(ele).businessHours

          var id_ = "#" + spotName

          return (
            <div>
              <li className="media">
                <a className="media-left media-top" href="#">
                  <img src="img\hamp.jpg" className="media-object" alt="Generic placeholder image" />
                </a>

                <div className="media-body">
                  <h4 className="media-heading"> {spotName} <span> </span>
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

                      <button type="button" data-toggle="modal" data-target={id_}>
                        <span className="glyphicon glyphicon-pencil"></span> Post
                      </button>

                      <Modal id = {spotName}/>
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
