import React from 'react';
import {unixTimeToString} from '../util';
import {postComment} from '../server';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: "",
      comment: "",
      id: 0
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

  handleScoreChange(e) {
    e.preventDefault();
    this.setState({score: e.target.value});
  }

  handleCommentChange(e) {
    e.preventDefault();
    this.setState({comment: e.target.value});
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
                    <div className="form-group">
                      <label>Score</label>
                      <textarea className="form-control" id="scoreTextArea" rows="1"
                        value={this.state.score}
                        onChange={(e) => this.handleScoreChange(e)}></textarea>
                    </div>
                  </div>

                <div className="form-group">
                  <textarea className="form-control comment"
                    rows="5"
                    placeholder="Please leave a comment..."
                    value={this.state.comment}
                    onChange={(e) => this.handleCommentChange(e)}/>
                </div>
              </div>

              <div className="modal-footer">
                <button id="commentTextArea "type="button" className="btn btn-default" data-dismiss="modal"
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
