import React from 'react';
import { connect } from 'react-redux';
import BookingForm from './booking_form';
import createBooking from '../../../actions/booking_actions';

const mSp = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.listingId],
  bookings: state.entities.bookings,
});

const mDp = dispatch => ({
  createBooking: (listingId, booking) => dispatch(createBooking(listingId, booking)),
});

export default connect(mSp, mDp)(BookingForm);
