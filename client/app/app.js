import React from 'react';
import ReactDOM from 'react-dom';
import SearchFeed from './components/searchFeed';
import FavoriteFeed from './components/favoriteFeed';
import LeftSidebar from './components/leftsidebar';
import RightSidebar from './components/rightsidebar';
import Navbar from './components/navbar';
import LocationFeed from './components/location';
import ErrorBanner from './components/errorbanner';
import {ResetDatabase} from './database';
import { IndexRoute, Router, Route, hashHistory } from 'react-router'

class Loc extends React.Component {
  render() {
    return (

        <LocationFeed user = {"000000000000000000000004"} spot={this.props.params.id} array = {this.props.array}/>

    );
  }
}

class Main extends React.Component {
  render() {

    return <FavoriteFeed user ={"000000000000000000000004"} />;

  }
}


class App extends React.Component {
  render() {
    var queryVars = this.props.location.query;
    var searchTerm = null;
    if (queryVars && queryVars.searchTerm) {
      searchTerm = queryVars.searchTerm;
    }
    return (
      <div>
        <Navbar searchTerm={searchTerm} />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ErrorBanner />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 leftSidebar" >

              <LeftSidebar user={"000000000000000000000004"}/>

              <ResetDatabase/>
            </div>
            <div className="col-md-6">
              <SearchFeed />
              {this.props.children}
            </div>
            <div className="col-md-3 rightSidebar">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="loc/:id" component={Loc} />
    </Route>
  </Router>
),document.getElementById('main_container'));
