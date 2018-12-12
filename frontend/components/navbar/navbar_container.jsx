import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';

const mSp = state => ({
  currentUser: state.entities.users[state.session.id],
});

const mDp = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mSp, mDp)(NavBar);
