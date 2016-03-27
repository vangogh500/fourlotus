import React from 'react';

export default class ShopForm extends React.Component {
  render() {
    return (
      <div className="shop-form">
      <h4>Order Now</h4>
        <form>
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label HTMLFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label HTMLFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input id="address" type="text" className="validate" />
              <label HTMLFor="address">Street Address</label>
            </div>
            <div className="input-field col s2">
              <input id="state" type="text" className="validate" />
              <label HTMLFor="state">State</label>
            </div>
            <div className="input-field col s2">
              <input id="zip" type="text" className="validate" />
              <label HTMLFor="zip">ZIP</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="email" className="validate" />
              <label HTMLFor="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input id="phone" type="tel" className="validate" />
              <label HTMLFor="phone">Phone #</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <select>
                <option value="" disabled selected>Choose a design</option>
                <option value="1">Galaxy Red</option>
                <option value="2">Floral Pink</option>
                <option value="3">Deep Sea Blue</option>
              </select>
              <label>Design Selection</label>
            </div>
            <div className="input-field col s6">
              <input id="qty" type="number" className="validate" />
              <label HTMLFor="qty">Qty.</label>
            </div>
          </div>
          <input className="btn floatRight waves-effect waves-light" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
