import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'Log in':
      // component = <h1>Log in</h1>;
      // console.log(modal);
      component = <LoginFormContainer />;
      break;
    case 'Sign up':
      // component = <h1>Sign up</h1>;
      // console.log(modal);
      component = <SignupFormContainer />;
      break;
    default:
      console.log(modal);
      component = <h1>HI</h1>;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <span className="close">&times;</span>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        dtfyguhj
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
