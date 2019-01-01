import React from 'react';
import TripsItem from './trips_item';

const parseDate = (date) => {
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};

class Trips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'Upcoming Trips',
      upcomingTrips: [],
      pastTrips: [],
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.bookings instanceof Array && newProps.bookings.length) {
      const upcomingTrips = newProps.bookings.filter(
        booking => booking.checkout_date >= parseDate(new Date()),
      );

      const pastTrips = newProps.bookings.filter(
        booking => booking.checkout_date < parseDate(new Date()),
      );

      this.setState({ upcomingTrips, pastTrips });
    }
  }

  handleTabClick(tab) {
    return (e) => {
      e.preventDefault();
      this.setState({ currentTab: tab });
    };
  }

  render() {
    const { currentUser, listings, bookings } = this.props;
    const { currentTab, upcomingTrips, pastTrips } = this.state;
    const userPic = (
      currentUser.photo_url
        ? <img className="trips-user-pic" src={currentUser.photo_url} alt="" />
        : null
    );

    const trips = (
      !currentUser || !bookings.length
        ? <div>You do not have any upcoming trips</div>
        : (
          <ul className="trips-items">
            {(currentTab === 'Upcoming Trips' ? upcomingTrips : pastTrips).map(booking => (
              <TripsItem booking={booking} listing={listings[booking.listing_id]} key={booking.id} />
            ))}
          </ul>
        )
    );

    return (
      <div className="trips-main">
        <h1 className="trips-welcome-message">
          <span>
            Welcome back,
            {' '}
            {currentUser.first_name}
          </span>
          {userPic}
        </h1>
        <div>
          <h2 onClick={this.handleTabClick('Upcoming Trips')}>Upcoming Trips</h2>
          <h2 onClick={this.handleTabClick('Past Trips')}>Past Trips</h2>
        </div>
        <hr />
        {trips}
      </div>
    );
  }
}

export default Trips;
