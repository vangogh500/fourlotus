import React from 'react';

export default class MainNavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="parallax-container">
          <div className="parallax"><img id="banner" src="./img/banner.png" /></div>
          <h1 className="bannerLogo white-text">FOUR LOTUS</h1>
          <blockquote className="bannerLogo2">
            <p>Just do you</p>
          </blockquote>
        </div>
        <div className="logoContainer">
        </div>
      </div>
    )
  }
}
