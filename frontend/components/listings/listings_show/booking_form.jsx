import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    const { price } = this.props;
    return (
      <div className="booking-form">
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
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }); }}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput }); }}
          hideKeyboardShortcutsPanel
        />
        <span id="guests-label">Guests</span>
        <button id="booking-form-guests-dropdown">
          {/* <option default selected disabled>1 guest</option>
          <option value="adults">Adults</option>
          <option value="children">Children Ages 2-12</option>
          <option value="infants">Infants Under 2</option> */}
          1 guest
        </button>
        <button id="booking-form-btn">
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
      </div>
    );
  }
}

export default BookingForm;
