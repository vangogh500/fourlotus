import React from 'react';

export default class MainFooter extends React.Component {
  render() {
    return (
      <footer className="page-footer grey darken-3 footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Four Lotus</h5>
              <p className="grey-text text-lighten-4">Bucket Hat Distributor at UMass Amherst</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <p className="grey-text text-lighten-4">fourlotuscontact@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright grey darken-4">
          <div className="container">
          © 2016 Kai Matsuda
          </div>
        </div>
      </footer>
    )
  }
}
