import React from 'react';
import ReactDOM from 'react-dom';
import {
  login,
  logout,
  signup,
} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const store for later
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  ReactDOM.render(<h1>REACT IS WORKING!</h1>, root);
})
  ;