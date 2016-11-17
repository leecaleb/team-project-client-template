import React from 'react';
import {postComment} from '../server';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      id:2
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
                    <select>
                      <option onChange={() => this.setState({id: 3})}>Blue Wall</option>
                      <option onChange={() => this.setState({id: 2})}>Hampshire DC</option>
                      <option onChange={() => this.setState({id: 1})}>Library</option>
                    </select>
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
