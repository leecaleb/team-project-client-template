import React from 'react';
import Modal from './modal';
import {getUserData} from '../server';

export default class LeftSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    getUserData(this.props.user, (userData) => {this.setState(userData)});
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <img src="img/falcon.jpg" className="profile-pic" data-toggle="modal" data-target="#userPicModal"/>
              <div className="modal fade" id="userPicModal">
                <div className="row">
                  <div className="col-md-12">
                    <img src="img/falcon.jpg" data-dismiss="modal" id="userPic"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="profile-info"><b> {this.state.name} </b></p>
                <p className="profile-info"> {this.state.institution} </p> <hr />
                <p id="selfDescription"> <span className="glyphicon glyphicon-comment"></span>
                  {this.state.bio}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <td><span className="glyphicon glyphicon-user"></span> Member Since </td>
                      <td>{this.state.joinDate}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">

                  <Modal id = {this.state._id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
