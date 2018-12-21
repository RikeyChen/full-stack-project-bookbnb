import React from 'react';
import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { updateFilter } from '../../../actions/filter_actions';

const mSp = state => ({
  listings: Object.values(state.entities.listings),
  maxPrice: state.ui.filters.max_price,
});

const mDp = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(mSp, mDp)(ListingsIndex);
