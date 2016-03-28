import React from 'react';

export default class ShopForm extends React.Component {
  render() {
    return (
      <div className="shop-form">
      <h4>Order Now</h4>
        <form action="MAILTO:fourlotuscontact@gmail.com" method="post" encType="text/plain">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" name="first_name" />
              <label HTMLFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" name="last_name" />
              <label HTMLFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="email" className="validate" name="email" />
              <label HTMLFor="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input id="phone" type="tel" className="validate" name="phone" />
              <label HTMLFor="phone">Phone #</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <select name="design">
                <option name="" disabled selected>Choose a design</option>
                <option name="1">Galaxy Red</option>
                <option name="2">Floral Pink</option>
                <option name="3">Deep Sea Blue</option>
              </select>
              <label>Design Selection</label>
            </div>
            <div className="input-field col s6">
              <input id="qty" type="number" className="validate" name="qty" />
              <label HTMLFor="qty">Qty.</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="comments" className="materialize-textarea" name="comments"></textarea>
              <label HTMLFor="comments">Comments</label>
            </div>
          </div>
          <input className="btn floatRight waves-effect waves-light" type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
