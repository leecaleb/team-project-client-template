import React from 'react';
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

      <div className="row">
        <button type="button" data-toggle="modal" data-target="#myModal">
          <span className="glyphicon glyphicon-pencil"></span> Post
        </button>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Post an Update!</h4>
              </div>

              <div className="modal-body">
                <div className="col-md-3">
                  <div className="dropdown">
                  <button className="btn btn-default dropdown-toggle"
                    type="button" id="menu1" data-toggle="dropdown">Place visited:
                    <span className="caret"></span></button>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                      // <li role="presentation"><a onClick={() => this.setState({spots: "3"})}>Blue Wall</a></li>
                      // <li role="presentation"><a onClick={() => this.setState({spots: "2"})}>Hampshire DC</a></li>
                      // <li role="presentation"><a onClick={() => this.setState({spots: "1"})}>Library</a></li>
                      <li role="presentation"><a>Blue Wall</a></li>
                      <li role="presentation"><a>Hampshire DC</a></li>
                      <li role="presentation"><a>Library</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">Date: {this.state.postDate}</div>
                <div className="col-md-5">
                  <div className="pull-right">
                    Place rating:
                    <form className="rating">
                      <input type="radio" className="rating-input"
                        id="rating-input-2-5" name="user-rating"/>
                      <label htmlFor="rating-input-2-5" className="rating-star"></label>
                      <input type="radio" className="rating-input"
                        id="rating-input-2-4" name="user-rating"/>
                      <label htmlFor="rating-input-2-4" className="rating-star"></label>
                      <input type="radio" className="rating-input"
                        id="rating-input-2-3" name="user-rating"/>
                      <label htmlFor="rating-input-2-3" className="rating-star"></label>
                      <input type="radio" className="rating-input"
                        id="rating-input-2-2" name="user-rating"/>
                      <label htmlFor="rating-input-2-2" className="rating-star"></label>
                      <input type="radio" className="rating-input"
                        id="rating-input-2-1" name="user-rating"/>
                      <label htmlFor="rating-input-2-1" className="rating-star"></label>
                        <input type="radio" className="rating-input"
                          id="rating-input-2-5" name="user-rating"/>
                        <label htmlFor="rating-input-2-5" className="rating-star"></label>
                        <input type="radio" className="rating-input"
                          id="rating-input-2-4" name="user-rating"/>
                        <label htmlFor="rating-input-2-4" className="rating-star"></label>
                        <input type="radio" className="rating-input"
                          id="rating-input-2-3" name="user-rating"/>
                        <label htmlFor="rating-input-2-3" className="rating-star"></label>
                        <input type="radio" className="rating-input"
                          id="rating-input-2-2" name="user-rating"/>
                        <label htmlFor="rating-input-2-2" className="rating-star"></label>
                        <input type="radio" className="rating-input"
                          id="rating-input-2-1" name="user-rating"/>
                        <label htmlFor="rating-input-2-1" className="rating-star"></label>
                    </form>
                  </div>
                </div>
                <div>
                  <textarea
                    className="form-control comment"
                    rows="5"
                    placeholder="Please leave a comment..."
                    value= {this.state.value}
                    onChange={(e) => this.handleChange(e)}></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal"
                  onClick={(e) => this.handlePost(e)}
                  >Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
