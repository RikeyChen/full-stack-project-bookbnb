import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LISTING } from '../actions/listing_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_LISTING:
      return merge({}, oldState, { [action.user.id]: action.user });
    default:
      return oldState;
  }
};

export default usersReducer;
