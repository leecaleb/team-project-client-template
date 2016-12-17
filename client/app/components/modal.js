import React from 'react';
import {unixTimeToString} from '../util';
import {postComment} from '../server';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      score: "",
      comment: "",
      id: 0
=======
      value: "",
      score: ""
>>>>>>> origin
    };
  }

  handleCommentPost(text, score) {
    postComment("000000000000000000000004", this.props.spot, text, score, (updatedFeedItem) => {
      this.setState({feed: updatedFeedItem});
    });
  }

  handleButton(e) {
    e.preventDefault();
    var text = this.state.value.trim();
    var statusUpdateScore = this.state.score.trim();
    postComment("000000000000000000000004", this.props.spot, text, statusUpdateScore, (updatedFeedItem) => {
      this.setState({feed: updatedFeedItem});
    });
    this.setState({value: ""});
    this.setState({score: ""});
  }

  handleScoreChange(e) {
    e.preventDefault();
    this.setState({score: e.target.value});
  }

  handleCommentChange(e) {
    e.preventDefault();
    this.setState({comment: e.target.value});
  }

  handleScoreChange(e) {
    e.preventDefault();
    this.setState({score: e.target.value});
  }

  render() {
    return(
      <div>
        <div id= {this.props.id} className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Post an Update</h4>
              </div>

              <div className="modal-body">
                <div className="col-md-3">
                  <p> {this.props.spotName} </p>
                </div>

                <div className="col-md-4">Date: {unixTimeToString(new Date().getTime())}</div>
<<<<<<< HEAD

                  <div className="col-md-5">
                    <div className="form-group">
                      <label>Score</label>
                      <textarea className="form-control" id="scoreTextArea" rows="1"
                        value={this.state.score}
                        onChange={(e) => this.handleScoreChange(e)}></textarea>
                    </div>
                  </div>
=======
                <div className="col-md-5">
                  <textarea className="form-control" rows="1" placeholder="Please give a rating!"
                    value= {this.state.score}
                    onChange={(e) => this.handleScoreChange(e)}/>
                </div>
>>>>>>> origin

                <div className="form-group">
                  <textarea className="form-control comment"
                    rows="5"
                    placeholder="Please leave a comment..."
<<<<<<< HEAD
                    value={this.state.comment}
                    onChange={(e) => this.handleCommentChange(e)}/>
=======
                    value= {this.state.value}
                    onChange={(e) => this.handleChange(e)}/>
>>>>>>> origin
                </div>
              </div>

              <div className="modal-footer">
<<<<<<< HEAD
                <button id="commentTextArea "type="button" className="btn btn-default" data-dismiss="modal"
                  onClick={(e) => this.handleCommentPost(e)}>
=======
                <button type="button" className="btn btn-default" data-dismiss="modal"
                  onClick={(e) => this.handleButton(e)}>
>>>>>>> origin
                  Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
