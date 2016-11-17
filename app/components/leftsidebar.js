import React from 'react';
import PostEntry from './postEntry';
import {getUserData} from '../server';
// import StatusUpdate from './statusUpdate';

export default class LeftSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:""
    }
  }

  handlePost(e) {
    e.preventDefault();
    var statusUpdateText = this.state.value.trim();
    if(statusUpdateText !== "") {
      this.props.onPost(statusUpdateText);
      this.setState({value: ""});
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div>
        <div className="row">
          <img src="img/falcon.jpg" className="profile-pic" onClick="userPicOnclick(0)" />
        </div>
        <div className="row">
          <div className="col-md-12">
            <a href="#" className="profile-info"><b> {getUserData(this.props.user).name} </b></a>
            <p className="profile-info"> {getUserData(this.props.user).institution} </p> <hr />
            <p id="selfDescription"> <span className="glyphicon glyphicon-comment"></span>
              {getUserData(this.props.user).bio}
            </p>
          </div>
        </div> <hr />

      <div className="row">
        <div className="col-md-12">
          <table className="table table-hover">
            <tbody>
              <tr>
                <td><span className="glyphicon glyphicon-user"></span> Join Since </td>
                <td>{getUserData(this.props.user).joinDate}</td>
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

</div>
    );
  }
}
