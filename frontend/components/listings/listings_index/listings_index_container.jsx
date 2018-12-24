import React from 'react';
import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { updateFilter, updateFilter2, clearFilters } from '../../../actions/filter_actions';

const mSp = (state) => {
  const guestsFilter = state.ui.filters.guests;

  const datesFilter = state.ui.filters.dates.start_date && state.ui.filters.dates.end_date ? state.ui.filters.dates : null;

  let listings = Object.values(state.entities.listings);

  if (guestsFilter) {
    listings = listings.filter(listing => (
      listing.max_guests >= guestsFilter
    ));
  }

  const parseDate = (date) => {
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  if (datesFilter && listings) {
    listings.forEach((listing, idx) => {
      if (state.entities.bookings[listing.id]) {
        if (state.entities.bookings[listing.id].unavailable_dates.includes(parseDate(datesFilter.start_date)) || state.entities.bookings[listing.id].unavailable_dates.includes(parseDate(datesFilter.end_date))) {
          delete listings[idx];
        }
      }
    });
    listings = listings.filter(el => el != null);
  }
  listings = listings.filter(el => el.price <= state.ui.filters.max_price);

  return (
    ({
      listings,
      maxPrice: state.ui.filters.max_price,
    })
  );
};

const mDp = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateFilter2: (filter, value) => dispatch(updateFilter2(filter, value)),
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(mSp, mDp)(ListingsIndex);
