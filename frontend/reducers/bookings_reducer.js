import { merge } from 'lodash';
import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, RECEIVE_INDEX_BOOKINGS } from '../actions/booking_actions';

const bookingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_BOOKINGS:
      if (action.bookings) {
        return Object.values(action.bookings);
      } return [];
    case RECEIVE_INDEX_BOOKINGS:
      if (action.bookings) {
        return action.bookings;
      } return {};
    case RECEIVE_BOOKING:
      return merge([], oldState, [action.booking]);
    default:
      return oldState;
  }
};

export default bookingsReducer;
