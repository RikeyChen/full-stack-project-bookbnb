import React from 'react';
import ReactDOM from 'react-dom';
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
      numDays: null,
      numAdults: 0,
      numChildren: 0,
      numInfants: 0,
      openDropdown: 'hidden',
    };
    this.isDayBlocked = this.isDayBlocked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.unavailableDates = this.unavailableDates.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
  }

  unavailableDates() {
    let unavDates = [];
    for (let i = 0; i < this.props.bookings.length; i++) {
      unavDates = unavDates.concat(this.props.bookings[i].unavailable_dates);
    }
    return unavDates;
  }

  isDayBlocked(day) {
    return this.unavailableDates().some(date => (
      moment(date).isSame(day, 'day')
    ));
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

  openDropdown(e) {
    e.preventDefault();
    const css = (this.state.openDropdown === 'hidden') ? 'show' : 'hidden';
    this.setState({ openDropdown: css });
  }

  render() {
    const { price } = this.props;
    // if (this.props.bookings.length) {
    //   console.log('BOOKINGS:', this.props.bookings);

    //   console.log(this.unavailableDates());
    //   // debugger;
    // }

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
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate, numDays: (endDate - startDate) }); }}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput }); }}
          hideKeyboardShortcutsPanel
          showClearDates
          reopenPickerOnClearDates
          startDatePlaceholderText="Check in"
          endDatePlaceholderText="Check out"
          isDayBlocked={this.isDayBlocked}
          arrowIcon
        // small
        />
        <span id="guests-label">Guests</span>
        <div className="booking-form-dropdown">
          <button
            className="booking-form-guests-dropdown-btn"
            onClick={this.openDropdown}
          >
            1 guest
          </button>
          <div
            className="booking-form-guests-dropdown"
            id={this.state.openDropdown}
          >
            <div>
              <div id="dropdown-adults">
                <div>
                  <span>Adults</span>
                </div>
                <div className="calc">
                  <div>-</div>
                  <span>{this.state.numAdults}</span>
                  <div>+</div>
                </div>
              </div>
              <div id="dropdown-children">
                <div className="children-text">
                  <span>Children</span>
                  <span>Ages 2-12</span>
                </div>
                <div className="calc">
                  <div>-</div>
                  <span>{this.state.numChildren}</span>
                  <div>+</div>
                </div>
              </div>
              <div id="dropdown-infants">
                <div className="infants-text">
                  <span>Infants</span>
                  <span>Under 2</span>
                </div>
                <div className="calc">
                  <div>-</div>
                  <span>{this.state.numInfants}</span>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
