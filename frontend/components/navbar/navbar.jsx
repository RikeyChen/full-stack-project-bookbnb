import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = (props) => {
  let display;
  if (props.currentUser.id === undefined) {
    display = (
      <div>
        <nav>
          <Link className="navbar-logo-logged-out" onClick />
        </nav>
        <nav className="navbar-links">
          <button>Become a host</button>
          <button>Help</button>
          <SignUpForm />
          <LoginForm />
        </nav>
      </div>
    );
  } else {
    display = (
      <div>
        <nav>
          <Link className="navbar-logo-logged-in" onClick />
        </nav>
        <nav className="navbar-links">
          <button onClick={props.logout}>Logout</button>
        </nav>
      </div>
    );
  }
  return (
    { display }
  );
};

export default NavBar;
