import React from 'react';
import ReactDOM from 'react-dom';
import MainNavBar from './components/mainnavbar'
import Home from './components/home'
import MainFooter from './components/mainfooter'
import Shop from './components/shop'

class App extends React.Component {
  render() {
    return (
      <div>
        <MainNavBar />
        <Home />
        <MainFooter />
      </div>
    )
  }
}
class AppShop extends React.Component {
  render() {
    return (
      <div>
        <MainNavBar />
        <Shop />
        <MainFooter />
      </div>
    )
  }
}

var app = document.getElementById('app');

if(!(app === null)) {
  ReactDOM.render(
    <App />,
    app
  );
}
else {
  ReactDOM.render(
    <AppShop />,
    document.getElementById('shop')
  );
}
