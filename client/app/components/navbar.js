import React from 'react';

export default class Navbar extends React.Component {
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
          <a className="navbar-brand" href="/">WebApp</a>
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
                </ul>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}
