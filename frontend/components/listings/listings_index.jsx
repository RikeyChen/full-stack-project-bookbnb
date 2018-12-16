import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ListingsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null,
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <div className="listings-index-master">
        <aside>
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
          <span>Guests</span>
          <button id="booking-form-guests-dropdown">
            {/* <option default selected disabled>1 guest</option>
            <option value="adults">Adults</option>
            <option value="children">Children Ages 2-12</option>
            <option value="infants">Infants Under 2</option> */}
            1 guest
          </button>
          <hr />
          <span>Price range</span>
          <div>Price slider goes here</div>
        </aside>
      </div>
    );
  }
}

export default ListingsIndex;
