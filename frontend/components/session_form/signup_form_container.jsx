import React from 'react',
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSp = state => ({
  errors: state.errors.session,
  formType: 'Sign up'
})

const mDp = dispatch => ({
  processForm: (user) => dispatch(signup(user))
})

export default connect(mSp, mDp)(SessionForm);