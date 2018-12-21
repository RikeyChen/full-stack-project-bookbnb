import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_INDEX_BOOKINGS = 'RECEIVE_INDEX_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings,
});

export const receiveIndexBookings = bookings => ({
  type: RECEIVE_INDEX_BOOKINGS,
  bookings,
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const createBooking = (listingId, booking) => dispatch => (
  BookingApiUtil.createBooking(listingId, booking)
    .then(
      booking => dispatch(receiveBooking(booking)),
      errors => dispatch(receiveErrors(errors.responseJSON)),
    )
);
