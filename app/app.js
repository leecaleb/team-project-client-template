import React from 'react';
import ReactDOM from 'react-dom';
import SearchFeed from './components/searchFeed';
import FavoriteFeed from './components/favoriteFeed';
//import Feed from './components/feed';
//import { IndexRoute, Router, Route, browserHistory } from 'react-router'

class Navbar extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">WebApp</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
                <li className="dropdown pull-right">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
                  <span className="glyphicon glyphicon-menu-hamburger burger-menu"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Edit profile</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Sign out</a></li>
                </ul>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

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

class RightSidebar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="row topspots-title">
              <div className="col-md-12">
                Top Spots
              </div>
            </div>
            <div className="row topspots-pics">
              <div className="col-md-12">
                <img src="img/berk.jpg"/>
              </div>
            </div>
            <div className="row topspots-desc">
              <div className="col-md-12">
                <a href="#">Berkshire Dining Commons</a>
                <br />
                Current Status: Busy
                <br />
                Hours of Operation:
                <br />
                Monday - Sunday
                <br />
                11:00 AM - 11:59 PM
                <br />
                <div className="topspots-topposts">"Way to crowded here, but you'll eat here and you'll like it!"</div><div className="topspots-username">- FoodLover6969</div>
              </div>
            </div>
            <div className="row topspots-pics">
              <div className="col-md-12">
                <img src="img/frank.jpg"/>
              </div>
            </div>
            <div className="row topspots-desc">
              <div className="col-md-12">
                <a href="#">Franklin Dining Commons</a>
                <br />
                Current Status: Empty
                <br />
                Hours of Operation:
                <br />
                Sunday - Thursday
                <br />
                7:00 AM - 10:00 PM
                <br />
                Friday - Saturday
                <br />
                7:00 AM - 9:00 PM
                <br />
                <div className="topspots-topposts">"Nobody is here right now and there is a reason for that. It's a really terrible place to eat. Avoid at all costs."</div><div className="topspots-username">- FriedOysterKid</div>
              </div>
            </div>
            <div className="row topspots-pics">
              <div className="col-md-12">
                <img src="img/bluewall.jpg"/>
              </div>
            </div>
            <div className="row topspots-desc">
              <div className="col-md-12">
                <a href="#">Blue Wall</a>
                <br />
                Current Status: Very Busy
                <br />
                Hours of Operation:
                <br />
                Monday - Sunday
                <br />
                10:30 AM - 9:00 PM
                <br />
                <div className="topspots-topposts">"WAAAAYYYY 2 crowded here."</div><div className="topspots-username">- MyDadForgotMyBirthday74</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
      <div>Haha</div>
    )
  }
}

ReactDOM.render(
  <Navbar />,
  document.getElementById('navbar')
);

ReactDOM.render(
  <div>
    <SearchFeed />
    <FavoriteFeed />
  </div>,
  document.getElementById('main-feed')
);

ReactDOM.render(
  <RightSidebar />,
  document.getElementById('rightSidebar')
);

ReactDOM.render(
  <LeftSidebar />,
  document.getElementById('leftSidebar')
);
