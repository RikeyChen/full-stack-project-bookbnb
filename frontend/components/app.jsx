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
import ListingsIndexContainer from './listings/listings_index/listings_index_container';


const SplashPic = () => (
  <div>
    <div id="splash-pic" />
  </div>
);

const App = ({ location }) => {
  const logo = (
    <Link to={location.pathname === '/' ? '/listings' : '/'}>
      <div className="navbar-logo" />
    </Link>
  );

  const Header = (
    <header className={location.pathname === '/' ? 'navbar splash' : 'navbar'}>
      {logo}
      <NavBarContainer />
    </header>
  );

  return (
    <div>
      <Modal />
      {Header}
      <Switch>
        <AuthRoute exact path="/" component={SplashPic} />
        <Route exact path="/listings" component={ListingsIndexContainer} />
        <Route path="/listings/:listingId" component={ListingShowContainer} />
      </Switch>
    </div>
  );
};

export default App;
