import React from 'react';

export default class PostEntry extends React.Component {

  render() {

    return(
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Post an Update!</h4>
            </div>

            <div className="modal-body">
              <div className="col-md-3">

              {/*Changed by Shiyan here*/}
                <p>{this.props.name}</p>

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
              <div className="col-md-4">Date: {this.props.postDate}</div>
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
                  value= {this.props.value}
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
    );
  }
}
