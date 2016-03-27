import React from 'react';
import ShopForm from './shopform'

export default class Shop extends React.Component {
  componentDidMount() {
    document.getElementsByClassName("slider")[0].slider({full_width: true});
  }
  render() {
    return (
      <div className="container shop">
        <h4>Twelve Designs</h4>
        <div className="slider shop-slider">
          <ul className="slides">
            <li>
              <img src="img/hat2.png" />
              <div className="caption right-align">
                <h3 className="black-text">Floral Pink</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
            <li>
              <img src="img/hat2.png" />
              <div className="caption right-align">
                <h3 className="black-text">Floral Pink</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
            <li>
              <img src="img/hat2.png" />
              <div className="caption right-align">
                <h3 className="black-text">Floral Pink</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
            <li>
              <img src="img/hat2.png" />
              <div className="caption right-align">
                <h3 className="black-text">Floral Pink</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
          </ul>
        </div>
        <ShopForm />
      </div>
    )
  }
}
