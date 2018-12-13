import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    // this.blankState = Object.assign({}, this.props.formComponents);
    this.state = this.props.formComponents;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    // this.props.closeModal();
    this.setState({ password: '' });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  renderErrors() {
    return (
      <ul className="signlog-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="signlog-errors-error">
            <span>X</span>
            <div>
              {error}
            </div>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let formDisplay;
    if (this.props.formType === 'Sign up') {
      formDisplay = (
        <form className="signlog-modal-form" onSubmit={this.handleSubmit}>
          <div>
            <span className="close" onClick={this.props.closeModal}>
              &times;
            </span>
          </div>
          <br />
          <div>
            <input
              type="email"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email address"
            />
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.update('firstName')}
              placeholder="First name"
            />
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.update('lastName')}
              placeholder="Last name"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            {this.renderErrors()}
          </div>
          <button
            className="signup-login-form-btn"
            type="submit"
          >
            {this.props.formType}
          </button>
          <br />
          <div>
            <hr />
          </div>
          <h5 className="otherform-btn-section">
            <div>
              Already have a Bookbnb account?
            </div>
            {this.props.otherForm}
          </h5>
        </form>
      );
    } else {
      formDisplay = (
        <form className="signlog-modal-form" onSubmit={this.handleSubmit}>
          <div>
            <span className="close" onClick={this.props.closeModal}>
              &times;
            </span>
          </div>
          <br />
          <div>
            <input
              type="email"
              value={this.state.email}
              onChange={this.update('email')}
              placeholer="Email address"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            {this.renderErrors()}
          </div>
          <button
            className="signup-login-form-btn"
            type="submit"
          >
            {this.props.formType}
          </button>
          <br />
          <div>
            <hr />
          </div>
          <h5>
            <div className="otherform-btn-section">
              Don't have an account?
            </div>
            {this.props.otherForm}

          </h5>
        </form>
      );
    }

    return (
      <div id="signup-login-form-container">
        {formDisplay}
      </div>
    );
  }
}

export default SessionForm;
