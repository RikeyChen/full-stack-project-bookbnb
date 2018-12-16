import React from 'react';
import { connect } from 'react-redux';
import { fetchListing } from '../../../actions/listing_actions';
import ListingShow from './listing_show';

const mSp = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.listingId],
  users: state.entities.users,
});

const mDp = dispatch => ({
  fetchListing: listingId => dispatch(fetchListing(listingId)),
});

export default connect(mSp, mDp)(ListingShow);
