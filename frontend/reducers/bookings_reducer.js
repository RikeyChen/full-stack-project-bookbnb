import { merge } from 'lodash';
import { RECEIVE_BOOKINGS, RECEIVE_BOOKING } from '../actions/booking_actions';

const bookingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return Object.values(action.bookings);
    case RECEIVE_BOOKING:
      const newBooking = { [action.booking.id]: action.booking };
      return merge([], oldState, [newBooking]);
    default:
      return oldState;
  }
};

export default bookingsReducer;
