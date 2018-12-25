import React from 'react';
import TripsItem from './trips_item';

class Trips extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { currentUser, listings, bookings } = this.props;
    if (!currentUser || !bookings.length) return null;
    return (
      <div className="trips-main">
        <h1 className="trips-welcome-message">
          {' '}
          <span>
            Welcome back,
            {' '}
            {currentUser.first_name}
          </span>
          <img className="trips-user-pic" src={currentUser.photo_url} alt="" />
        </h1>
        <h2>Upcoming Trips</h2>
        <hr />
        <ul className="trips-items">
          {bookings.map(booking => (
            <TripsItem booking={booking} listing={listings[booking.listing_id]} key={booking.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Trips;
