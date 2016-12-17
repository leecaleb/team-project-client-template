import React from 'react';
import Modal from './modal';
import {Link} from 'react-router';

export default class SearchFeedItem extends React.Component {
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
                      <img src={this.state.image} className="media-object" alt="Generic placeholder image" />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="media">
                    <div className="media-body">
                        <Link to={"/loc/" + this.state._id}> {this.state.name} </Link>
                    </div>

                    <p>{this.state.businessHours}</p>

                    <div>
                      <div className="row">
                        <Modal id = {this.state._id} spotName = {this.state.name}/>
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
    );
  }
}
