import React from 'react',
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSp = state => ({
  errors: state.errors.session,
  formType: 'Log in'
})

const mDp = dispatch => ({
  processForm: (user) => dispatch(login(user))
})

export default connect(mSp, mDp)(SessionForm);