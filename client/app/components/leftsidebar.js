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
              <img src="img/falcon.jpg" className="profile-pic" />
            </div>
            <div className="row">
              <div className="col-md-12">
                <a href="#" className="profile-info"><b> {this.state.name} </b></a>
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
