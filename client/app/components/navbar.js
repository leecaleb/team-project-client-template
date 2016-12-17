import React from 'react';
import {saveEditProfile} from '../server'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      firstN: "",
      lastN: "",
      about: ""
    };
  }

  handleDisplayN(e) {
    e.preventDefault();
    this.setState({displayName: e.target.value});
  }

  handleFN(e) {
    e.preventDefault();
    this.setState({firstN: e.target.value});
  }

  handleLN(e) {
    e.preventDefault();
    this.setState({lastN: e.target.value});
  }

  handleAbout(e) {
    e.preventDefault();
    this.setState({about: e.target.value});
  }

  handleSaveChanges(e) {
    e.preventDefault();
    if(this.state.displayName !== ""){
      saveEditProfile(4, this.state.displayName, this.state.about);
      this.setState({displayName: ""});
      this.setState({firstN: ""});
      this.setState({lastN: ""});
      this.setState({about: ""});
    }
  }


  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
       <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Amherst Discovery</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
                <li className="dropdown pull-right">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
                    <span className="glyphicon glyphicon-menu-hamburger burger-menu"></span>
                  </a>
                  <ul className="dropdown-menu" data-toggle="modal" data-target="#profileModal">
                    <li><a href="#">Edit profile</a></li>
                  </ul>
                </li>
              <div className="modal fade" id="profileModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4>Edit your Profile<span className="label label-default"></span></h4>
                    </div>


                    <div className="modal-body">
                      <div className="row">
                      <div className="col-md-4">
                        <img src="img/falcon.jpg" className="img-circle center-block" width="220" height="220" />
                        <button className="btn btn-default btn-xs profile-btn center-block" type="button">
                          <span className="glyphicon glyphicon-camera"> Edit</span>
                        </button>
                      </div>
                      <div className="col-md-8">
                        <input type="text" size="76"
                          placeholder="Display Username"
                          value={this.state.value}
                          onChange={(e) => this.handleDisplayN(e)} /><br /><br/>
                        <div className="row">
                          <div className="col-md-6">
                            <input className="text" size="33"
                              placeholder="First Name" align="left"
                              value={this.state.value}
                              onChange={(e) => this.handleFN(e)} />
                          </div>
                          <div className="col-md-6">
                            <input className="text" size="33"
                              placeholder="Last Name" align="right"
                              value={this.state.value}
                              onChange={(e) => this.handleLN(e)}/>
                          </div>
                        </div><br />
                        <textarea className="form-control"
                          rows="5" placeholder="About"
                          value={this.state.value}
                          onChange={(e) => this.handleAbout(e)}></textarea><br />
                      </div>
                    </div>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-default"
                        onClick={(e) => this.handleSaveChanges(e)} data-dismiss="modal">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}
