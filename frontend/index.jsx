import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {
  login,
  signup,
  logout,
} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  ReactDOM.render(<h1>REACT IS WORKING!</h1>, root);
});
