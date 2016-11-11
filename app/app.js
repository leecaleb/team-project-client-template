import React from 'react';
import ReactDOM from 'react-dom';
  import Feed from './components/feed';

class App extends React.Component {
  render() {
    return (
      <div>Haha</div>
    )
  }
}

ReactDOM.render(
  <Feed />,
  document.getElementById('fb-feed')
);
