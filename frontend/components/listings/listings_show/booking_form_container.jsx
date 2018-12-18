import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';
import { createBooking } from '../../../actions/booking_actions';

const mSp = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.listingId],
  bookings: state.entities.bookings,
  price: ownProps.price,
});

const mDp = dispatch => ({
  createBooking: (listingId, booking) => dispatch(createBooking(listingId, booking)),
});

export default withRouter(connect(mSp, mDp)(BookingForm));
