import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import BookingFormContainer from './booking_form_container';

class ListingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }


  render() {
    const { listing } = this.props;

    const kitchenLogo = (
      listing.kitchen ? (
        <div>
          <div id="kitchen-logo" />
          <span>Kitchen</span>
        </div>
      ) : null
    );

    const heatingLogo = (
      listing.heating ? (
        <div>
          <div id="heating-logo" />
          <span>Heating</span>
        </div>
      ) : null
    );

    const wifiLogo = (
      listing.wifi ? (
        <div>
          <div id="wifi-logo" />
          <span>Wifi</span>
        </div>
      ) : null
    );

    const petsLogo = (
      listing.pets ? (
        <div>
          <div id="pets-logo" />
          <span>Pets</span>
        </div>
      ) : null
    );

    const parkingLogo = (
      listing.parking ? (
        <div>
          <div id="parking-logo" />
          <span>Parking</span>
        </div>
      ) : null
    );

    const tvLogo = (
      listing.tv ? (
        <div>
          <div id="tv-logo" />
          <span>TV</span>
        </div>
      ) : null
    );


    const unavailableDates = () => {
      let unavDates = [];
      for (let i = 0; i < this.props.bookings.length; i++) {
        unavDates = unavDates.concat(this.props.bookings[i].unavailable_dates);
      }
      return unavDates;
    };

    const isDayBlocked = (day) => {
      if (this.props.bookings) {
        return unavailableDates().some(date => (
          moment(date).isSame(day, 'day')
        ));
      } return true;
    };

    return (
      <div className="listing-detail-master">
        <div className="listing-detail-main-section">
          <header className="listing-detail-header">
            <div className="listing-detail-header-main">
              <div className="listing-detail-title-city">
                <h1>{listing.name}</h1>
                <span>{listing.city}</span>
              </div>
              <div className="listing-detail-core-amenities">
                <div id="guestsLogo" />
                <span className="core-amenities-count">{listing.max_guests}</span>
                <span>
                  {listing.max_guests > 1 ? 'guests' : 'guest'}
                </span>
                <div id="bedroomsLogo" />
                <span className="core-amenities-count">{listing.num_bedrooms}</span>
                <span>
                  {listing.num_bedrooms > 1 ? 'bedrooms' : 'bedroom'}
                </span>
                <div id="bedsLogo" />
                <span className="core-amenities-count">{listing.num_beds}</span>
                <span>
                  {listing.num_beds > 1 ? 'beds' : 'bed'}
                </span>
                <div id="bathLogo" />
                <span className="core-amenities-count">{listing.num_bathrooms}</span>
                bath
              </div>
            </div>
            <div className="listing-detail-host-pic">
              <img src={this.props.users[listing.host_id].photo_url} alt="Host Profile" />
              <span>{this.props.users[listing.host_id].first_name}</span>
            </div>
          </header>
          <div className="listing-detail-description">{listing.description}</div>
          <div className="listing-detail-info-btn">
            Read more about the space
            <i className="arrow down" />
          </div>
          <br />
          <br />
          <div className="listing-detail-contact-btn">
            Contact Host
          </div>
          <hr />
          <section className="listing-detail-amenities">
            <h1>Amenities</h1>
            <br />
            <div className="listing-detail-amenities-logos">
              {kitchenLogo}
              {heatingLogo}
              {wifiLogo}
              {petsLogo}
              {parkingLogo}
              {tvLogo}
            </div>
          </section>
          <hr />
          <h1><strong>Availability</strong></h1>
          <br />
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }); }}
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => { this.setState({ focusedInput }); }}
            numberOfMonths={2}
            hideKeyboardShortcutsPanel
            isDayBlocked={isDayBlocked}
          />
          <hr />
          <h1>Google Map will go here</h1>
          <hr />
          <h1>Reviews Component will go here</h1>
        </div>
        <div className="listing-detail-book-box-spacer">
          <div className="listing-detail-book-box">
            <BookingFormContainer price={this.props.listing.price} />
          </div>
        </div>
      </div>
    );
  }
}

export default ListingDetail;
