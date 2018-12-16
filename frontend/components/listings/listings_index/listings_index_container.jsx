import React from 'react';
import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import fetchListings from '../../../actions/listing_actions';
import selectListingsByKeyType from '../../../reducers/selectors';

const mSp = state => ({
  listings: state.entities.listings,
});

const mDp = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  selectListingsByKeyType,
});

export default connect(mSp, mDp)(ListingsIndex);
