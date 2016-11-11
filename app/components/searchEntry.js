import React from 'react';

export default class SearchEntry extends React.Component {

  render() {
    return (

      <div className="top">
        {/*-- Study --*/}
        <div className="col-sm-3">
          <div className="col">
            <p className="title">Study</p>
            <div className="row">
              <ul className="nav">
                <li className="nav-item">
                  <button type="button" className="btn btn-default space mybutton">Library</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-default space mybutton">ILC</button>
                </li>
                <li>
                  <button type="button" className="btn btn-default space mybutton">LGRC</button>
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
                <button type="button" className="btn btn-default space mybutton">Hampshire</button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-default space mybutton">Berkshire</button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-default space mybutton">Blue Wall</button>
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
                <button type="button" className="btn btn-default space mybutton">Recreation</button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-default space mybutton">Swimming</button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-default space mybutton">Dancing</button>
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
                <button type="button" className="btn btn-default space mybutton">Coffee</button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-default space mybutton">Dancing</button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-default space mybutton">Parking</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
