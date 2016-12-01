import React from 'react';

export default class SearchFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render() {
    return (
        <li className="media">
          <div className="media-left media-top">
            <img className="media-object" src={this.state.image} alt="Generic placeholder image" />
          </div>
          <div className="media-body">
            <h4 className="media-heading">{this.state.name}</h4>
            <p>{this.state.description}</p>
          </div>
        </li>
    );
  }
}
