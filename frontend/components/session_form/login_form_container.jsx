import React from 'react';
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSp = state => ({
  formComponents: {
    email: '',
    password: '',
  },
  errors: state.errors.session,
  formType: 'Log in',
});

const mDp = dispatch => ({
  processForm: user => dispatch(login(user)),
  otherForm: (
    <button
      onClick={() => {
        dispatch(openModal('Sign up'));
        dispatch(clearSessionErrors());
      }}
      className="otherform-btn"
    >
      Sign up
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSp, mDp)(SessionForm);
