import React from 'react';
import ReactDOM from 'react-dom';
import SearchFeed from './components/searchFeed';
import FavoriteFeed from './components/favoriteFeed';

class Search extends React.Component {
  render() {
    return (
      <div>Haha</div>
    )
  }
}

ReactDOM.render(
  <div>
    <SearchFeed />
    <FavoriteFeed />
  </div>,
  document.getElementById('main-feed')
);
