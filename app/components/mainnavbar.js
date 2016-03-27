import React from 'react';
import { Link } from 'react-router';

export default class MainNavBar extends React.Component {
  render() {
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#" className="waves-effect waves-dark"><i className="fa fa-facebook-official black-text"></i></a></li>
          <li><a href="#" className="waves-effect waves-dark"><i className="fa fa-instagram black-text"></i></a></li>
          <li><a href="#" className="waves-effect waves-dark"><i className="fa fa-twitter black-text"></i></a></li>
        </ul>
        <nav className="white z-depth-0">
          <div className="nav-wrapper">
            <div className="container">
              <a href='#' className="brand-logo"><img src="./img/logo.png" height="64px"/></a>
              <ul className="right">
                <li><Link to="shop" href="#" className="black-text waves-effect waves-dark">Shop</Link></li>
                <li><a href="#" className="black-text waves-effect waves-dark">Contact</a></li>
                 <li><a className="dropdown-button black-text waves-effect waves-dark" href="#" data-activates="dropdown1"><i className="fa fa-caret-right"></i>
</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
