import React from 'react';
import {readDocument} from './server'

export default class FavoriteFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render() {

    return (
      <div>
        <li className="media">
          <a className="media-left media-top" href="#">
            <img src="img\hamp.jpg" className="media-object" alt="Generic placeholder image" />
          </a>
          <div className="media-body">
            <h4 className="media-heading"> {this.state.name}
            <span className="glyphicon glyphicon-fire"></span>
            <span className="glyphicon glyphicon-fire"></span>
            <span className="glyphicon glyphicon-fire"></span>
            </h4>
          </div>
        </li>

        <hr />

        </div>
    );
  }
}
