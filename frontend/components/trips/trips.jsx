import React from 'react';
import TripsItem from './trips_item';

class Trips extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    if (!this.props.currentUser) return null;
    const { currentUser, listings, bookings } = this.props;
    return (
      <div>
        <h1>
          Hi,
          {' '}
          {currentUser.first_name}
        </h1>
        <h2>Upcoming Trips</h2>
        <ul>
          {bookings.map(booking => (
            <li>
              <TripsItem booking={booking} listing={listings[booking.listing_id]} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Trips;
