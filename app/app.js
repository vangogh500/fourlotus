import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import MainNavBar from './components/mainnavbar'
import Home from './components/home'
import Shop from './components/shop'

class App extends React.Component {
  render() {
    return (
      <div>
        <MainNavBar />
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="shop" component={Shop} />
    </Route>
  </Router>,
  document.getElementById('app')
);
