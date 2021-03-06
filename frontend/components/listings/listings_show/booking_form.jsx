import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      numGuests: 1,
      numNights: null,
      numAdults: 1,
      numChildren: 0,
      numInfants: 0,
      openDropdown: 'hidden',
    };
    this.isDayBlocked = this.isDayBlocked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.unavailableDates = this.unavailableDates.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false);
  }

  handleClickOutside(e) {
    if (!this.node.contains(e.target)) {
      this.setState({ openDropdown: 'hidden' });
    }
  }

  unavailableDates() {
    let unavDates = [];
    for (let i = 0; i < this.props.bookings.length; i++) {
      unavDates = unavDates.concat(this.props.bookings[i].unavailable_dates);
    }
    return unavDates;
  }

  isDayBlocked(day) {
    if (this.props.bookings) {
      return this.unavailableDates().some(date => (
        moment(date).isSame(day, 'day')
      ));
    } return null;
  }

  handleSubmit(e) {
    e.preventDefault();
    const newState = Object.assign({}, {
      checkin_date: this.state.startDate._d,
      checkout_date: this.state.endDate._d,
      num_guests: this.state.numGuests,
    });
    this.props.createBooking(this.props.listing.id, newState)
      .then(() => {
        this.props.clearErrors();
        this.setState({
          startDate: null,
          endDate: null,
          focusedInput: null,
          numGuests: 1,
          numNights: null,
          numAdults: 1,
          numChildren: 0,
          numInfants: 0,
          openDropdown: 'hidden',
        });
        this.props.history.push('/trips');
      });
  }

  openDropdown(e) {
    e.preventDefault();
    const css = (this.state.openDropdown === 'hidden') ? 'show' : 'hidden';
    this.setState({ openDropdown: css });
  }

  changeNumGuests(type) {
    return (e) => {
      if (type === 'adult' && e.target.innerText === '-') {
        this.setState({ numAdults: (this.state.numAdults - 1) });
        this.setState({ numGuests: (this.state.numGuests - 1) });
      } else if (type === 'adult' && e.target.innerText === '+') {
        this.setState({ numAdults: (this.state.numAdults + 1) });
        this.setState({ numGuests: (this.state.numGuests + 1) });
      } else if (type === 'child' && e.target.innerText === '-') {
        this.setState({ numChildren: (this.state.numChildren - 1) });
        this.setState({ numGuests: (this.state.numGuests - 1) });
      } else if (type === 'child' && e.target.innerText === '+') {
        this.setState({ numChildren: (this.state.numChildren + 1) });
        this.setState({ numGuests: (this.state.numGuests + 1) });
      } else if (type === 'infant' && e.target.innerText === '-') {
        this.setState({ numInfants: (this.state.numInfants - 1) });
      } else if (type === 'infant' && e.target.innerText === '+') {
        this.setState({ numInfants: (this.state.numInfants + 1) });
      }
    };
  }

  renderErrors() {
    if (!this.props.errors.length) return null;
    return (
      <ul className="booking-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="booking-errors-error">
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
    const { price } = this.props;
    const totalNightsPrice = Math.round(price * this.state.numNights);
    const totalServiceFee = Math.round(24 * this.state.numNights);
    const totalPrice = totalNightsPrice + totalServiceFee;

    const pricing = this.state.numNights > 0
      ? (
        <div>
          <div className="pricing">
            <span>{`$${price} x ${this.state.numNights} nights`}</span>
            <span>{`$${totalNightsPrice}`}</span>
          </div>
          <hr className="pricing-hr" />
          <div className="pricing">
            <span>Service fee</span>
            <span>{`$${totalServiceFee}`}</span>
          </div>
          <hr className="pricing-hr" />
          <div className="pricing">
            <span>Total</span>
            <span>{`$${totalPrice}`}</span>
          </div>
        </div>)
      : null;

    const adultClassPlus = (
      this.state.numGuests === this.props.listing.max_guests || this.state.numAdults === this.props.listing.max_guests
        ? 'disabledbutton'
        : ''
    );

    const adultClassMinus = (
      this.state.numGuests === 1 || this.state.numAdults === 1
        ? 'disabledbutton'
        : ''
    );

    const childClassPlus = (
      this.state.numGuests === this.props.listing.max_guests
        || this.state.numChildren === this.props.listing.max_guests
        ? 'disabledbutton'
        : ''
    );

    const childClassMinus = (
      this.state.numGuests === 1 || this.state.numChildren === 0
        ? 'disabledbutton'
        : ''
    );

    const infantClassPlus = (
      this.state.numInfants === 5
        ? 'disabledbutton'
        : ''
    );

    const infantClassMinus = (
      this.state.numInfants === 0
        ? 'disabledbutton'
        : ''
    );

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
          onDatesChange={({ startDate, endDate }) => {
            this.setState({
              startDate,
              endDate,
              numNights: (
                startDate && endDate ? endDate.diff(startDate, 'days') : null),
            });
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput }); }}
          hideKeyboardShortcutsPanel
          showClearDates
          reopenPickerOnClearDates
          startDatePlaceholderText="Check in"
          endDatePlaceholderText="Check out"
          isDayBlocked={this.isDayBlocked}
        />
        <span id="guests-label">Guests</span>
        <div className="booking-form-dropdown" ref={node => this.node = node}>
          <button
            className="booking-form-guests-dropdown-btn"
            onClick={this.openDropdown}
          >
            {this.state.numGuests}
            {' '}
            {this.state.numGuests > 1 ? 'guests' : 'guest'}
            {this.state.numInfants > 0 ? `, ${this.state.numInfants}` : null}
            {' '}
            {this.state.numInfants > 0 ? (this.state.numInfants === 1 ? 'infant' : 'infants') : null}
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
                  <div className={adultClassMinus} onClick={this.changeNumGuests('adult')}>-</div>
                  <span>{this.state.numAdults}</span>
                  <div className={adultClassPlus} onClick={this.changeNumGuests('adult')}>+</div>
                </div>
              </div>
              <div id="dropdown-children">
                <div className="children-text">
                  <span>Children</span>
                  <span>Ages 2-12</span>
                </div>
                <div className="calc">
                  <div className={childClassMinus} onClick={this.changeNumGuests('child')}>-</div>
                  <span>{this.state.numChildren}</span>
                  <div className={childClassPlus} onClick={this.changeNumGuests('child')}>+</div>
                </div>
              </div>
              <div id="dropdown-infants">
                <div className="infants-text">
                  <span>Infants</span>
                  <span>Under 2</span>
                </div>
                <div className="calc">
                  <div className={infantClassMinus} onClick={this.changeNumGuests('infant')}>-</div>
                  <span>{this.state.numInfants}</span>
                  <div className={infantClassPlus} onClick={this.changeNumGuests('infant')}>+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>{pricing}</div>
        {this.renderErrors()}
        <div />
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
