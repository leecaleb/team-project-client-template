import React from 'react';
import ReactDOM from 'react-dom';
import SearchFeed from './components/searchFeed';
import FavoriteFeed from './components/favoriteFeed';
import LeftSidebar from './components/leftsidebar';
import RightSidebar from './components/rightsidebar';
import Navbar from './components/navbar';
//import { IndexRoute, Router, Route, browserHistory } from 'react-router'

class Search extends React.Component {
  render() {
    return (
      <div>Haha</div>
    )
  }
}

ReactDOM.render(
  <Navbar />,
  document.getElementById('navbar')
);

ReactDOM.render(
  <div>
    <SearchFeed />
    <FavoriteFeed />
  </div>,
  document.getElementById('main-feed')
);

ReactDOM.render(
  <RightSidebar />,
  document.getElementById('rightSidebar')
);

ReactDOM.render(
  <LeftSidebar user={4} />,
  document.getElementById('leftSidebar')
);
