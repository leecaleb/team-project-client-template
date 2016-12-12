import React from 'react';
import {unixTimeToString} from '../util';
import {postComment} from '../server';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      id:0
    };
  }

  handleCommentPost(e) {
    e.preventDefault();
    var statusUpdateText = this.state.value.trim();
    if(statusUpdateText !== "") {
      postComment(this.state.id, 4, statusUpdateText, 7);
      this.setState({value: ""});
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  getSpotId (d){
    if(d.target.value == "3"){
      this.setState({id:3});
    }
    if(d.target.value == "2"){
      this.setState({id:2});
    }
    if(d.target.value == "1"){
      this.setState({id:1});
    }
  }

  render() {
    return(
      <div>
        <div id={this.props.id} className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Post an Update</h4>
              </div>

              <div className="modal-body">
                <div className="col-md-3">
                  <p>{this.props.spotName}</p>
                </div>

                <div className="col-md-4">Date: {unixTimeToString(new Date().getTime())}</div>

                <div className="col-md-5">
                  <div className="pull-right">
                    Place rating:
                    <form className="rating">
                      <input type="radio" className="rating-input"
                        id="rating-input-1-10" name="user-rating" />
                      <label htmlFor="rating-input-1-10" className="rating-star"></label>
                      <input type="radio" className="rating-input"
                        id="rating-input-1-9" name="user-rating" />
                      <label htmlFor="rating-input-1-9" className="rating-star"></label>
                      <input type="radio" className="rating-input"
                        id="rating-input-1-8" name="user-rating" />
                      <label htmlFor="rating-input-1-8" className="rating-star"></label>
                      <input type="radio" className="rating-input"
                        id="rating-input-1-7" name="user-rating" />
                      <label htmlFor="rating-input-1-7" className="rating-star"></label>
                      <input type="radio" className="rating-input"
                        id="rating-input-1-6" name="user-rating" />
                      <label htmlFor="rating-input-1-6" className="rating-star"></label>
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
                    </div>
                  </div>





                <div className="form-group">
                  <textarea className="form-control comment"
                    rows="5"
                    placeholder="Please leave a comment..."
                    value={this.state.value}
                    onChange={(e) => this.handleChange(e)}/>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal"
                  onClick={(e) => this.handleCommentPost(e)}>
                  Submit</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
