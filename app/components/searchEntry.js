import React from 'react';

export default class SearchEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div>

        <div className="top">

          {/*-- Study --*/}
          <div className="col-sm-3">
            <div className="col">
              <p className="title">Study</p>
              <div className="row">
                <ul className="nav">
                  <li className="nav-item">
                    <button type="button" className="btn btn-default space mybutton"
                      onClick = {() => this.setState({value: "Library"})}
                    >Library</button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn btn-default space mybutton"
                      onClick = {() => this.setState({value: "ILC"})}
                    >ILC</button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-default space mybutton"
                      onClick = {() => this.setState({value: "LGRC"})}
                    >LGRC</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*-- Food --*/}
          <div className="col-sm-3">
            <p className="title">Food</p>
            <div className="row">
              <ul className="nav">
                <li className="nav-item">
                  <button type="button" className="btn btn-default space mybutton"
                    onClick = {() => this.setState({value: "Hampshire"})}
                  >Hampshire</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-default space mybutton"
                    onClick = {() => this.setState({value: "Berkshire"})}
                  >Berkshire</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-default space mybutton"
                    onClick = {() => this.setState({value: "Blue Wall"})}
                  >Blue Wall</button>
                </li>
              </ul>
            </div>
          </div>

          {/*-- Entertainment --*/}
          <div className="col-sm-3">
            <p className="title">Entertainment</p>
            <div className="row">
              <ul className="nav">
                <li className="nav-item">
                  <button type="button" className="btn btn-default space mybutton"
                    onClick = {() => this.setState({value: "Recreation"})}
                  >Recreation</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-default space mybutton"
                    onClick = {() => this.setState({value: "Swimming"})}
                  >Swimming</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-default space mybutton"
                    onClick = {() => this.setState({value: "Dancing"})}
                  >Dancing</button>
                </li>
              </ul>
            </div>
          </div>

          {/*-- Social --*/}
          <div className="col-sm-3">
            <p className="title">Social</p>
            <div className="row">
              <ul className="nav">
                <li className="nav-item">
                  <button type="button" className="btn btn-default space mybutton"
                    onClick = {() => this.setState({value: "Coffee"})}
                  >Coffee</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-default space mybutton"
                    onClick = {() => this.setState({value: "Dancing"})}
                  >Dancing</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-default space mybutton"
                    onClick = {() => this.setState({value: "Parking"})}
                  >Parking</button>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mid" id="mid">
          <form role="search">
            <div className="input-group">
              <input type="text" className="form-control search-form bar_size seach-length" placeholder="Let's get tags !"
              value = {this.state.value}
              />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-default search-btn bar_size">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
            </div>
          </form>
        </div>

      </div>
    );
  }
}
