import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  let display;
  if (!this.props.currentUser.id) {
    display = (
      <div>
        <nav>
          <Link className="navbar-logo-logged-out" onClick />
        </nav>
        <nav className="navbar-links">
          <button>Become a host</button>
          <button>Help</button>
          <CreateUserForm />
          <CreateSessionForm />
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
          <button onClick={this.props.logout}>Logout</button>
        </nav>
      </div>
    );
  }
  return (
    { display }
  );
};

export default NavBar;
