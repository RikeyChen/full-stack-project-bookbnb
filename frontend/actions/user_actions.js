import * as UserApiUtil from '../util/user_api_util';
import { receiveListings } from './listing_actions';
import { receiveBookings } from './booking_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const fetchUser = () => dispatch => (
  UserApiUtil.fetchUser()
    .then(payload => (
      dispatch(receiveUser(payload.user)),
      dispatch(receiveListings(payload.listings)),
      dispatch(receiveBookings(payload.bookings))
    ))
);
