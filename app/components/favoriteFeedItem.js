import React from 'react';
import FavoriteStatusUpdate from './FavoriteStatusUpdate'

export default class FavoriteFeedItem extends React.Component {
  constructor(props) {
    super(props);
    // The FeedItem's initial state is what the Feed passed to us.
    this.state = props.data;
  }

  render() {
    var data = this.state;
    var contents;
    switch(data.type) {
      case "statusUpdate":
      contents = (
        <FavoriteStatusUpdate key={data._id}
              author={data.contents.author}
              postDate={data.contents.postDate}
              location={data.contents.location}>
              {data.contents.contents.split("\n").map((line, i) => {
                return (
                  <p key = {"line" + i}> {line} </p>
                );
              })}
        </FavoriteStatusUpdate>
      );
      break;
    default:
    throw new Error("Unknown FeedItem: " + data.type);
  }

  return (
    <div>
      {contents}
    </div>
    );
  }
}
