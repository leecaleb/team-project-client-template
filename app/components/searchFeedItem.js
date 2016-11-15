import React from 'react';

export default class SearchFeedItem extends React.Component {
  render() {
    return (
      <div>
        <div className="search-title">
          <p><h4>Results for: "UMass dining"</h4></p>
          <p><h5>There are total 4 results</h5></p>
        </div>
        <hr />
        <ul className="media-list">
          <li className="media">
            <a className="media-left media-top" href="#">
              <img className="media-object" src="img\bershire.jpg" alt="Generic placeholder image" />
            </a>
            <div className="media-body">
              <h4 className="media-heading">Bershire Dining Common</h4>
              <p> Located in the Southwest Residential Area, this award-winning dining commons features many display cooking area with freshness in mind. The dining area is ...</p>
            </div>
          </li>
          <li className="media">
            <a className="media-left media-top" href="#">
              <img className="media-object" src="..." alt="Generic placeholder image" />
            </a>
            <div className="media-body">
              <h4 className="media-heading">Worcester Dining Common</h4>
              <p> Located in the Northeast Residential Area, Worcester Dining Commons is one of the ... Featuring continuous, all-you-care-to-eat dining, you may dine at either ...</p>
            </div>
          </li>
          <li className="media">
            <a className="media-left media-top" href="#">
              <img className="media-object" src="..." alt="Generic placeholder image" />
            </a>
            <div className="media-body">
              <h4 className="media-heading">Franklin Dining Common</h4>
              <p>  Enjoy a continuous, all-you care-to-eat assortment of dining concepts, such as sushi bar, pizza station, international bar, salad bar, stand alone vegetarian station, deli bar and cereal station, as well as many American fare items</p>
            </div>
          </li>
          <li className="media">
            <a className="media-left media-top" href="#">
              <img className="media-object" src="..." alt="Generic placeholder image" />
            </a>
            <div className="media-body">
              <h4 className="media-heading">Hampshire Dining Common</h4>
              <p> The goal of Hampshire DC is to be one of the healthiest and most sustainable dining operations in the nation. This will be done through serving minimally processed foods and more plant-based items at peak season, less red meat, more sustainable seafood and healthier oils, fats, and beverages.</p>
            </div>
          </li>
        </ul>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
