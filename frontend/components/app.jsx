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

const App = () => (
  <div>
    <Modal />
    <header className="navbar">
      <Link to="/">
        <div className="navbar-logo">
          LOGO
        </div>
      </Link>
      <NavBarContainer />
    </header>
  </div>
);

export default App;
