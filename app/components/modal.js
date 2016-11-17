import React from 'react';

export default class Modal extends React.Component {

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
                  <p>{this.props.id}</p>
                </div>

                <div className="col-md-4">"11/11/-2016"</div>

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
                    placeholder="Please leave a comment..." />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">
                  Submit</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
