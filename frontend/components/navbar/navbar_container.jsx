import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import { logout, clearSessionErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/booking_actions';

const mSp = state => ({
  currentUser: state.entities.users[state.session.id],
});

const mDp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  clearErrors: () => dispatch(clearErrors()),
});

export default withRouter(connect(mSp, mDp)(NavBar));
