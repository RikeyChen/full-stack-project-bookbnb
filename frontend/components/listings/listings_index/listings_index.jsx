import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import ListingsIndexItem from './listings_index_item';
import selectListingsByKeyType from '../../../reducers/selectors';

class ListingsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'San Francisco',
      price: null,
      startDate: null,
      endDate: null,
      focusedInput: null,
      listings: null,
    };
  }

  componentDidMount() {
    this.props.fetchListings();
    // .then(listings => this.setState({
    //   listings: selectListingsByKeyType(
    //     listings, 'city', this.state.city,
    //   ),
    // }));
  }

  render() {
    if (this.props.listings.length === 0) return null;

    return (
      <div className="listings-index-master">
        <aside className="listings-index-sidebar">
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
        <div className="listings-index-map-container">
          <main className="listings-index-main">
            <header>300+ homes</header>
            <div className="listings-index-items">
              {this.props.listings.map(listing => (
                <ListingsIndexItem listing={listing} key={listing.id} />
              ))}
            </div>
          </main>
          <aside className="listings-index-map">
            Google Map
          </aside>
        </div>
      </div>
    );
  }
}

export default ListingsIndex;
