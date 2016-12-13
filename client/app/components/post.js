import React from 'react';
import {unixTimeToString} from '../util';
import {postComment} from '../server';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",

      locationid:this.props.spotIDDef

    };
  }

  handleCommentPost(e) {
    e.preventDefault();

      console.log(this.state.locationId);
        console.log(this.state.value.trim());

    var statusUpdateText = this.state.value.trim();
    var callbackFunction = (data) => {
      // setState will overwrite the 'likeCounter' field on the current
      // state, and will keep the other fields in-tact.
      // This is called a shallow merge:
      // https://facebook.github.io/react/docs/component-api.html#setstate
      this.setState({data});

    };
    if(statusUpdateText !== "") {

      postComment(4, this.state.locationid, statusUpdateText, 7, callbackFunction);

      this.setState({value: ""});
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }


  getSpotId (d){
    if(d.target.value == "3"){
      this.setState({locationid:3});
    }
    if(d.target.value == "2"){
      this.setState({locationid:2});
    }
    if(d.target.value == "1"){
      this.setState({locationid:1});
    }
    if(d.target.value == "4"){
      this.setState({locationid:4});
    }
    if(d.target.value == "5"){
      this.setState({locationid:5});
    }
    if(d.target.value == "6"){
      this.setState({locationid:6});
    }
  }


  render() {
    return (
      <div>
        <div className="row">
          <button type="button" data-toggle="modal" data-target="#myModal">
            <span className="glyphicon glyphicon-pencil"></span> Post
          </button>
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Post an Update</h4>
                </div>

                <div className="modal-body">

                  <div className="col-md-3">
                    <select id="spotId" onChange={(e) => this.getSpotId(e)}>
                      <option value="1">Library</option>
                      <option value="2">Hampshire DC</option>
                      <option value="3">Blue Wall</option>
                      <option value="4">Franklin DC</option>
                      <option value="5">Berkshire DC</option>
                      <option value="6">Recreation Center</option>

                    </select>
                  </div>
                  <div className="col-md-4">Date: {unixTimeToString(new Date().getTime())}</div>
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
                  <div className="form-group">
                    <textarea className="form-control comment"
                      rows="5"
                      placeholder="Please leave a comment..."
                      value={this.state.value}
                      onChange={(e) => this.handleChange(e)} />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default"
                    onClick={(e) => this.handleCommentPost(e)} data-dismiss="modal">
                    Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
