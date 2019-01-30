import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const RangeWithTooltip = createSliderWithTooltip(Slider.Range);

class ListingsIndexSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.defaultMinPrice = this.props.minPrice,
      this.defaultMaxPrice = this.props.maxPrice,
      this.state = {
        minPrice: this.defaultMinPrice,
        maxPrice: this.defaultMaxPrice,
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
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.applyChanges = this.applyChanges.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClearFilters = this.handleClearFilters.bind(this);
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false);
    this.props.clearFilters();
  }

  handleClickOutside(e) {
    if (!this.node.contains(e.target)) {
      this.setState({ openDropdown: 'hidden' });
    }
  }

  handleApplyGuests(e) {
    e.preventDefault();
    this.props.updateFilter2('guests', this.state.numGuests);
    this.openDropdown(e);
  }

  handleSlide(e) {
    this.setState({
      minPrice: e[0],
      maxPrice: e[1],
    });

    this.props.updateFilter2('min_price', parseInt(this.state.minPrice));
    this.props.updateFilter2('max_price', parseInt(this.state.maxPrice));
  }

  handleDateChange({ startDate, endDate }) {
    this.setState({ startDate, endDate, focusedInput: 'endDate' });
  }

  handleClearFilters(e) {
    e.preventDefault();
    this.props.clearFilters();
    this.setState({
      minPrice: this.defaultMinPrice,
      maxPrice: this.defaultMaxPrice,
      startDate: null,
      endDate: null,
      focusedInput: null,
      openDropdown: 'hidden',
      numGuests: 1,
      numAdults: 1,
      numChildren: 0,
      numInfants: 0,
    });
  }

  onFocusChange(focusedInput) {
    if (focusedInput) {
      this.setState({ focusedInput });
    } else this.setState({ focusedInput });
  }

  applyChanges() {
    this.setState({
      focusedInput: null,
    });

    if (this.state.startDate && this.state.endDate) {
      this.props.updateFilter2('dates', {
        start_date: this.state.startDate.toDate(),
        end_date: this.state.endDate.toDate(),
      });
    }
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
            onDatesChange={this.handleDateChange}
            focusedInput={this.state.focusedInput}
            onFocusChange={this.onFocusChange}
            hideKeyboardShortcutsPanel
            small
            startDatePlaceholderText="Check in"
            endDatePlaceholderText="Check out"
            renderCalendarInfo={() => (
              <div className="apply-button">
                <button id="dates-apply-button" type="button" onClick={this.applyChanges}>Apply</button>
              </div>
            )}
          />
        </div>
        <span>Guests</span>
        <div className="index-dropdown" ref={node => this.node = node}>
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
          <RangeWithTooltip
            min={1}
            max={1000}
            onChange={this.handleSlide}
            value={[this.state.minPrice, this.state.maxPrice]}
            tipFormatter={value => `${value}`}
            tipProps={{ overlayClassName: 'price' }}
            step={1}
            allowCross={false}
          />
        </div>
        <div className="clear-filters-btn">
          <button onClick={this.handleClearFilters}>Clear Filters</button>
        </div>
        <div className="not-splash-portfolio">
          <a
            href="https://www.rikeychen.com"
            className="portfolio-links"
            target="blank"
          >
            <div className="portfolio" id="portfolio" />
          </a>
          <a
            href="https://github.com/RikeyChen/full-stack-project-bookbnb"
            className="portfolio-links"
            target="blank"
          >
            <div className="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/rikeychen/"
            className="portfolio-links"
            target="blank"
          >
            <div className="linkedin" />
          </a>
        </div>
      </aside>
    );
  }
}

export default ListingsIndexSidebar;
