import React from 'react';

class Trips extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    if (!this.props.currentUser) return null;
    const { currentUser } = this.props;
    return (
      <div>
        <h1>
          Hi,
          {' '}
          {currentUser.first_name}
        </h1>
        <h2>Upcoming Trips</h2>
        <div />
      </div>
    );
  }
}

export default Trips;
