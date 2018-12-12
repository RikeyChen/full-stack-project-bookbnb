import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';

export const NavBar = (props) => {
  let display;
  if (props.currentUser === undefined) {
    display = (
      <div>
        <nav>
          <Link to="/" className="navbar-logo-logged-out">
            LOGO
          </Link>
        </nav>
        <nav className="navbar-links">
          <button>Become a host</button>
          <button>Help</button>
          <SignUpFormContainer />
          <LoginFormContainer />
        </nav>
      </div>
    );
  } else {
    display = (
      <div>
        <nav>
          <Link to="/" className="navbar-logo-logged-in">
            LOGO
          </Link>
        </nav>
        <nav className="navbar-links">
          <button onClick={props.logout}>Logout</button>
        </nav>
      </div>
    );
  }
  return (
    <div>
      {display}
    </div>
  );
};

export default NavBar;
