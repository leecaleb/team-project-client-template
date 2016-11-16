import React from 'react';
import ReactDOM from 'react-dom';
import SearchFeed from './components/searchFeed';
import FavoriteFeed from './components/favoriteFeed';

class App extends React.Component {
  render() {
    return (
      <div>HaHa</div>
    )
  }
}

ReactDOM.render(
  <div>
    <SearchFeed />
    <FavoriteFeed user = {1} />
  </div>,
  document.getElementById('main-feed')
);
