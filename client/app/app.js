import React from 'react';
import ReactDOM from 'react-dom';
import SearchEntry from './components/searchEntry';
import FavoriteFeed from './components/favoriteFeed';
import LeftSidebar from './components/leftsidebar';
import RightSidebar from './components/rightsidebar';
import Navbar from './components/navbar';
import LocationFeed from './components/location';
import ErrorBanner from './components/errorbanner';
import {ResetDatabase} from './database';
import {hideElement} from './util';
import {searchForSpot} from './server';
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import SearchFeedItem from './components/searchFeedItem'
import Footer from './components/footer.js';

class Loc extends React.Component {
  render() {
    return (

        <LocationFeed user = {"000000000000000000000004"} spot={this.props.params.id}/>

    );
  }
}

class Main extends React.Component {
  render() {

    return <FavoriteFeed user ={"000000000000000000000004"} />;

  }
}

class SearchResultsPage extends React.Component {
  getSearchTerm() {
    // If there's no query input to this page (e.g. /foo instead of /foo?bar=4),
    // query may be undefined. We have to check for this, otherwise
    // JavaScript will throw an exception and die!
    var queryVars = this.props.location.query;
    var searchTerm = "";
    if (queryVars && queryVars.q) {
      searchTerm = queryVars.q;
      // Remove extraneous whitespace.
      searchTerm.trim();
    }
    return searchTerm;
  }

  render() {
    var searchTerm = this.getSearchTerm();
    // By using the searchTerm as the key, React will create a new
    // SearchResults component every time the search term changes.
    return (
      <SearchResults key={searchTerm} searchTerm={searchTerm} />
    );
  }
}

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      invalidSearch: false,
      results: []
    };
  }

  refresh() {
    var searchTerm = this.props.searchTerm;
    if (searchTerm !== "") {
      // Search on behalf of user 4.
      searchForSpot(searchTerm, (spotItems) => {
        this.setState({
          loaded: true,
          results: spotItems
        });
      });
    } else {
      this.setState({
        invalidSearch: true
      });
    }
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h4>Search Results for {this.props.searchTerm}</h4>
          <div className={hideElement(this.state.loaded || this.state.invalidSearch)}>Search results are loading...</div>
          <div className={hideElement(!this.state.invalidSearch)}>Invalid search query.</div>
        </div>
        <div className={hideElement(!this.state.loaded)}>
          <div className="panel-body">
            <div>Found {this.state.results.length} results.</div>
          </div>
          <div className="panel-footer">
          {
            this.state.results.map((searchItem) => {
              return (
                <SearchFeedItem key={searchItem._id} data={searchItem} />
              )
            })
          }
          </div>
        </div>
      </div>
    );
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
        <Navbar />
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
              <SearchEntry searchTerm={searchTerm}/>
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
      <Route path="search" component={SearchResultsPage} />
    </Route>
  </Router>
),document.getElementById('main_container'));
