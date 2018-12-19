import React from 'react';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/booking_actions';

const NavBar = ({
  currentUser, logout, openModal, location, clearSessionErrors, clearErrors,
}) => {
  let searchBar;
  if (location.pathname === '/') {
    searchBar = null;
  } else {
    searchBar = (<input type="text" placeholder={'Try "San Francisco"'} />);
  }

  let display;
  if (currentUser === undefined) {
    display = (
      <div className="navbar-search-links-innerdiv">
        <nav className="navbar-search">
          {searchBar}
        </nav>
        <nav className={location.pathname === '/' ? 'navbar-links-splash' : 'navbar-links'}>
          <button>Become a host</button>
          <button>Help</button>
          <button onClick={() => {
            openModal('Sign up');
            clearSessionErrors();
          }}
          >
            Sign up
          </button>
          <button onClick={() => {
            openModal('Log in');
            clearSessionErrors();
          }}
          >
            Log in
          </button>
        </nav>
      </div>
    );
  } else {
    display = (
      <div className="navbar-search-links-innerdiv">
        <nav className="navbar-search">
          {searchBar}
        </nav>
        <nav className="navbar-links">
          <button>Become a host</button>
          <button>Trips</button>
          <button>Help</button>
          <button onClick={() => {
            logout();
            clearErrors();
          }}
          >
            Logout

          </button>
        </nav>
      </div>
    );
  }

  return (
    <div className="navbar-search-links-outterdiv">
      {display}
    </div>
  );
};

export default NavBar;
