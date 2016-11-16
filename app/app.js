import React from 'react';
import ReactDOM from 'react-dom';
import SearchFeed from './components/searchFeed';
import FavoriteFeed from './components/favoriteFeed';
import LeftSidebar from './components/leftsidebar';
import RightSidebar from './components/rightsidebar';
import Navbar from './components/navbar';
import LocationFeed from './components/location';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
//import { IndexRoute, Router, Route, browserHistory } from 'react-router'

//
// class Search extends React.Component {
//   render() {
//     return (
//
//       <p>This is the profile page for a user
//       </p>
//       );
//   }
// }

// var App = React.createClass({
//     render: function() {
//         return (
//         <Navbar />
//         )
//     }
// });
// ReactDOM.render((
//   <Router>
//     <Route path="" component={App} />
//       <Route path="/1" component={App} />
//      <Route path="/helpusplease" component={App} />
//   </Router>
// ), document.getElementById('root'));
// // ReactDOM.render((
// // <Router history={browserHistory}>
// // <Route path="/" component={Navbar}>
// // {/* Show the Feed at / */}
// // <IndexRoute component={Search} />
// // <Route path="profile" component={Search} />
// // </Route>
// // </Router>
// // ),document.getElementById('fb-feed'));
// //
// //
ReactDOM.render(
  <Navbar />,
  document.getElementById('navbar')
);


// this changes to render just Location for a location's page
ReactDOM.render(
  <div>
    <SearchFeed/>
    <FavoriteFeed user = {1} />
  </div>,
  document.getElementById('main-feed')
);


ReactDOM.render(
  <RightSidebar user={4} />,
  document.getElementById('rightSidebar')
);
ReactDOM.render(
  <LeftSidebar user={4} />,
  document.getElementById('leftSidebar')
);
