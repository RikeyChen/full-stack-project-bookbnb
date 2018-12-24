import fetchUserUtil from '../util/user_api_util';
import { receiveTripsListings } from './listing_actions';
import { receiveBookings } from './booking_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const fetchUser = () => dispatch => (
  fetchUserUtil()
    .then(payload => (
      dispatch(receiveUser(payload.user)),
      dispatch(receiveTripsListings(payload.listings)),
      dispatch(receiveBookings(payload.bookings))
    ))
);
