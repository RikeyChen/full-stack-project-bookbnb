import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings,
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking,
});

export const createBooking = (listingId, booking) => dispatch => (
  BookingApiUtil.createBooking(listingId, booking)
    .then(booking => dispatch(receiveBooking(booking)))
);
