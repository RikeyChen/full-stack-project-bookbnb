import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = ({ windowHeight }) => (
  <div>
    <Modal />
    <header className="navbar">
      <Link to="/">
        <div className="navbar-logo" />
      </Link>
      <NavBarContainer />
    </header>
    <Switch>
      {/* <div id="splash-pic" style={{ height: `${windowHeight}` }} /> */}
      {/* {console.log(windowHeight)} */}
      {/* <ProtectedRoute
        exact
        path="/home"
        component={<div><img src="splash_outdoor.jpeg" alt="splash" /></div>}
      /> */}
    </Switch>
  </div>
);

export default App;
