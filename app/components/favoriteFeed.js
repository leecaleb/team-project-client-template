import React from 'react';
import {getFavoriteSpotsIdArray} from '../server';
import {getFavoriteSpotsData} from '../server';
import PostEntry from './postEntry';

export default class FavoriteFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  render() {
    this.setState({name: this.props.name});
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

          var businessHours = getFavoriteSpotsData(cb).businessHours
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
                      <button type="button" className="btn btn-default navbar-right btn-lg"
                        data-toggle="modal" data-target="#myModal">
                        <span className="glyphicon glyphicon-arrow-down"></span>
                      </button>
                      <PostEntry name = {spotName} />
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
