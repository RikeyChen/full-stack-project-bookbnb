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
        <div>stars</div>
        <div>reviews count</div>
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
        />
        <span id="guests-label">Guests</span>
        <select>
          <option default disabled>1 guest</option>
          <option value="adults">Adults</option>
          <option value="children">Children Ages 2-12</option>
          <option value="infants">Infants Under 2</option>
        </select>
        <button id="booking-form-btn">
          Request to Book
        </button>
        <div>You won't be charged yet</div>
      </div>
    );
  }
}

export default BookingForm;
