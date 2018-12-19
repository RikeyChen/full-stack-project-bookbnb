import React from 'react';
import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { fetchListings } from '../../../actions/listing_actions';
import { updateBounds } from '../../../actions/filter_actions';

const mSp = state => ({
  listings: Object.values(state.entities.listings),
});

const mDp = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  updateBounds: bounds => dispatch(updateBounds(bounds)),
});

export default connect(mSp, mDp)(ListingsIndex);
