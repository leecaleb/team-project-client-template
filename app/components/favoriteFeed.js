import React from 'react';
import {getFavoriteSpotsIdArray} from '../server';
import {getFavoriteSpotsData} from '../server';

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

        {favoriteSpotsIdArray.map((cb) => {
          var spotName = getFavoriteSpotsData(cb).name
          return (
            <div>
              <li className="media">
                <a className="media-left media-top" href="#">
                  <img src="img\hamp.jpg" className="media-object" alt="Generic placeholder image" />
                </a>
                <div className="media-body">
                  <h4 className="media-heading"> {spotName} <span> </span>
                    <span className="glyphicon glyphicon-fire"></span>
                    <span className="glyphicon glyphicon-fire"></span>
                  </h4>
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
