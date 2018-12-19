import * as ListingApiUtil from '../util/listing_api_util';
import { receiveBookings } from './booking_actions';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const receiveListing = ({ listing, user }) => ({
  type: RECEIVE_LISTING,
  listing,
  user,
});

export const fetchListings = filters => dispatch => (
  ListingApiUtil.fetchListings(filters)
    .then(listings => dispatch(receiveListings(listings)))
);
export const fetchListing = listingId => dispatch => (
  ListingApiUtil.fetchListing(listingId)
    .then(payload => (
      dispatch(receiveListing({ listing: payload.listing, user: payload.user })),
      dispatch(receiveBookings(payload.bookings))
    ))
);
