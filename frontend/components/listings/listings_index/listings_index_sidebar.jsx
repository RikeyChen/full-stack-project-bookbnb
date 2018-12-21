import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class ListingsIndexSidebar extends React.Component {
  constructor(props) {
    super(props);
    const { maxPrice } = this.props;
    this.state = {
      maxPrice: 1000,
      startDate: null,
      endDate: null,
      focusedInput: null,
      openDropdown: 'hidden',
      numGuests: 1,
      numAdults: 1,
      numChildren: 0,
      numInfants: 0,
    };
    this.openDropdown = this.openDropdown.bind(this);
    this.handleApplyGuests = this.handleApplyGuests.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
  }

  handleApplyGuests(e) {
    e.preventDefault();
    this.props.updateFilter('guests', this.state.numGuests);
  }

  handleSlide(e) {
    console.log('VALUE:', e.target.value);
    console.log('maxPrice:', this.state.maxPrice);
    // e.preventDefault();
    this.setState({
      maxPrice: e.target.value,
    });
    this.props.updateFilter('max_price', this.state.maxPrice);
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

  openDropdown(e) {
    e.preventDefault();
    const css = (this.state.openDropdown === 'hidden') ? 'show' : 'hidden';
    this.setState({ openDropdown: css });
  }

  render() {
    const adultClassMinus = (
      this.state.numGuests === 1 || this.state.numAdults === 1
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
      <aside className="listings-index-sidebar">
        <div className="sidebar-dates">
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
            small
            showClearDates
            reopenPickerOnClearDates
            startDatePlaceholderText="Check in"
            endDatePlaceholderText="Check out"
          />
        </div>
        <span>Guests</span>
        <div className="index-dropdown">
          <button className="index-guests-dropdown-btn" onClick={this.openDropdown}>
            {this.state.numGuests}
            {' '}
            {this.state.numGuests > 1 ? 'guests' : 'guest'}
            {this.state.numInfants > 0 ? `, ${this.state.numInfants}` : null}
            {' '}
            {this.state.numInfants > 0 ? (this.state.numInfants === 1 ? 'infant' : 'infants') : null}
          </button>
          <div
            className="index-guests-dropdown"
            id={this.state.openDropdown}
          >
            <div>
              <div id="index-adults">
                <div>
                  <span>Adults</span>
                </div>
                <div className="calc">
                  <div className={adultClassMinus} onClick={this.changeNumGuests('adult')}>-</div>
                  <span>{this.state.numAdults}</span>
                  <div onClick={this.changeNumGuests('adult')}>+</div>
                </div>
              </div>
              <div id="index-children">
                <div className="children-text">
                  <span>Children</span>
                  <span>Ages 2-12</span>
                </div>
                <div className="calc">
                  <div className={childClassMinus} onClick={this.changeNumGuests('child')}>-</div>
                  <span>{this.state.numChildren}</span>
                  <div onClick={this.changeNumGuests('child')}>+</div>
                </div>
              </div>
              <div id="index-infants">
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
              <div className="apply-button">
                <button onClick={this.handleApplyGuests}>Apply</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <span className="price-range">Price range</span>
        <br />
        <div className="slidecontainer">
          <input
            onChange={this.handleSlide}
            min={1}
            max={1000}
            className="slider"
            type="range"
            id="mySlider"
            value={this.state.maxPrice}
            step={1}
          />
        </div>
      </aside>
    );
  }
}

export default ListingsIndexSidebar;
