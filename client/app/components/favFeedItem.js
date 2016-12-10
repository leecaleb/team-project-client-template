import React from 'react';
import Modal from './modal';
import {Link} from 'react-router';

export default class FavFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render() {
    return (
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-12">
                    <div className="col-md-4">
                      <div className="media">
                        <div className="media-left media-top">
                          <img src={this.state.spot.image} className="media-object" alt="Generic placeholder image" />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="media">
                        <div className="media-body">
                            <Link to={"/loc/" + this.state.spot._id}> {this.state.spot.name} </Link>
                            <br /><span className="glyphicon glyphicon-fire"></span>
                            <span className="glyphicon glyphicon-fire"></span>
                        </div>

                        <p>{this.state.spot.businessHours}</p>

                        <div>
                          <div className="row">
                            <button type="button" data-toggle="modal" data-target={'#' + this.state._id}>
                              <span className="glyphicon glyphicon-pencil"></span> Post
                            </button>

                            <Modal id = {this.state._id} spotName = {this.state.spot.name}/>
                          </div>
                        </div>

                    </div>
                  </div>

                    <div className="col-md-2">

                    </div>
                </div>
              </div>
            </div>
          </div>
    )
  }
}
