import React from 'react';

export default class FavoriteFeedItem extends React.Component {

  render() {
    return (
      <div className="bot">
        <div>
            <h4>My favorate spots
            <span> </span><span className="glyphicon glyphicon-ok"></span>
            </h4>
        </div>

        <hr />

        <ul className="media-list">
          <li className="media">
            <a className="media-left media-top" href="#">
              <img src="img\hamp.jpg" className="media-object" alt="Generic placeholder image" />
            </a>
            <div className="media-body">
              <h4 className="media-heading">Hampshire Dining Common
              <span className="glyphicon glyphicon-fire"></span>
              <span className="glyphicon glyphicon-fire"></span>
              <span className="glyphicon glyphicon-fire"></span>
              </h4>
              {/*
              <div>
                <a href="/dev/images/1.png">
                  <img src="img\dog.jpg" alt="Generic placeholder image" />
                </a>
                <a href="/dev/images/2.png">
                  <img src="img\dog.jpg" alt="Generic placeholder image" />
                </a>
                <a href="/dev/images/2.png">
                  <img src="img\dog.jpg" alt="Generic placeholder image" />
                </a>
                <button type="button" className="btn btn-default navbar-right btn-lg">
                  <span className="glyphicon glyphicon-arrow-down"></span>
                </button>
                <button type="button" className="btn btn-default navbar-right btn-lg">
                  <span className="glyphicon glyphicon-arrow-up"></span>
                </button>
              </div>
              */}
            </div>
          </li>

          <hr />

          <li className="media">
            <a className="media-left media-top" href="#">
              <img className="media-object" src="img\library.jpeg" alt="Generic placeholder image" />
            </a>
            <div className="media-body">
              <h4 className="media-heading">W. E. B. Du Bois Library
                <span className="glyphicon glyphicon-fire"></span>
                <span className="glyphicon glyphicon-fire"></span>
              </h4>
              {/*
              <div>
                <a href="/dev/images/1.png">
                  <img className="" src="img\dog.jpg" alt="Generic placeholder image" />
                </a>
                <a href="/dev/images/2.png">
                  <img className="" src="img\dog.jpg" alt="Generic placeholder image" />
                </a>
                <button type="button" className="btn btn-default navbar-right btn-lg">
                  <span className="glyphicon glyphicon-arrow-down"></span>
                </button>
                <button type="button" className="btn btn-default navbar-right btn-lg">
                  <span className="glyphicon glyphicon-arrow-up"></span>
                </button>
              </div>
              */}
            </div>
          </li>

          <hr />

          <li className="media">
            <a className="media-left media-top" href="#">
              <img className="media-object" src="img\gym.jpeg" alt="Generic placeholder image" />
            </a>
            <div className="media-body">
              <h4 className="media-heading">Recreation Center Gym
                <span className="glyphicon glyphicon-leaf"></span>
              </h4>
              {/*
              <div>
                <a href="/dev/images/1.png">
                  <img className="" src="img\dog.jpg" alt="Generic placeholder image" />
                </a>
                <a href="/dev/images/2.png">
                  <img className="" src="img\dog.jpg" alt="Generic placeholder image" />
                </a>
                <a href="/dev/images/2.png">
                  <img className="" src="img\dog.jpg" alt="Generic placeholder image" />
                </a>
                <button type="button" className="btn btn-default navbar-right btn-lg">
                  <span className="glyphicon glyphicon-arrow-down"></span>
                </button>
                <button type="button" className="btn btn-default navbar-right btn-lg">
                  <span className="glyphicon glyphicon-arrow-up"></span>
                </button>
              </div>
              */}
            </div>
          </li>

          <hr />

          <li className="media">
            <a className="media-left media-top" href="#">
              <img className="media-object" src="img\hamp.jpg" alt="Generic placeholder image" />
            </a>
            <div className="media-body">
              <h4 className="media-heading">Worcester Dining Common
                <span className="glyphicon glyphicon-leaf"></span>
                <span className="glyphicon glyphicon-leaf"></span>
                <span className="glyphicon glyphicon-leaf"></span>
              </h4>
              {/*
              <div>
                <a href="/dev/images/1.png">
                  <img className="" src="img\dog.jpg" alt="Generic placeholder image" />
                </a>
                <a href="/dev/images/2.png">
                  <img className="" src="img\dog.jpg" alt="Generic placeholder image" />
                </a>
                <button type="button" className="btn btn-default navbar-right btn-lg">
                  <span className="glyphicon glyphicon-arrow-down"></span>
                </button>
                <button type="button" className="btn btn-default navbar-right btn-lg">
                  <span className="glyphicon glyphicon-arrow-up"></span>
                </button>
              </div>
              */}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
