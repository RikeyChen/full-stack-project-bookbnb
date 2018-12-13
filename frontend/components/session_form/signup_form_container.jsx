import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSp = state => ({
  formComponents: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
  errors: state.errors.session,
  formType: 'Sign up',
});

const mDp = dispatch => ({
  processForm: user => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('Log in'))} className="otherform-btn">
      Log in
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSp, mDp)(SessionForm);
