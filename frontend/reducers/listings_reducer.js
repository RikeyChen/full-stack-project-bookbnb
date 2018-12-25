import { merge } from 'lodash';
import { RECEIVE_LISTINGS, RECEIVE_LISTING, RECEIVE_TRIPS_LISTINGS } from '../actions/listing_actions';

const listingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      if (action.listings) {
        return Object.values(action.listings);
      } return {};
    case RECEIVE_TRIPS_LISTINGS:
      if (action.listings) {
        return action.listings;
      } return null;
    case RECEIVE_LISTING:
      const newListing = { [action.listing.id]: action.listing };
      return merge({}, oldState, newListing);
    default:
      return oldState;
  }
};

export default listingsReducer;
