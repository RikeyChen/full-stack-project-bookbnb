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
import ListingShowContainer from './listings/listings_show/listing_show_container';
import ListingsIndex from './listings/listings_index';

const Header = (
  <header className="navbar">
    <Link to="/">
      <div className="navbar-logo" />
    </Link>
    <NavBarContainer />
  </header>
);

const SplashPic = () => (
  <div>
    <div id="splash-pic" />
  </div>
);

const App = () => (
  <div>
    <Modal />
    {Header}
    <Switch>
      <AuthRoute exact path="/" component={SplashPic} />
      <Route exact path="/listings" component={ListingsIndex} />
      <Route path="/listings/:listingId" component={ListingShowContainer} />
    </Switch>
  </div>
);

export default App;
