import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';

const App = () => (
  <div>
    <header className="navbar">
      <h1>Welcome to Bookbnb!</h1>
      <NavBarContainer />
    </header>
  </div>
);

export default App;
