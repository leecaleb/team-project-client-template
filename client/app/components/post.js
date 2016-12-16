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
console.log(this.state.locationid);
console.log(statusUpdateText);
      postComment("000000000000000000000004", this.state.locationid, statusUpdateText, 7, callbackFunction);

      this.setState({value: ""});
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }


  getSpotId (d){
    if(d.target.value == "000000000000000000000003"){
      this.setState({locationid:"000000000000000000000003"});
    }
    if(d.target.value == "000000000000000000000002"){
      this.setState({locationid:"000000000000000000000002"});
    }
    if(d.target.value == "000000000000000000000001"){
      this.setState({locationid:"000000000000000000000001"});
    }
    if(d.target.value == "000000000000000000000004"){
      this.setState({locationid:"000000000000000000000004"});
    }
    if(d.target.value == "000000000000000000000005"{
      this.setState({locationid:"000000000000000000000005"});
    }
    if(d.target.value == "000000000000000000000006"){
      this.setState({locationid:"000000000000000000000006"});
    }
  }


  render() {
    return (
      <div>
        <div className="row">
          <button className="btn-default" type="button" data-toggle="modal" data-target="#myModal">
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
                      <option value="000000000000000000000001">Library</option>
                      <option value="000000000000000000000002">Hampshire DC</option>
                      <option value="000000000000000000000003">Blue Wall</option>
                      <option value="000000000000000000000004">Franklin DC</option>
                      <option value="000000000000000000000005">Berkshire DC</option>
                      <option value="000000000000000000000006">Recreation Center</option>

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
