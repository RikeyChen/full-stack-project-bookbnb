import React from 'react';
import { connect } from 'react-redux';
import BookingForm from './booking_form';

const mSp = state => ({
  bookings: state.entities.bookings,
});

export default connect(mSp, mDp)(BookingForm);
