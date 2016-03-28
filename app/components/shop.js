import React from 'react';
import ShopForm from './shopform'

export default class Shop extends React.Component {
  render() {
    return (
      <div className="container shop">
        <h4>Twelve Designs</h4>
        <div className="slider shop-slider">
          <ul className="slides">
            <li>
              <img src="img/hat1.png" />
              <div className="caption right-align">
                <h3 className="black-text">Design 1</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
            <li>
              <img src="img/hat2.png" />
              <div className="caption right-align">
                <h3 className="black-text">Design 2</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
            <li>
              <img src="img/hat3.png" />
              <div className="caption right-align">
                <h3 className="black-text">Design 3</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
            <li>
              <img src="img/hat4.png" />
              <div className="caption right-align">
                <h3 className="black-text">Design 4</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
            <li>
              <img src="img/hat5.png" />
              <div className="caption right-align">
                <h3 className="black-text">Design 5</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
            <li>
              <img src="img/hat6.png" />
              <div className="caption right-align">
                <h3 className="black-text">Design 6</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
            <li>
              <img src="img/hat7.png" />
              <div className="caption right-align">
                <h3 className="black-text">Design 7</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
            <li>
              <img src="img/hat8.png" />
              <div className="caption right-align">
                <h3 className="black-text">Design 8</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
            <li>
              <img src="img/hat9.png" />
              <div className="caption right-align">
                <h3 className="black-text">Design 9</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
            <li>
              <img src="img/hat10.png" />
              <div className="caption right-align">
                <h3 className="black-text">Design 10</h3>
                <h5 className="light grey-text">Description here</h5>
              </div>
            </li>
            <li>
              <img src="img/hat11.png" />
              <div className="caption right-align">
                <h3 className="black-text">Design 11</h3>
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
