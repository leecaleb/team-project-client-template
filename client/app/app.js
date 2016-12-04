import React from 'react';
import ReactDOM from 'react-dom';
import SearchFeed from './components/searchFeed';
import FavoriteFeed from './components/favoriteFeed';
import LeftSidebar from './components/leftsidebar';
import RightSidebar from './components/rightsidebar';
import Navbar from './components/navbar';
import LocationFeed from './components/location';
import ErrorBanner from './components/errorbanner';
import { IndexRoute, Router, Route, browserHistory} from 'react-router'

ReactDOM.render(
  <Navbar />,
  document.getElementById('navbar')
);


ReactDOM.render(
  <RightSidebar /> ,
  document.getElementById('rightSidebar')
);

class Loc extends React.Component {
  render() {
    return (

      <div>
        {this.props.params.id}
<<<<<<< .merge_file_0ud40u
<<<<<<< .merge_file_lgTK6R
        <LocationFeed spot={this.props.params.id} array={this.props.array}/>
=======
        <LocationFeed user = {4} spot={this.props.params.id}/>
>>>>>>> .merge_file_Ee9aLE
=======
        <LocationFeed user = {4} spot={this.props.params.id}/>
>>>>>>> .merge_file_u0e09Z
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <ErrorBanner />
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div>

        <SearchFeed />
        <FavoriteFeed user ={4}/>

      </div>
    )
  }
}


ReactDOM.render((
  <Router history={browserHistory}>

    <Route path="/" component={App} >
      <IndexRoute component={Main} />
      <Route path="loc/:id" component={Loc} />
    </Route>
  </Router>
),document.getElementById('main-feed'));

ReactDOM.render(
  <LeftSidebar user={4} />,
  document.getElementById('leftSidebar')
);
