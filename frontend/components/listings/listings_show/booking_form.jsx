import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      numGuests: 1,
    };
    this.isDayBlocked = this.isDayBlocked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.unavailableDates = this.unavailableDates.bind(this);
  }

  unavailableDates() {
    const unavDates = [];
    for (let i = 0; i < this.props.bookings.length; i++) {
      unavDates.concat(this.props.bookings[i].unavailable_dates);
    }
    return unavDates;
  }

  isDayBlocked(day) {
    this.unavailableDates.some(date => moment(date).isSame(day));
  }

  handleSubmit(e) {
    e.preventDefault();
    const newState = Object.assign({}, {
      checkin_date: this.state.startDate._d,
      checkout_date: this.state.endDate._d,
      num_guests: this.state.numGuests,
    });
    this.props.createBooking(this.props.listing.id, newState);
  }

  render() {
    const { price } = this.props;
    if (this.props.bookings.length) {
      console.log('BOOKINGS:', this.props.bookings);

      console.log(this.unavailableDates());
      // debugger;
    }

    return (
      <form className="booking-form" onSubmit={this.handleSubmit}>
        <header>
          <div>$</div>
          <div>{price}</div>
          <span>per night</span>
        </header>
        <div className="booking-form-stars">
          <div className="stars-outer">
            <div className="stars-inner" />
          </div>
          <div id="booking-form-review-count">300</div>
        </div>
        <hr />
        <span>Dates</span>
        <DateRangePicker
          startDateId="booking-form-start-date"
          endDateId="booking-form-end-date"
          minimumNights={1}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }); }}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput }); }}
          hideKeyboardShortcutsPanel
          showClearDates
          reopenPickerOnClearDates
          isDayBlocked={this.isDayBlocked}
          small
        />
        <span id="guests-label">Guests</span>
        <button id="booking-form-guests-dropdown">
          {/* <option default selected disabled>1 guest</option>
          <option value="adults">Adults</option>
          <option value="children">Children Ages 2-12</option>
          <option value="infants">Infants Under 2</option> */}
          1 guest
        </button>
        <button id="booking-form-btn" type="submit">
          Request to Book
        </button>
        <span id="not-charged-text">You won't be charged yet</span>
        <hr />
        <div>
          <strong>This home is on people's minds.</strong>
          <br />
          <br />
          It's been viewed 500+ times in the past week.
        </div>
      </form>
    );
  }
}

export default BookingForm;
