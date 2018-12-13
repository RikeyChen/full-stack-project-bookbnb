import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({
  currentUser, logout, openModal, location,
}) => {
  let searchBar;
  if (location.pathname === '/listings') {
    searchBar = (<input type="text" placeholder={'Try "San Francisco"'} />);
  } else searchBar = null;

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
          <button onClick={() => openModal('Sign up')}>Sign up</button>
          <button onClick={() => openModal('Log in')}>Log in</button>
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
          <button onClick={logout}>Logout</button>
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
