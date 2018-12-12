import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';

class NavBar extends React.Component {
  componentDidMount() {
    const modal = document.getElementById('signlog-modal');
    const btn = document.getElementById('btn-modal');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function () {
      modal.style.display = 'block';
    };

    span.onclick = function () {
      modal.style.display = 'none';
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }

  render() {
    let display;
    if (this.props.currentUser === undefined) {
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

            {/* modal test */}
            <button id="btn-modal">Sign up</button>
            <button id="btn-modal">Log in</button>
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
            <button onClick={this.props.logout}>Logout</button>
          </nav>
        </div>
      );
    }

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default NavBar;
