import React from 'react';

export default class RightSidebar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="row topspots-title">
              <div className="col-md-12">
                Top Spots
              </div>
            </div>
            <div className="row topspots-pics">
              <div className="col-md-12">
                <img src="img/berk.jpg"/>
              </div>
            </div>
            <div className="row topspots-desc">
              <div className="col-md-12">
                <a href="#">Berkshire Dining Commons</a>
                <br />
                Current Status: Busy
                <br />
                Hours of Operation:
                <br />
                Monday - Sunday
                <br />
                11:00 AM - 11:59 PM
                <br />
                <div className="topspots-topposts">"Way to crowded here, but you'll eat here and you'll like it!"</div><div className="topspots-username">- FoodLover6969</div>
              </div>
            </div>
            <div className="row topspots-pics">
              <div className="col-md-12">
                <img src="img/frank.jpg"/>
              </div>
            </div>
            <div className="row topspots-desc">
              <div className="col-md-12">
                <a href="#">Franklin Dining Commons</a>
                <br />
                Current Status: Empty
                <br />
                Hours of Operation:
                <br />
                Sunday - Thursday
                <br />
                7:00 AM - 10:00 PM
                <br />
                Friday - Saturday
                <br />
                7:00 AM - 9:00 PM
                <br />
                <div className="topspots-topposts">"Nobody is here right now and there is a reason for that. It's a really terrible place to eat. Avoid at all costs."</div><div className="topspots-username">- FriedOysterKid</div>
              </div>
            </div>
            <div className="row topspots-pics">
              <div className="col-md-12">
                <img src="img/bluewall.jpg"/>
              </div>
            </div>
            <div className="row topspots-desc">
              <div className="col-md-12">
                <a href="#">Blue Wall</a>
                <br />
                Current Status: Very Busy
                <br />
                Hours of Operation:
                <br />
                Monday - Sunday
                <br />
                10:30 AM - 9:00 PM
                <br />
                <div className="topspots-topposts">"WAAAAYYYY 2 crowded here."</div><div className="topspots-username">- MyDadForgotMyBirthday74</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
