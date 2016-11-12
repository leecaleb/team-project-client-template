import React from 'react';
import ReactDOM from 'react-dom';
import SearchFeed from './components/searchFeed';
import FavoriteFeed from './components/favoriteFeed';
//import Feed from './components/feed';
//import { IndexRoute, Router, Route, browserHistory } from 'react-router'

class LeftSidebar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <img src="img/falcon.jpg" className="profile-pic" onClick="userPicOnclick(0)" />
        </div>
        <div className="row">
          <div className="col-md-12">
            <a href="#" className="profile-info"><b> Du Bois Falcons </b></a>
            <a href="#" className="profile-info"> University of Massachusetts </a> <hr />
            <p id="selfDescription"> <span className="glyphicon glyphicon-comment"></span>
            The Peregrine Falcon is the fastest bird on earth,
            capable of diving from great heights at speeds of up to 242 miles per hour.
            It is a beautiful raptor with long, pointed wings and a long,
            slightly rounded tail.
          </p>
        </div>
      </div> <hr />

      <div className="row">
        <div className="col-md-12">
          <table className="table table-hover">
            <tbody>
              <tr>
                <td><span className="glyphicon glyphicon-user"></span> Join Since </td>
                <td>2016-10-02</td>
              </tr>
              <tr>
                <td><span className="glyphicon glyphicon-signal"></span> User Rating </td>
                <td>
                  <form className="rating">
                    <input type="radio" className="rating-input"
                      id="rating-input-1-5" name="user-rating" />
                    <label htmlFor="rating-input-1-5" className="rating-star"></label>
                    <input type="radio" className="rating-input"
                      id="rating-input-1-4" name="user-rating" />
                    <label htmlFor="rating-input-1-4" className="rating-star"></label>
                    <input type="radio" className="rating-input"
                      id="rating-input-1-3" name="user-rating" />
                    <label htmlFor="rating-input-1-3" className="rating-star"></label>
                    <input type="radio" className="rating-input"
                      id="rating-input-1-2" name="user-rating" />
                    <label htmlFor="rating-input-1-2" className="rating-star"></label>
                    <input type="radio" className="rating-input"
                      id="rating-input-1-1" name="user-rating" />
                    <label htmlFor="rating-input-1-1" className="rating-star"></label>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <button type="button" className="btn btn-default btn-post" onClick="btnPostOnclick(0)">
          <span className="glyphicon glyphicon-pencil"></span> Post
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <LeftSidebar />,
  document.getElementById('leftSidebar')
);

class Search extends React.Component {
  render() {
    return (
      <div>Haha</div>
    )
  }
}

ReactDOM.render(
  <div>
    <SearchFeed />
    <FavoriteFeed />
  </div>,
  document.getElementById('main-feed')
);
