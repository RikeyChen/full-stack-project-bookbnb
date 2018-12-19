import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';
import { createBooking, clearErrors } from '../../../actions/booking_actions';

const mSp = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.listingId],
  bookings: state.entities.bookings,
  price: ownProps.price,
  errors: state.errors.bookings,
});

const mDp = dispatch => ({
  createBooking: (listingId, booking) => dispatch(createBooking(listingId, booking)),
  clearErrors: () => dispatch(clearErrors()),
});

export default withRouter(connect(mSp, mDp)(BookingForm));
