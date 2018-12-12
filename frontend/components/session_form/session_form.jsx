import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.blankState = Object.assign({}, this.props.formComponents);
    this.state = this.props.formComponents;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState(this.blankState);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let formDisplay;
    if (this.props.formType === 'Sign up') {
      formDisplay = (
        <form className="signup-login-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <input type="email" value={this.state.email} onChange={this.update('email')} />
          <input type="text" value={this.state.firstName} onChange={this.update('firstName')} />
          <input type="text" value={this.state.lastName} onChange={this.update('lastName')} />
          <input type="password" value={this.state.password} onChange={this.update('password')} />
          <input className="signup-login-form-btn" type="submit" value={this.props.formType} />
          <br />
          <h5>Already have a Bookbnb account? Log in</h5>
        </form>
      );
    } else {
      formDisplay = (
        <form className="signup-login-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <input type="email" value={this.state.email} onChange={this.update('email')} />
          <input type="password" value={this.state.password} onChange={this.update('password')} />
          <input className="signup-login-form-btn" type="submit" value={this.props.formType} />
          <br />
          <h5>Don't have an account? Sign Up</h5>
        </form>
      );
    }

    return (
      <div className="signup-login-form-container">
        {formDisplay}
      </div>
    );
  }
}

export default SessionForm;
