import { merge } from 'lodash';
import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';

const listingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      if (action.listings) {
        return Object.values(action.listings);
      } return {};
    case RECEIVE_LISTING:
      const newListing = { [action.listing.id]: action.listing };
      return merge({}, oldState, newListing);
    default:
      return oldState;
  }
};

export default listingsReducer;
